import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
// import Header from './components/Header';
import MainContent from './components/MainContent';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainContent />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
