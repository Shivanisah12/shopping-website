import React from 'react'
import './F7.css'
import { GrAdd} from 'react-icons/gr';
const F7 = () => {
  return (
    <> 
      <div className='main-7'>
        <div className='page-7'>
          <h1>24/7 Support Team</h1>
          <div className='p'>
          <p>We’re here to help! Shopify has an extensive team of people here <br />
           to help you succeed. Shopify’s support team is available 24/7 to <br />
            help answer your questions.</p>

          <p className='p-2'>You can also hire a Shopify Expert to help build your website. Or <br />
           look through our educational resources including, online <br />
            courses, webinars, and blog posts to help you promote your <br />
             products and build your online presence.</p>
          </div>
        </div>
        <div className='image'>
          <img src="png/me.png.jpg" alt="404" />
            {/* <img src="png/p.png" alt="404" /> */}
            <img src="png/p1.png" alt="404" />
            <img src="png/p4.png" alt="404" />
            <img src="png/p3.png" alt="404" />
          </div>

          <div className='n-page'>
             <h1>Frequently asked questions</h1>
             <div className='line'>
                <div className='l1'>
                <h5>What is a website builder?<GrAdd className='i1'/></h5>
                <hr className='hr' />
                </div>
                <div className='l2'>
                <h5>Which website builder is best to use?<GrAdd className='i2'/></h5>
                <hr  className='hr' />
                </div>
                <div className='l3'>
                <h5>How do you know which website builder was used for a website?<GrAdd className='i3'/></h5>
                <hr className='hr' />
                </div>
                <div className='l4'>
                <h5>Which website builder is best for small businesses? <GrAdd className='i4'/></h5>
                <hr className='hr' />
                </div>
                <div className='l5'>
                <h5>How do you build a website without a website builder?<GrAdd className='i5'/></h5>
                <hr  className='hr'/>
                </div>
                <div className='l6'>
                <h5>What is the best website builder for ecommerce?<GrAdd className='i6'/></h5>
                <hr  className='hr'/>
                </div>
                <div className='l7'>
                <h5>How much does a website builder cost?<GrAdd className='i7'/></h5>
                <hr className='hr' />
                </div>
                <div className='l8'>
                <h5>What is the easiest website builder?<GrAdd className='i8'/></h5>
                <hr className='hr' />
                </div>
                <div className='l9'>
                <h5>Which website builder offers hosting?<GrAdd className='i9'/></h5>
                <hr  className='hr'/>
                </div>
             </div>
          </div>
      </div>
    </>
  )
}

export default F7
