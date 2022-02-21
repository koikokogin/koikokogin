import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import loadStocks from './redux/actions/action.creators';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadStocks());
  }, []);

  return (
    <Router>
      <div className="flier"><img src="https://www.pngarts.com/files/3/Rock-PNG-Transparent-Image.png" alt="rock" width="200" /></div>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
