import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/s1.png';

export const Prroducts = () => {
  return (
      <div className='container d-flex'>
    <div className='a-box'>
    <div className='a-b-img'>
        <img src={logo} alt='image'/>
    </div>

    <div className='a-b-text'>
        <h2>{}</h2>
        <Link className='productbox-button' to="/contact">Order Now</Link>
    </div>

    </div>

    <div className='a-box'>
    <div className='a-b-img'>
        <img src={logo} alt='image'/>
    </div>

    <div className='a-b-text'>
        <h2>{}</h2>
        <Link className='productbox-button' to="/contact">Order Now</Link>
    </div>

    </div>


    <div className='a-box'>
    <div className='a-b-img'>
        <img src={logo} alt='image'/>
    </div>

    <div className='a-b-text'>
        <h2>{}</h2>
        <Link className='productbox-button' to="/contact">Order Now</Link>
    </div>

    </div>
    </div>
  )
}
