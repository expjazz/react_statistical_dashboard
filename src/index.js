import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import App from './App';
import store from './store';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
