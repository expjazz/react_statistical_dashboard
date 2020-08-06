import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { fetchData } from '../actionCreators/fetchData';
import allSelects from '../selectors/allSelects';
import PresidentCard from './PresidentCard';

const { selectPresident, selectMonth } = allSelects;
const PresidentIndex = styled.div.attrs({
  className: 'w-full bg-gray-900',
})`
 &{
   /* height: 100vh; */
 }

`;

function ShowData(props) {
  const byPresident = useSelector(selectPresident);
  const byMonth = useSelector(selectMonth);

  const dispatch = useDispatch();
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <PresidentIndex>
      haha
      <h1>tailwind</h1>
      { byMonth.map((president, ind) => <PresidentCard fbFollowers={president.fb_followers} fbLikes={president.fb_number_likes} president={president.profile} key={ind} />) }
      <button onClick={() => dispatch({ type: 'SET_MONTH_FILTER', payload: 2 })}>Click</button>
    </PresidentIndex>
  );
}

const mapStateToProps = state => ({
  socialData: state.socialData,
});

export default (connect(mapStateToProps, { fetchData }))(ShowData);
