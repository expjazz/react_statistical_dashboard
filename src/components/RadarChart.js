import React from 'react';
import { Pie } from 'react-chartjs-2';
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
    labels: ['Facebook', 'Twitter', 'Instagram'],
    datasets: [
      {
        data: [dataContent.fb, dataContent.twitter, dataContent.inst],
        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
      },
    ],
  };
  return (
    <Pie data={data} />
  );
}
