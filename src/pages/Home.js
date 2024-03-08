// Home.js
import React from 'react';
import salad from '../data/salad.png'
import '../css/home.css';
import categoriesHover from '../data/Category2-Bold-32px.png';
import categories from '../data/Category2-Bold-32px (1).png'
import cookies from '../data/cookies.jpg';
import search from '../data/SearchNormal1-Bold-32px (1).png';
import searchHover from '../data/Category2-Bold-32px.png';
import star from '../data/Star-Bold-32px.png';
import starHover from '../data/Star-Bold-32px (1).png';
import heart from '../data/Heart-Bold-32px.png';
import heartHover from '../data/Heart-Bold-32px (1).png'

import { NavLink } from 'react-router-dom';

const Home = () => {

  const sideBar1= [
    {
      id:1,
      name:"Home",
      img:categories,
      alt:"Home icon",
      href:"/home",
      imgHover:categoriesHover
    },
    {
      id:2,
      name:"Browse",
      img:search,
      alt:"Home icon",
      href:"/browse", 
      imgHover:searchHover
    },
    {
      id:3,
      name:"For You",
      img:heart,
      alt:"Home icon",
      href:"/",
      imgHover:heartHover
    }
    
  ]
  const sideBar2 =[
    {
      id:1,
      name:"Chef",
      img:categories,
      alt:"Chef icon",
      href:"/foods",
      imgHover:categoriesHover
    },
    {
      id:2,
      name:"Favorites",
      img:star,
      alt:"heart icon",
      href:"/favourites",
      imgHover:starHover
    },
    {
      id:3,
      name:"My Recipes",
      img:heart,
      alt:"recipes icon",
      href:"/recipes",
      imgHover:categoriesHover

    }
  ]

  
  const carousel = [
    {
      id:1,
      firstSection: "Super Taco for",
      secondSection: "whole family",
      img: cookies,
      alt:"carousel1"
    },
    {
      id:2,
      firstSection: "Super Taco for",
      secondSection: "whole family",
      img: cookies,
      alt:"carousel3"
    },
    {
      id:3,
      firstSection: "Super Taco for",
      secondSection: "whole family",
      img: cookies,
      alt:"carousel3"
    },
    {
      id:4,
      firstSection: "Super Taco for",
      secondSection: "whole family",
      img: cookies,
      alt:"carousel3"
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
          <li className='subTopic'>DISCOVER</li>
          {sideBar1.map((eachBar)=>{ 
            return(
          <li>
            <NavLink to={eachBar.href}><img src={eachBar.img} className='icon' alt={eachBar.alt}/><span>{eachBar.name}</span></NavLink>
          </li> 
          
          )
        })} 
        <li className='subTopic'>LIBRARY</li>
        {sideBar2.map((eachBar)=>{ 
            return(
          <li>
            <NavLink to={eachBar.href}><img src={eachBar.img} className='icon' alt={eachBar.alt}/><span>{eachBar.name}</span></NavLink>
          </li> 
          
          )
        })}
        </ul>
      </nav>
      </div>:
      ""}
      <div className='rightSideBar'>
        <div className='carouselContainer'>
        {carousel.map((item)=>{
            return(
          <div className='carousel'>
            <img src={item.img} alt={item.alt}/>  
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
