import { combineReducers } from 'redux';
import socialData from './socialData';
import filter from './filter';
import getInfoPresident from './infoPresident';

export default combineReducers({
  socialData,
  filter,
  getInfoPresident,
});
