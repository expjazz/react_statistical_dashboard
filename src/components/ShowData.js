import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchData } from '../actionCreators/fetchData';

function ShowData(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className="" />
  );
}

const mapStateToProps = state => ({
  socialData: state.socialData,
  states: state,
});

export default (connect(mapStateToProps, { fetchData }))(ShowData);
