import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import PresidentPage from './pages/PresidentPage';

function App() {
  return (

    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:president">
          <PresidentPage />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
