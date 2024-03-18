import {img} from './img';

export const sideBar1= [
    {
      id:1,
      name:"Home",
      img:img.categories,
      alt:"Home icon",
      href:"/home",
      imgHover:img.categoriesHover
    },
    {
      id:2,
      name:"Browse",
      img:img.search,
      alt:"Home icon",
      href:"/browse", 
      imgHover:img.searchHover
    },
    {
      id:3,
      name:"For You",
      img:img.heart,
      alt:"Home icon",
      href:"/",
      imgHover:img.heartHover
    }
    
  ]

export  const sideBar2 =[
    {
      id:1,
      name:"Chef",
      img:img.categories,
      alt:"Chef icon",
      href:"/foods",
      imgHover:img.categoriesHover
    },
    {
      id:2,
      name:"Favorites",
      img:img.star,
      alt:"heart icon",
      href:"/favourites",
      imgHover:img.starHover
    },
    {
      id:3,
      name:"My Recipes",
      img:img.heart,
      alt:"recipes icon",
      href:"/recipes",
      imgHover:img.categoriesHover

    }
  ]
