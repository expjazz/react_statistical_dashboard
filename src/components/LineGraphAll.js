import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import allSelects from '../selectors/allSelects';

export default function LineGraphAll() {
  const { selectListsByPresidents } = allSelects;
  const rowsByPresident = useSelector(selectListsByPresidents);
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

  console.log(data);
  return (
    <Line data={data} />
  );
}
