import React from 'react'
import './Navbar.css'
import { AiOutlineDown } from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className='nav'>
          <h1 className='h1'>MegaMi</h1>
          <div className='nav_list'>
            <ul>
              <li>Solutions <span><AiOutlineDown /></span> </li>
              <li>Pricing</li>
              <li>Resources <span><AiOutlineDown /></span></li>
            </ul>

          </div>
          <div className='btn'>
            <button className='btn1'>Log in</button>
            <button className='btn2 '>Start free trial</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
