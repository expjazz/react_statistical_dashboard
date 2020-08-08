import React from 'react';
import { Link } from 'react-router-dom';
import LineGraphAll from './LineGraphAll';
import PieChartAll from './PieChartAll';

export default function DashboardCharts() {
  return (
    <div>
      <Link to="/">
        Home
      </Link>
      <LineGraphAll />
      <PieChartAll />
    </div>
  );
}
