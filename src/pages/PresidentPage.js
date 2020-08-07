import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import PresidentLineBar from '../components/PresidetLineBar';
import PresidentInfo from '../components/PresidentInfo';
import allSelectors from '../selectors/allSelects';
import SelectTag from '../components/SelectTag';

const StyledPresidentPage = styled.div.attrs({
  className: 'w-full bg-blue-300',
})` 
  &{
    .container {
      ${tw`bg-white mx-auto shadow-lg opacity-75`}
    }
    img {
      ${tw`w-56`}
    }
  }
`;

export default function PresidentPage() {
  const dispatch = useDispatch();
  const socialMedia = ['instagram', 'facebook', 'twitter'];
  const selectValue = useSelector(state => state.filter.socialMedia);

  return (
    <StyledPresidentPage>
      <div className="container">
        <PresidentInfo />

        <SelectTag name="socialMedia" id="socialMedia" value={selectValue} content={socialMedia} action="SET_SOCIAL_MEDIA_FILTER" />
        <PresidentLineBar />
      </div>
    </StyledPresidentPage>
  );
}
