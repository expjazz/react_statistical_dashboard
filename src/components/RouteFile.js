import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import PresidentPage from '../pages/PresidentPage';
import Dashboard from '../pages/Dashboard';
import IntroPage from '../pages/IntroPage';

export default function RouteFile() {
  return (
    <>
      <Switch>
        <Route exact path="/index">

          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/:president">
          <PresidentPage />
        </Route>
        <Route path="/">
          <IntroPage />
        </Route>
      </Switch>
    </>
  );
}
