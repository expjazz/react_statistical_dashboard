import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import allSelects from '../selectors/allSelects';
import PresidentCard from './PresidentCard';
import TopTableShowData from './TopTableShowData';

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
    table {
      ${tw`w-100`}
    }
   }
 }

`;

function ShowData(props) {
  const dispatch = useDispatch();
  const numberMonths = useSelector(state => state.commonData.months);
  const unSortedMonth = useSelector(selectSocialMedia);
  const [byMonth, setByMonth] = useState(unSortedMonth);
  const sortBy = value => {
    let valNum;
    switch (value) {
      case 'Followers':
        valNum = 1;
        break;
      case 'Likes':
        valNum = 2;
        break;

      case 'Comments':
        valNum = 3;
        break;

      case 'Posts':
        valNum = 4;
        break;

      default:
        valNum = 1;
    }
    const sorted = byMonth.sort((a, b) => (b[valNum] - a[valNum]));
    setByMonth(sorted);
  };
  if (unSortedMonth.length > 0) {
    if (byMonth.length === 0)setByMonth(unSortedMonth);
  }

  return (
    <PresidentIndex>
      <div className="container">

        <select onChange={e => dispatch({ type: 'SET_MONTH_FILTER', payload: parseInt(e.target.value) })}>
          {numberMonths.map((month, num) => <option key={num} value={`${num + 1} `}>{month}</option>)}

        </select>
        <table>
          <thead>

            <TopTableShowData sortBy={sortBy} />
          </thead>
          <tbody>

            { byMonth.map((president, ind) => (

              <PresidentCard followers={president[1] || 'null'} likes={president[2] || 'null'} comments={president[3] || 'null'} posts={president[4] || 'null'} president={president[0]} key={ind} />
            )) }
          </tbody>
        </table>

      </div>

    </PresidentIndex>
  );
}

export default ShowData;
