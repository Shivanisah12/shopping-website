import React from 'react'
import './Frpage.css'
import {AiOutlineArrowRight } from 'react-icons/ai';

const Frpage = () => {
  return (
    <>
      <div className='main-4'>
        <div className='page-4'>
          <h1>A home for every business</h1>
          <h6>For small business owners to large enterprises</h6>
          <p>Using our no code website builder helps businesses of all sizes. Budget-conscious entrepreneurs can access free SEO tools, stock photos, themes, <span> QR code generator, image resizer</span> and other assets. Large enterprises can customize their website with their own unique content in various ways to make their website stand out.</p>
          <h6>Own your custom domain</h6>
          <p>Not all website builders allow you to purchase your custom domain name through them. On Shopify, you can use our free tools like the <span> Business Name Generator or Domain Name Generator</span> to help you find your own custom domain to help own your store's web address. Managing your domain and business in the same place helps simplify your business.</p>
          <button>Get your domain <AiOutlineArrowRight/></button>
          <img src="png/img5.jpeg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Frpage
