import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPresidentData } from '../actionCreators/fetchPresidentData';

const StyledPresidentInfo = styled.div.attrs({
  className: 'w-100',
})`
`;
export default function PresidentInfo() {
  const { president } = useParams();

  const dispatch = useDispatch();
  const presidentData = useSelector(state => state.getInfoPresident);
  useEffect(() => {
    console.log('here?');
    dispatch(fetchPresidentData());
  }, [dispatch]);
  return (
    <StyledPresidentInfo>
      <p>
        {president}
      </p>
      <img src={`${presidentData.president.image}`} alt="" />
      <p>{presidentData.president.text}</p>
    </StyledPresidentInfo>
  );
}
