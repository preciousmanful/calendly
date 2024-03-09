// components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css'; // Import the corresponding CSS file
import userImage from '../data/user.png';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className='logo'>Cookz</NavLink>
        <input type='text' placeholder='Search recipes by name, ingredient and ets...'/>
        <ul>
          
          <li>
          <NavLink to="/profile" className='profile'>
            <img src={userImage} className='userImage' alt='profilePic'/>
            <div>Precious Adwoa</div>
          </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
