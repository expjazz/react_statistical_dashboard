import { createStore } from 'react-redux';

import reducer from './reducers';

const a = 's';
const store = createStore(reducer,
  // eslint-disable-next-line no-underscore-dangle
  typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.REDUX_DEVTOOLS_EXTENSION() : f => f);

export default store;
