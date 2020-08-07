import { combineReducers } from 'redux';
import socialData from './socialData';
import filter from './filter';
import getInfoPresident from './infoPresident';
import indexDataReducer from './indexDataReducer';

export default combineReducers({
  socialData,
  filter,
  getInfoPresident,
  indexDataReducer,
});
