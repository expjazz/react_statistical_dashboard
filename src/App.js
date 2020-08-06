import React from 'react';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <p>test</p>
      </div>

    </Provider>
  );
}

export default App;
