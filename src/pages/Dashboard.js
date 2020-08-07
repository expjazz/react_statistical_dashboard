import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import DashboardCharts from '../components/DashboardCharts';

const StyledDashboard = styled.div.attrs({
  className: 'w-100 bg-blue-300',
})`
  & {
    .container {
      ${tw`bg-white opacity-75`}
    }
  }
`;

export default function Dashboard() {
  return (
    <StyledDashboard>
      <h1>This is the dashboard</h1>

      <DashboardCharts />
    </StyledDashboard>
  );
}
