import React from 'react';
import { Link } from 'react-router-dom';
import LineGraphAll from './LineGraphAll';
import PieChartAll from './PieChartAll';

export default function DashboardCharts() {
  return (
    <div>

      <LineGraphAll />
      <PieChartAll />
    </div>
  );
}
