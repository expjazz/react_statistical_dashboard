import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { fetchData } from '../actionCreators/fetchData';
import allSelects from '../selectors/allSelects';
import PresidentCard from './PresidentCard';

const { selectPresident, selectMonth, selectSocialMedia } = allSelects;
const PresidentIndex = styled.div.attrs({
  className: 'w-full bg-gray-900',
})`
 &{
   /* height: 100vh; */
 }

`;

function ShowData(props) {
  // const byPresident = useSelector(selectPresident);
  const dispatch = useDispatch();

  const numberMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const social = useSelector(selectSocialMedia);
  const byMonth = useSelector(selectMonth);

  const changeMonth = e => {
    dispatch({ type: 'SET_MONTH_FILTER', payload: parseInt(e.target.value) });
  };
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <PresidentIndex>
      haha
      <h1>tailwind</h1>
      <select name="months" id="months" onChange={e => changeMonth(e)}>
        {numberMonths.map(num => <option key={num} value={`${num}`}>{num}</option>)}

      </select>

      { byMonth.map((president, ind) => <PresidentCard fbFollowers={president.fb_followers} fbLikes={president.fb_number_likes} president={president.profile} key={ind} />) }
    </PresidentIndex>
  );
}

const mapStateToProps = state => ({
  socialData: state.socialData,
  filter: state.filter,
});

export default (connect(mapStateToProps, { fetchData }))(ShowData);
