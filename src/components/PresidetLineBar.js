import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import allSelectors from '../selectors/allSelects';

export default function PresidetLineBar() {
  const { selectPresident } = allSelectors;
  const presidentData = useSelector(selectPresident);
  const dataGen = () => {
    const obj = {
      one: [],
      two: [],
      three: [],
    };
    presidentData.forEach(row => {
      obj.one.push(row[1]);
      obj.two.push(row[2]);
      obj.three.push(row[3]);
    });
    return obj;
  };

  const { one, two, three } = dataGen();
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Likes',
        borderColor: 'red',
        data: two,
      },
      {
        label: 'Comments',
        borderColor: 'yellow',

        data: three,
      },
    ],
  };
  return (
    <Line data={data} />
  );
}
