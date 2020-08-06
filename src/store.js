import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];
// const store = createStore(reducer,
//   // eslint-disable-next-line no-underscore-dangle
//   typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.REDUX_DEVTOOLS_EXTENSION() : f => f);
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
