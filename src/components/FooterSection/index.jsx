import React, { useContext } from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import CartPanel from "../CartPanel";
import { MyContext } from '../../App';
import { IoMdClose } from "react-icons/io";


const Footer=()=>{
  
  const context= useContext(MyContext)
    return(
      <>
        <footer className='py-6 bg-gray-200'>
        
            <div className='container'>
                <div className='flex items-center justify-center gap-0 py-8 pb-8 '>
                    <div className='flex items-center justify-center flex-col group w-[15%]'>
                    <LiaShippingFastSolid className='text-[35px] transition-all duration-300 group-hover:text-red-500
                    group-hover:-translate-y-1'/>
                        <h2 className='text-[16px] font-[500] mt-3'>Free Shipping</h2>
                        <p className='text-[13px] font-[400]'>for all orders above $100</p>
                    </div>

                    <div className='flex items-center justify-center flex-col group w-[15%]'>
                    < PiKeyReturnLight className='text-[35px] transition-all duration-300 group-hover:text-red-500
                    group-hover:-translate-y-1'/>
                        <h2 className='text-[16px] font-[500] mt-3'>30 Days Returns</h2>
                        <p className='text-[13px] font-[400]'>For an Exchange Products </p>
                    </div>

                    <div className='flex items-center justify-center flex-col group w-[15%]'>
                    < BsWallet2 className='text-[35px] transition-all duration-300 group-hover:text-red-500
                    group-hover:-translate-y-1'/>
                        <h2 className='text-[16px] font-[500] mt-3'>Secured Payments</h2>
                        <p className='text-[13px] font-[400]'>Payment Cards Accepted</p>
                    </div>

                    <div className='flex items-center justify-center flex-col group w-[15%]'>
                    <LiaGiftSolid className='text-[35px] transition-all duration-300 group-hover:text-red-500
                    group-hover:-translate-y-1'/>
                        <h2 className='text-[16px] font-[500] mt-3'>Special Gifts</h2>
                        <p className='text-[13px] font-[400]'>Our First Product Order</p>
                    </div>

                    <div className='flex items-center justify-center flex-col group w-[15%] '>
                    <BiSupport className='text-[35px] transition-all duration-300 group-hover:text-red-500
                    group-hover:-translate-y-1'/>
                        <h2 className='text-[16px] font-[500] mt-3'>Support 24/7</h2>
                        <p className='text-[13px] font-[400]'>Contact Us AnyTime</p>
                    </div>
                </div>
            </div>

            <hr/>

            <div className='footer flex items-start py-8 ml-5'>
                <div className='part1 w-[25%]'>
                    <h2 className='text-[20px] font-[600] mb-4'>Contact Us </h2>
                    <p className='text-[14px] font-[400] mb-4'>Classyshop - Mega Super Store<br/>
                    507-Union Trade Centre France</p>


                    <a href="mailto:sales@yourcompany.com " className='link  hover:text-red-500 mt-8 mb-6'>
                                    sales@yourcompany.com
                    </a>
                    <span className='text-[22px] font-[600] block w-full text-red-500'>(91)9874*****8</span>

                    <div className='flex items-center gap-2 mt-6'>
                    <IoChatboxOutline className='text-[40px] text-red-500'/>
                    <span className='text-[15px] font-[600]'>Online Chat <br/>
                    Get Expert Help</span>
                    </div>
                    
                </div>
           
                <div className='part2 w-[40%] flex gap-0'>
        <div className='part2_col1 w-[50%] ' >
            
            <h2 className='text-[20px] font-[600] mb-3'>Products</h2>
            <ul className='list'>
            <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Prices drop
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        New products
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Best sales
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Contact us
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Sitemap
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Stores
      </a>
    </li>
            </ul>
            
        </div>

        <div className='part2_col2 w-[50%] gap-0 ' >
            
            <h2 className='text-[20px] font-[600] mb-3'>Our Company</h2>
            <ul className='list'>
            <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
       Delivery
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Legal Notice
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Terms and conditions of use
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        About us
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Secure payments
      </a>
    </li>

    <li>
      <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300 mb-4">
        Login
      </a>
    </li>
            </ul>
            </div>
        </div>

        <div className='newsletter w-[35%]  rounded-lg gap-0 self-start'>
        <h2 className='text-[20px] font-[600] mb-3'>Subscribe to newsletter</h2>
    <p className='text-[14px] mb-4'>Subscribe to our latest newsletter to get news about special discounts.</p>
    <input
      type="email"
      placeholder="Your Email Address"
      className="w-full border border-gray-300 rounded-md p-2 mb-4"
    />
    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md mb-3">
      SUBSCRIBE
    </button>
    <label className="text-[13px] flex items-center">
      <input type="checkbox" className="mr-2" />
      I agree to the terms and conditions and the privacy policy
    </label>

        </div>
        </div>

       
  </footer>
  <Drawer 
    open={context.openCartPanel} 
    onClose={context.toggleCartPanel(false)} 
    anchor={"right"}
    sx={{ '& .MuiDrawer-paper': { width: '400px' } }}
  >
    <div className="flex items-center justify-between py-3 px-3 gap-3 border-b border-black">
      <h1>Shopping Cart 1</h1>
      <IoMdClose 
        className="text-[20px] cursor-pointer" 
        onClick={context.toggleCartPanel(false)} 
      />
    </div>
  
   <CartPanel/>
  </Drawer>

  </>   
    )
}
export default Footer