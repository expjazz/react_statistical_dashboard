import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShowData from './components/ShowData';

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <p>test</p>
        <ShowData />
      </div>

    </Provider>
  );
}

export default App;
