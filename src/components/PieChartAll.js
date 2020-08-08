import React from 'react';
import { useSelector } from 'react-redux';
import pieSelector from '../selectors/filterPieChart';

export default function PieChartAll() {
  const { selectPieChartData } = pieSelector;
  const data = useSelector(selectPieChartData);
  console.log(data);

  // grab tthe data
  // pass to chart
  // do event listeners to change the data
  return (
    <div>
      Hello from Pie
    </div>
  );
}
