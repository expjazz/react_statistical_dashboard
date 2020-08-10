import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import pieSelector from '../selectors/filterPieChart';
import SelectTag from './SelectTag';
import allSelects from '../selectors/allSelects';

export default function PieChartAll() {
  // grab tthe data
  const { selectListOnlyPresidents } = allSelects;
  const dispatch = useDispatch();
  const presidents = useSelector(selectListOnlyPresidents);
  const president = useSelector(state => state.pieChartAll.currentQueryPresidents[-1]);
  const queryPresidents = useSelector(state => state.pieChartAll.currentQueryPresidents);
  const { selectPieChartData } = pieSelector;
  const cleanData = useSelector(selectPieChartData);
  // do event listeners to change the data
  const handleQuery = e => {
    queryPresidents.push(e.target.value);
    dispatch({
      type: 'SET_CURRENT_QUERY_PRESIDENTS_PIE',
      payload: queryPresidents,
    });
  };
  // pass to chart
  const data = {
    labels: ['Facebook', 'Twitter', 'Instagram'],
    datasets: [
      {
        data: [cleanData.fb, cleanData.twitter, cleanData.inst],
        backgroundColor: ['#3e95cd', '#8e5ea2', 'yellow'],

      },
    ],
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: `Percentage of followers by each social medya by presidents: ${queryPresidents.join(' ')}`,
      fontSize: 18,
    },
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        },
      }],
    },

  };
  return (
    <div>
      <SelectTag value={president} content={presidents} parentState={handleQuery} />
      <Pie data={data} options={options} />
    </div>
  );
}
