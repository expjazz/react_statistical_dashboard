import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import allSelectors from '../selectors/allSelects';

export default function PresidentLinePerGrow() {
  const { clearData } = allSelectors;

  const dataContent = useSelector(clearData);
  console.log(dataContent);
  // console.log([dataContent[0].fb, dataContent[0].twitter, dataContent[0].inst]);
  // console.log([dataContent[1].fb, dataContent[1].twitter, dataContent[1].inst]);
  if (dataContent.length === 0) {
    return (
      <p>loading</p>
    );
  }
  const data = {
    labels: ['Africa', 'Asia', 'Europe'],
    datasets: [
      {
        label: '1950',
        fill: true,
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        data: [dataContent[0].fb, dataContent[0].twitter, dataContent[0].inst],
      }, {
        label: '2050',
        fill: true,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        data: [dataContent[1].fb, dataContent[1].twitter, dataContent[1].inst],
      },
    ],
  };
  return (
    <Radar data={data} />
  );
}
