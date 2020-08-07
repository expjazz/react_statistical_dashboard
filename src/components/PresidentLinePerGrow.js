import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import allSelectors from '../selectors/allSelects';

export default function PresidentLinePerGrow() {
  const { selectPresident } = allSelectors;
  const presidentData = useSelector(selectPresident);
  const dataGen = () => {
    const obj = {
      one: [],
      two: [],
      three: [],
    };
    presidentData.forEach(row => {
      console.log(row);
      obj.one.push({ x: row[2], y: row[1] });
      obj.two.push(row[2]);
      obj.three.push(row[3]);
    });
    return obj;
  };

  const { one, two, three } = dataGen();
  console.log(one);
  const data = {
    datasets: [
      {
        label: 'Grow per Likes',
        borderColor: 'red',
        data: one,
      },
    ],
  };
  return (
    <Line data={data} />
  );
}
