import React from "react";
import {sideBar1, sideBar2} from '../data/navigationsItems';
import { NavLink } from 'react-router-dom';
import {img} from '../data/img';


const Sidebar = () =>{
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
}

export default Sidebar;