import React from 'react';
import './Fpage.css'

const Fpage = () => {
  return (
    <>
      <div className='main'>
       <div className='page'>
         <h1>
         Website Builder 2023 | Create a Website in Minutes
         </h1>
         <p>Easily create stunning, secure and full featured websites</p>
         <div className='email'>
         <input className='mail' type="text" placeholder='Enter your email address' />
         <button className='btn-m'>Get Started</button>
         </div>
         <div className='image1'>
        <img src="png/img1.png" alt="404" className='img1' />
        <img src="png/img2.jpeg" alt="404" className='img2' />
        <img src="png/img3.jpeg" alt="404" className='img3' />
        <img src="png/img4.jpeg" alt="404" className='img4' />
         </div>
       </div>
      </div>
    </>
  )
}

export default Fpage
