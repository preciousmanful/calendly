// eslint-disable-next-line

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import RouterComponent from './components/Router';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <RouterComponent />
        <div className='content'>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
