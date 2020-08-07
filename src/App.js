import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowData from './components/ShowData';
import './index.css';

function App() {
  return (

    <div className="App">
      <Switch>
        <Route path="/">
          <ShowData />

        </Route>
      </Switch>
    </div>

  );
}

export default App;
