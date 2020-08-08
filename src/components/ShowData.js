import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import allSelects from '../selectors/allSelects';
import PresidentCard from './PresidentCard';

const { selectSocialMedia } = allSelects;
const PresidentIndex = styled.div.attrs({
  className: 'w-full bg-gray-300 opacity-50 pt-4',
})`
 &{
   .container {
     ${tw`bg-white`}
   }
 }

`;

function ShowData(props) {
  const dispatch = useDispatch();

  const numberMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const socialMedia = ['instagram', 'facebook', 'twitter'];

  const byMonth = useSelector(selectSocialMedia);

  return (
    <PresidentIndex>
      <div className="container">

        <select name="months" id="months" onChange={e => dispatch({ type: 'SET_MONTH_FILTER', payload: parseInt(e.target.value) })}>
          {numberMonths.map(num => <option key={num} value={`${num}`}>{num}</option>)}

        </select>

        { byMonth.map((president, ind) => (
          <Link to={`/${president[0]}`} key={ind} onClick={e => dispatch({ type: 'SET_PRESIDENT_FILTER', payload: president[0] })}>
            <PresidentCard fbFollowers={president[1] || 'null'} fbLikes={president[2] || 'null'} president={president[0]} key={ind} />
          </Link>
        )) }
      </div>

    </PresidentIndex>
  );
}

export default ShowData;
