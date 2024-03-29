import React from 'react';
import logo from '../images/about.png';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
  
    <div className='container py-5 my-5'>
    <div className='row'>
      <div className='col-md-6'>
        <h1 className='text-dark fw-bold'>About us</h1>
        <p className='lead'>
          The iPhone is a smartphone made by Apple that combines a computer, iPod,
          digital camera and cellular phone into one device with a touchscreen interface.
          The iPhone runs the iOS operating system, and in 2021
          when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.
        </p>
        <Link to="/contact" className='btn btn-outline-primary'>Contact Us</Link>
      </div>

      <div className='col-md-6'>
        <img src={logo} alt="src" style={{ height: '500px', width: '700px' }} />
      </div>
    </div>
  </div>

  )
}
