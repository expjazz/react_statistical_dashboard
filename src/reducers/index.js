import { combineReducers } from 'redux';
import socialData from './socialData';
import filter from './filter';
import getInfoPresident from './infoPresident';
import indexDataReducer from './indexDataReducer';
import lineGraphAll from './lineGraphAllStateReducer';
import pieChartAll from './pieChartAllReducer';

export default combineReducers({
  socialData,
  filter,
  getInfoPresident,
  indexDataReducer,
  lineGraphAll,
  pieChartAll,
});
