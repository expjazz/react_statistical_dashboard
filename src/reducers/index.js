import { combineReducers } from 'redux';
import socialData from './socialData';
import filter from './filter';
import getInfoPresident from './infoPresident';
import indexDataReducer from './indexDataReducer';
import lineGraphAll from './lineGraphAllStateReducer';
import pieChartAll from './pieChartAllReducer';
import commonData from './commonDataReducer';
import apiError from './apiErrorReducer';

export default combineReducers({
  socialData,
  filter,
  getInfoPresident,
  indexDataReducer,
  lineGraphAll,
  pieChartAll,
  commonData,
  apiError,

});
