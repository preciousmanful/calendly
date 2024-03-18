// Home.js
import React from 'react';
import '../css/home.css';
import {img} from '../data/img';
import {sideBar1, sideBar2} from '../data/navigationsItems';
import {recipes, carousel} from '../data/recipesInfo';
// import Sidebar from '../components/Sidebar';
import { NavLink } from 'react-router-dom';


const Home = () => {

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
   </div>
       :  ""}
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
            { eachContent.tag && <div className='tag'><img src={img.leaf} alt='heart'/></div>}
        </div>
      )

    })}
    </div>
    </div>
    </div>
  );
};

export default Home;
