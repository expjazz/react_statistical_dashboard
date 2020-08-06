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
   height: 100vh;
 }

`;
// const Test = styled.div.attrs({
//   className: 'w-full bg-purple-300 h-screen flex flex-col items-center justify-center',
// })`
//   & {
//     h1 {
//       ${tw`font-sans text-6xl bg-red-500 font-hairline text-6xl text-teal-500`}
//     }
//     p {
//       ${tw`text-gray-700 text-lg`}
//     }
//     h2 {
//       ${tw`text-2xl font-hairline mt-5 text-teal-500`}
//     }
//     ul {
//       ${tw`inline-flex`}
//     }
//     li {
//       ${tw`mr-5`}
//     }
//     a {
//       ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
//     }
//   }
// `;
function ShowData(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <PresidentIndex>
      haha
      <h1>tailwind</h1>
      {props.socialData.info[0].profile ? props.socialData.info[0].profile : 'not yet'}
      <PresidentCard />
    </PresidentIndex>
  );
}

const mapStateToProps = state => ({
  socialData: state.socialData,
  filtered: { byPresident: selectPresident(state), byMonth: selectMonth(state) },
});

export default (connect(mapStateToProps, { fetchData }))(ShowData);
