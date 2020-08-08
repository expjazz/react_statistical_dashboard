import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import allSelects from '../selectors/allSelects';
import SelectTag from './SelectTag';
import { setIndexDataTwitter, setIndexDataFacebook, setIndexDataInstagram } from '../actionCreators/indexData';

export default function LineGraphAll() {
  const dispatch = useDispatch();
  const { selectListsByPresidents, selectListOnlyPresidents } = allSelects;
  const rowsByPresident = useSelector(selectListsByPresidents);
  const presidents = useSelector(selectListOnlyPresidents);
  const socialMediaTags = useSelector(state => state.indexDataReducer.social);
  const currentTag = Object.keys(socialMediaTags)[0];
  const tags = socialMediaTags[currentTag].map(row => row[0]);
  const [currentQuery, setCurrentQuery] = useState(['Followers', 'twitter_fans']);
  const [colors] = useState(['red', 'blue', 'yellow', 'purple', 'green', 'gray', 'orange', 'pink']);
  const [presidentInChart, setPresidentInChart] = useState(['Donald Trump']);
  const handleSelectChangePresident = e => {
    const newPresidents = [...presidentInChart, e.target.value];
    setPresidentInChart(newPresidents);
  };

  const handleSearchQuery = e => {
    const toState = socialMediaTags[currentTag].find(row => row[0] === e.target.value);
    setCurrentQuery(toState);
  };

  const handleSelectChangeSocial = e => {
    switch (e.target.value) {
      case 'Twitter':
        setCurrentQuery(['Followers', 'twitter_fans']);
        dispatch(setIndexDataTwitter(
          {
            Twitter: [
              ['Followers', 'twitter_fans'],
              ['Posts', 'twitter_number_posts'],
              ['Likes', 'twitter_number_likes'],
              ['Retweets', 'twitter_retweets'],
            ],
          },
        ));

        break;

      case 'Facebook':
        setCurrentQuery(['Followers', 'fb_followers']);
        dispatch(setIndexDataFacebook({
          Facebook: [
            ['Followers', 'fb_followers'],
            [' Likes', 'fb_number_likes'],
            ['Comments', 'fb_number_comments'],
            ['Posts', 'fb_number_posts'],
          ],
        }));

        break;
      case 'Instagram':
        setCurrentQuery(['Followers', 'insta_followers']);
        dispatch(setIndexDataInstagram({
          Instagram: [
            ['Followers', 'insta_followers'],
            ['Comments', 'insta_number_comments'],
            ['Posts', 'insta_number_posts'],
            ['Likes', 'insta_number_likes'],
          ],
        }));

        break;
      default:
        return '';
    }
  };
  if (Object.keys(rowsByPresident).length === 0) {
    return <p>loading</p>;
  }
  const setData = social => {
    let count = 0;
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dataset = [];
    presidentInChart.forEach(president => {
      const cleanedData = rowsByPresident[president].map(row => row[social]);
      if (count > colors.length - 1) count = -1;
      count += 1;
      dataset.push({
        data: cleanedData,
        borderColor: colors[count],
        label: president,
      });
    });
    return { labels, datasets: dataset };
  };
  const data = setData(currentQuery[1]);

  return (
    <>
      <SelectTag content={presidents} parentState={handleSelectChangePresident} value={presidentInChart} />
      <div className="socialMedia">
        <SelectTag content={['Twitter', 'Facebook', 'Instagram']} value={Object.keys(socialMediaTags)[0]} parentState={handleSelectChangeSocial} />
      </div>
      <div className="socialTags">
        <SelectTag content={tags} value={currentQuery[0]} parentState={handleSearchQuery} />
      </div>
      <Line data={data} />
    </>
  );
}
