import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

export default function PresidentLinePerGrow() {
  const rawData = useSelector(state => state.socialData.info);

  const dataGen = () => {

  };
  return (
    <Radar data={data} options={options} />
  );
}
