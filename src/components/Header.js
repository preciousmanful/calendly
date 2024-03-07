// components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css'; // Import the corresponding CSS file


const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className='logo'>Cookz</NavLink>
        <input type='text' placeholder='search'/>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart" disabled>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
