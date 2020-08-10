import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { fetchData } from './actionCreators/fetchData';
import Navbar from './components/Navbar';
import RouteFile from './components/RouteFile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <RouteFile />
    </div>

  );
}

export default App;
