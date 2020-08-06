import { combineReducers } from 'redux';
import socialData from './socialData';
import filter from './filter';

export default combineReducers({
  socialData,
  filter,
});
