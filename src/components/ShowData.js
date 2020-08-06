import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actionCreators/fetchData';
import selector from '../selectors';

function ShowData(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.fetchData();
  }, []);
  // const filtered = useSelector(state => { console.log(state); selector(state); });
  // console.log(filtered);
  return (
    <div className="">
      haha
      {props.socialData.info[0].profile ? props.socialData.info[0].profile : 'not yet'}
    </div>
  );
}

const mapStateToProps = state => ({
  socialData: state.socialData,
  filtered: selector(state),
});

export default (connect(mapStateToProps, { fetchData }))(ShowData);
