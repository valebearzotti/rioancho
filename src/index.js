import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Atocha from './pages/Atocha'
import Abasto from './pages/Abasto'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/atocha" element={ <Atocha /> } /> 
        <Route exact path="/abasto" element={ <Abasto /> } /> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
