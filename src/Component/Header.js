import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

export const Header = () => {
  return (
      <>
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
    <div id="main">
    <div className='header-heading'>
        <h3>Its great time for eat Burger</h3>
        <h1><span>Burger</span>For <br/> Week</h1>

        <Link to="/product" className='btn btn-danger'>ORDER</Link>
    </div>
 
 
    </div>
    </>
  )
}
