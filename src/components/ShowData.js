import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { fetchData } from '../actionCreators/fetchData';
import selector from '../selectors';

const Test = styled.div.attrs({
  className: 'w-full bg-purple-300 h-screen flex flex-col items-center justify-center',
})`
  & {
    h1 {
      ${tw`font-sans text-6xl bg-red-500 font-hairline text-6xl text-teal-500`}
    }
    p {
      ${tw`text-gray-700 text-lg`}
    }
    h2 {
      ${tw`text-2xl font-hairline mt-5 text-teal-500`}
    }
    ul {
      ${tw`inline-flex`}
    }
    li {
      ${tw`mr-5`}
    }
    a {
      ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
    }
  }
`;
function ShowData(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.fetchData();
  }, []);
  // const filtered = useSelector(state => { console.log(state); selector(state); });
  // console.log(filtered);
  return (
    <Test>
      haha
      <h1>tailwind</h1>
      {props.socialData.info[0].profile ? props.socialData.info[0].profile : 'not yet'}
    </Test>
  );
}

const mapStateToProps = state => ({
  socialData: state.socialData,
  filtered: selector(state),
});

export default (connect(mapStateToProps, { fetchData }))(ShowData);
