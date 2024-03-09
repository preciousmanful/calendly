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
import heartHover from '../data/Heart-Bold-32px (1).png';
import leaf from '../data/leaf.png';
import greanpeas from '../data/greenpeas-removebg-preview.png';
import saladDinners from '../data/salad_dinners-removebg-preview.png';
import spaghetti from '../data/spaghetti-removebg-preview.png';
import lentil from '../data/lentil-removebg-preview.png';
import pancake from '../data/pancake.png';
import chicken from '../data/CHICKEN-CURRY.png';
import kelowana from '../data/kelowana.png';
import bestChineseFood from '../data/bestchinesefood.webp';
import chineseFood from '../data/chineseFood.avif'
import sushie from '../data/sushi.jpg'



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
      firstSection: "Chicken Curry",
      secondSection: "in the making",
      img: bestChineseFood,
      alt:"carousel2"
    },
    {
      id:3,
      firstSection: "Summing is coming",
      secondSection: "Be ready",
      img: chineseFood,
      alt:"carousel3"
    },
    {
      id:4,
      firstSection: "Making sushi at",
      secondSection: "home",
      img: sushie,
      alt:"carousel4"
    }

  ]

  const recipes =[
    {
      id:1,
      img:spaghetti,
      content:"Spaghetti with tomato sauce",
      color:"lightblue",
      tag: true
    },
    {
      id:2,
      img:salad,
      content:"Salad with rice and kimchi",
      color:"rgb(211, 131,156)",
      tag: true
    },
    {
      id:3,
      img:pancake,
      content:"Pancake with raspberry sauce",
      color:"rgb(211, 231,156)",
      tag: true
    },
    {
      id:4,
      img:greanpeas,
      content:"Rice with shrimps and green peas",
      color:"rgb(211, 131,256)",
      tag: true
    },
    {
      id:5,
      img:chicken,
      content:"Curry with chicken and onion",
      color:"rgb(211, 231,256)",
      tag: true
    },
    {
      id:6,
      img:lentil,
      content:"Spicy lentil cream soup",
      color:"rgb(111, 231,256)",
      tag: false
    },
    {
      id:7,
      img:spaghetti,
      content:"Spaghetti with tomato sauce",
      color:"rgb(233,211,117)",
      tag: true
    },
    {
      id:8,
      img:salad,
      content:"Spicy lentil cream soup",
      color:"rgb(111, 211,111)",
      tag: false
    },
    {
      id:9,
      img:kelowana,
      content:"Chinese Kelowana with peas",
      color:"rgb(211, 131,156)",
      tag: false
    },
    {
      id:10,
      img:saladDinners,
      content:"Spaghetti with tomato sauce",
      color:"rgb(211, 231,156)",
      tag: true
    },
    {
      id:11,
      img:lentil,
      content:"Spaghetti with tomato sauce",
      color:"rgb(211, 131,256)",
      tag: false
    },
    {
      id:12,
      img:salad,
      content:"Spaghetti with tomato sauce",
      color:"rgb(211, 231,256)",
      tag: true
    },
    {
      id:13,
      img:lentil,
      content:"Spaghetti with tomato sauce",
      color:"rgb(111, 231,256)",
      tag: false
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
     {recipes.map((eachContent)=>{ 

      return(

        <div className='show-item'>
            <div className='img-container'><img src={eachContent.img} alt='images'/></div>
            <div className='foodContent' style={{backgroundColor:eachContent.color}}>{eachContent.content}</div>
            { eachContent.tag && <div className='tag'><img src={leaf} alt='heart'/></div>}
        </div>
      )

    })}
    </div>
    </div>
    </div>
  );
};

export default Home;
