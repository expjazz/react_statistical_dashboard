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
     ${tw`bg-white mx-auto flex flex-col`}
    select {
      ${tw`self-end bg-white`}
      color: #423e3e;

    }
   }
 }

`;

function ShowData(props) {
  const dispatch = useDispatch();
  const numberMonths = useSelector(state => state.commonData.months);
  const byMonth = useSelector(selectSocialMedia);

  return (
    <PresidentIndex>
      <div className="container">

        <select onChange={e => dispatch({ type: 'SET_MONTH_FILTER', payload: parseInt(e.target.value) })}>
          {numberMonths.map((month, num) => <option key={num} value={`${num + 1} `}>{month}</option>)}

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
