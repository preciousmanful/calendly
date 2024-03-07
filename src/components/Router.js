import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import { NavLink } from 'react-router-dom';

const Router = () => {
  return (
    <div className='App'>
      <nav>
      <h1 className='topic'>CALENDLY</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Router;
