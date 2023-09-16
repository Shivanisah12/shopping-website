import React from 'react'
import './Fs.css'
import { AiFillTag } from 'react-icons/ai';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';
import { MdSecurity } from 'react-icons/md';
import { FaMousePointer } from 'react-icons/fa';
import { MdDashboardCustomize } from 'react-icons/md';
import { TbTools } from 'react-icons/tb';

const Fs = () => {
    return (
        <>
            <div className='main-6'>
            <h1 className='h1'>A website builder with perks</h1>
                <div className='page-6'>

                    <div className='p-1'>
                       
                        <h1> <AiFillTag className='ic' /></h1>
                        <h5>Unlimited products</h5>
                        <p>Add as many products as you’d like to your <br />
                            online store. With no limits, you can stock and <br />
                            sell the variety of products that the modern <br /> customer demands.</p>
                    </div>

                    <div className='p-2'>
                        <h1> <RiGitRepositoryCommitsLine className='ic' /></h1>
                        <h5>Unlimited products</h5>
                        <p>Seamlessly integrate your online and offline <br />
                            store sales with a POS system. Sell your <br />
                            products no matter where your customer finds <br /> them.</p>
                    </div>

                    <div className='p-3'>

                        <h1> <MdSecurity className='ic'/></h1>
                        <h5>Unlimited products</h5>
                        <p>Shopify offers fraud analysis to a secure <br />
                            website for all domains. Shopify is also Level 1 <br />
                            PCI DSS compliant for all financial transactions.</p>
                    </div>
                </div>

                <div className='page-6b'>

                    <div className='p-4'>
                        
                        <h1> <FaMousePointer className='ic'/></h1>
                        <h5>Unlimited products</h5>
                        <p>Build your website using straightforward drag- <br />
                            and-drop WYSIWYG functionality. Anyone can <br />
                            make a website on Shopify without having to learn to <br />
                            code.</p>
                    </div>

                    <div className='p-5'>
                      
                        <h1> <MdDashboardCustomize  className='ic'/></h1>
                        <h5>Unlimited products</h5>
                        <p>Customize your website your way to match <br />
                            every element of your brand. Choose colors, <br />
                            fonts, photos, responsive designs, and more to <br />
                            make your site your own.</p>
                    </div>

                    <div className='p-6'>
                        
                        <h1> <TbTools className='ic'/></h1>
                        <h5>Unlimited products</h5>
                        <p>Shopify offers loads of free business and <br />
                            marketing tools, product sourcing apps, and <br />
                            many other added features to allow you to build <br /> a high performing website.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Fs
