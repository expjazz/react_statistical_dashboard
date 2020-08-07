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
  const socialMedia = useSelector(state => state.indexDataReducer.social);
  console.log(socialMedia);
  const [colors] = useState(['red', 'blue', 'yellow', 'purple', 'green', 'gray', 'orange', 'pink']);
  const [presidentInChart, setPresidentInChart] = useState(['Donald Trump']);
  const handleSelectChangePresident = e => {
    const newPresidents = [...presidentInChart, e.target.value];
    setPresidentInChart(newPresidents);
  };

  const handleSelectChangeSocial = e => {
    switch (e.target.value) {
      case 'Twitter':
        dispatch(setIndexDataTwitter(
          {
            Twitter: {
              Followers: 'twitter_fans',
              Posts: 'twitter_number_posts',
              Likes: 'twitter_number_likes',
              Retweets: 'twitter_retweets',
            },
          },
        ));

        break;

      case 'Facebook':
        dispatch(setIndexDataFacebook({
          Facebook: {
            Followers: 'fb_followers',
            Likes: 'fb_number_likes',
            Comments: 'fb_number_comments',
            Posts: 'fb_number_posts',
          },
        }));

        break;
      case 'Instagram':
        dispatch(setIndexDataInstagram({
          Instagram: {
            Followers: 'insta_followers',
            Comments: 'insta_number_comments',
            Posts: 'insta_number_posts',
            Likes: 'insta_number_likes',
          },
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
  const data = setData('fb_followers');

  return (
    <>
      <SelectTag content={presidents} parentState={handleSelectChangePresident} value={presidents[0]} />
      <div className="socialMedia">
        <SelectTag content={['Twitter', 'Facebook', 'Instagram']} value={Object.keys(socialMedia)[0]} parentState={handleSelectChangeSocial} />
      </div>
      <Line data={data} />
    </>
  );
}
