import React ,{useState}from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import { Button, Rating } from "@mui/material";

const MyListItems=(props)=>{
   

    return(
    
        <>
        <div className="cartItem w-full p-3 flex items-center gap-3 border-b border-black" >
            <div className="img w-[20%] rounded-md overflow-hidden">
                <Link to="/product/2346 group">
                <img src="/beauty/beauty1.jpg" className="group hover:scale-105"/></Link>
            </div>


    <div className="info1 w-[80%] relative">
    <IoClose className="cursor-pointer absolute top-10px] right-[10px] text-[20px] hover:text-red-500"/> 
      <span className="text-[13px] font-[500] block">Brands name</span>
      <h2 className="text-[15px]"><Link to="/" className="hover:text-red-400">
      Description: the versatile makeup kit</Link></h2>
      <Rating  name="size-small" defaultValue={4} size="small" readOnly/>
     
      
     
      <p className=" mt-2">
      <span className="newprice !text-black text-[14px] font-semibold ">$24.00</span>
      <span className="old-price line-through text-[14px] font-semibold pl-5 "> $47.00</span> 
        
      
      <span className="new-price text-[14px] font-semibold  pl-5">50% OFF</span>
      </p>

      <br/>

     <Button className=" !text-white !font-[500] !btn-sm !bg-red-500 hover:!bg-black transition 3s ease-in-out">Add To Cart</Button> 
</div>
        </div>

    
          


    
       
       
        </>
    )
}
export default  MyListItems