import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import PresidentPage from './pages/PresidentPage';
import Dashboard from './pages/Dashboard';
import { fetchData } from './actionCreators/fetchData';
import Navbar from './components/Navbar';
import IntroPage from './pages/IntroPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <IntroPage />
        </Route>
        <Route exact path="/index">

          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/:president">
          <PresidentPage />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
