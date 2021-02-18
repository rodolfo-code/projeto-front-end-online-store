import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from './components/templates/Footer';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
