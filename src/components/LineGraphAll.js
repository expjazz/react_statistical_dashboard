import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import allSelects from '../selectors/allSelects';
import SelectTag from './SelectTag';

export default function LineGraphAll() {
  const { selectListsByPresidents, selectListOnlyPresidents } = allSelects;
  const rowsByPresident = useSelector(selectListsByPresidents);
  const presidents = useSelector(selectListOnlyPresidents);
  const [presidentInChart, setPresidentInChart] = useState(['Donald Trump']);
  if (Object.keys(rowsByPresident).length === 0) {
    return <p>loading</p>;
  }

  const setData = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dataset = [];
    presidentInChart.forEach(president => {
      const cleanedData = rowsByPresident[president].map(row => row.fb_followers);
      dataset.push({
        data: cleanedData,
        borderColor: 'red',
        label: president,
      });
    });
    return { labels, datasets: dataset };
  };
  const data = setData();

  return (
    <>
      <SelectTag content={presidents} parentState value={presidents[0]} />
      <Line data={data} />
    </>
  );
}
