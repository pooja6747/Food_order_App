import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

export const Navbar = () => {
    // const[nav,setNav]=useState(false);

    // const changeBackground=()=>{
    //     if(window.scrollY >= 50){
    //         setNav(true);
    //     }else{
    //         setNav(false);
    //     }
    // }

    // window.addEventListener('scroll',changeBackground);
  return (
    <div>
    {/* {nav ? "nav active":"nav"} */}
        <nav className="nav">
        <Link to="main" className="logo">
          <img src={logo} alt='image'/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon'>
            <span className='nav-icon'></span>
        </label>

        <ul className='menu'>
            <li><Link to="/">Header</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
        </ul>
  
        </nav>
    </div>
  )
}
