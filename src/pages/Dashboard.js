import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import DashboardCharts from '../components/DashboardCharts';

const StyledDashboard = styled.div.attrs({
  className: 'w-full bg-gray-300 pt-4',
})`
  & {
    .container {
      ${tw`bg-white mx-auto flex flex-col border-gray-500 border-l-2 border-r-2 shadow-2xl border-t-2`}
    }
  }
`;

export default function Dashboard() {
  return (
    <StyledDashboard>
      <div className="container">
        <h1>Main Dashboard</h1>

        <DashboardCharts />
      </div>

    </StyledDashboard>
  );
}
