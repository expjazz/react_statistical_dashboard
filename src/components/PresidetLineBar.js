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
      four: [],
    };
    console.log(presidentData);
    presidentData.forEach(row => {
      obj.one.push(row[1]);
      obj.two.push(row[2]);
      obj.three.push(row[3]);
      obj.four.push(row[4]);
    });
    return obj;
  };

  const {
    one, two, three, four,
  } = dataGen();
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Followers',
        borderColor: 'green',
        data: one,
      },
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
      {
        label: 'Posts',
        borderColor: 'purple',

        data: four,
      },
    ],
  };
  return (
    <Line data={data} height="75" />
  );
}
