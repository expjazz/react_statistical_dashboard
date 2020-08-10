import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import allSelects from '../selectors/allSelects';
import PresidentCard from './PresidentCard';
import TopTableShowData from './TopTableShowData';
import { setMonthFilter } from '../actionCreators/filters';

const { selectSocialMedia } = allSelects;
const PresidentIndex = styled.div.attrs({
  className: 'w-full bg-gray-300 pt-4',
})`
 &{
   .container {
     ${tw`bg-white mx-auto flex flex-col border-gray-500 border-l-2 border-r-2 shadow-2xl border-t-2`}
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

function ShowData() {
  const dispatch = useDispatch();
  const currentSort = useSelector(state => state.filter.currentSort);
  const numberMonths = useSelector(state => state.commonData.months);
  const byMonth = useSelector(selectSocialMedia);
  const month = useSelector(state => state.filter.month);
  const sortBy = value => {
    switch (value.toLowerCase()) {
      case 'followers':
        dispatch(setMonthFilter({ month, currentSort: 1 }));

        break;
      case 'likes':
        dispatch(setMonthFilter({ month, currentSort: 2 }));

        break;

      case 'comments':
        dispatch(setMonthFilter({ month, currentSort: 3 }));

        break;

      case 'posts':
        dispatch(setMonthFilter({ month, currentSort: 4 }));

        break;

      default:
        return '';
    }

    return '';
  };

  return (
    <PresidentIndex>
      <div className="container">

        <select onChange={e => dispatch({ type: 'SET_MONTH_FILTER', payload: { month: parseInt(e.target.value), currentSort } })}>
          {numberMonths.map((month, num) => <option key={num} value={`${num + 1} `}>{month}</option>)}

        </select>
        <table>
          <thead>

            <TopTableShowData sortBy={sortBy} />
          </thead>
          <tbody>

            { byMonth.map((president, ind) => (

              <PresidentCard followers={president[1] || '-'} likes={president[2] || '-'} comments={president[3] || '-'} posts={president[4] || '-'} president={president[0]} back={ind} key={ind} />
            )) }
          </tbody>
        </table>

      </div>

    </PresidentIndex>
  );
}

export default ShowData;
