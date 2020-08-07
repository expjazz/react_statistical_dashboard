import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import allSelects from '../selectors/allSelects';
import SelectTag from './SelectTag';

export default function LineGraphAll() {
  const { selectListsByPresidents, selectListOnlyPresidents } = allSelects;
  const rowsByPresident = useSelector(selectListsByPresidents);
  const presidents = useSelector(selectListOnlyPresidents);
  const [socialMedia, setSocialMedia] = useState({
    Twitter: {
      Followers: 'twitter_fans',
      Posts: 'twitter_number_posts',
      Likes: 'twitter_number_likes',
      Retweets: 'twitter_retweets',
    },
    Facebook: {
      Followers: 'fb_followers',
      Likes: 'fb_number_likes',
      Comments: 'fb_number_comments',
      Posts: 'fb_number_posts',
    },
    Instagram: {
      Followers: 'insta_followers',
      Comments: 'insta_number_comments',
      Posts: 'insta_number_posts',
      Likes: 'insta_number_likes',
    },
  });
  const [colors] = useState(['red', 'blue', 'yellow', 'purple', 'green', 'gray', 'orange', 'pink']);
  const [presidentInChart, setPresidentInChart] = useState(['Donald Trump']);
  const handleSelectChange = e => {
    const newPresidents = [...presidentInChart, e.target.value];
    setPresidentInChart(newPresidents);
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
      <SelectTag content={presidents} parentState={handleSelectChange} value={presidents[0]} />
      <div className="socialMedia">
        <SelectTag content={Object.keys(socialMedia)} value={Object.keys(socialMedia)[0]} parentState={handleSelectChange} />
      </div>
      <Line data={data} />
    </>
  );
}
