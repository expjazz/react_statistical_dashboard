import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import PresidentLineBar from '../components/PresidetLineBar';
import PresidentInfo from '../components/PresidentInfo';
import SelectTag from '../components/SelectTag';
import PresidentLinePerGrow from '../components/PresidentLinePerGrow';
import RadarChart from '../components/RadarChart';

const StyledPresidentPage = styled.div.attrs({
  className: 'w-full bg-gray-300 pt-4',
})`
  & {
    .container {
      ${tw`bg-white mx-auto flex flex-col border-gray-500 border-l-2 border-r-2 shadow-2xl`}
    }

    img {
      ${tw`w-56`}
    }
  }
`;

export default function PresidentPage() {
  const socialMedia = ['instagram', 'facebook', 'twitter'];
  const selectValue = useSelector(state => state.filter.socialMedia);

  return (
    <StyledPresidentPage>
      <div className="container">
        <PresidentInfo />

        <SelectTag name="socialMedia" id="socialMedia" value={selectValue} content={socialMedia} action="SET_SOCIAL_MEDIA_FILTER" />
        <PresidentLineBar />
        <PresidentLinePerGrow />
        <RadarChart />

      </div>
    </StyledPresidentPage>
  );
}
