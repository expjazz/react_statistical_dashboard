import React from 'react';
import Line from 'chart.js';
import { useSelector } from 'react-redux';
import allSelects from '../selectors/allSelects';

export default function LineGraphAll() {
  const { selectListsByPresidents } = allSelects;
  const rowsByPresident = useSelector(selectListsByPresidents);
  console.log(rowsByPresident);
  return (
    <div>
      line
      {/* <Line /> */}
    </div>
  );
}
