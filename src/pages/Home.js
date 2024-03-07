// Home.js
import React from 'react';
import salad from '../data/salad.png'
import '../css/home.css';
import categories from '../data/categories.png'
import cookies from '../data/cookies.jpg'

import { NavLink } from 'react-router-dom';

const Home = () => {

  const carousel = [
    {
      id:1,
      firstSection: "Super Taco for",
      secondSection: "whole family",
      img: cookies
    },
    {
      id:2,
      firstSection: "Super Taco for",
      secondSection: "whole family",
      img: cookies
    },
    {
      id:3,
      firstSection: "Super Taco for",
      secondSection: "whole family",
      img: cookies
    }

  ]

  const homeContent =[
    {
      id:1,
      img:salad,
      content:"Spaghetti with tomato sauce"
    },
    {
      id:2,
      img:salad,
      content:"Spaghetti with tomato sauce"
    },
    {
      id:3,
      img:salad,
      content:"Spaghetti with tomato sauce"
    },
    {
      id:4,
      img:salad,
      content:"Spaghetti with tomato sauce"
    },
    {
      id:5,
      img:salad,
      content:"Spaghetti with tomato sauce"
    },
    {
      id:6,
      img:salad,
      content:"Spaghetti with tomato sauce"
    }
  ]
  const screenWidth = window.innerWidth >800;
  return (
    <div className='home'>
      {screenWidth ? 
      <div className='leftSideBar'>
      <nav>
        <ul>
          <li>
            <NavLink to="/"><img src={categories} className='icon' alt="icon"/><span>Home</span></NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart" disabled>Cart</NavLink>
          </li>
        </ul>
      </nav>
      </div>:
      ""}
      <div className='rightSideBar'>
        <div className='carouselContainer'>
        {carousel.map((item)=>{
            return(
          <div className='carousel'>
            <img src={item.img} alt='item'/>  
              <p>{item.firstSection} <br/> {item.secondSection}</p>
          </div>

        ) })}
        </div>
      <h1>Daily best recipes</h1>
      <div className='show-container'>
     {homeContent.map((eachContent)=>{ 

      return(

        <div className='show-item'>
            <div className='img-container'><img src={eachContent.img} alt='images'/></div>
            <div className='foodContent'>{eachContent.content}</div>
        </div>
      )

    })}
    </div>
    </div>
    </div>
  );
};

export default Home;
