import React,{useState} from "react";
import Button from  '@mui/material/Button'
import Rating from  '@mui/material/Rating'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import  QtyBox from '../Qtybox'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";

const ProductDetailComponent=()=>{
     const [ProductActionIndex,setProductActionIndex]=useState(null)
return(
    <>
      <div className="">
      <h1 className="text-[20px] font-[600] ">Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)|</h1>
      <div className=" flex items-center gap-3">
       <span className="text-gray-600 py-2 ">Brands : 
          <span className="text-[15px] font-[700px] pl-2 text-black">Altecia </span>
       </span>
       <Rating name="size-small"  defaultValue={4} size="small" readOnly/>
       <span className="text-[15px] font-[600] cursor-pointer">Review(6)</span>

       
      </div>
      <div className=" flex items-center gap-3">
        <span className="old-price text-[15px] font-[500]">$38.70</span>
        <span className="new-price text-[15px] font-[500]">$29.70</span>
        <span className=" text-[15px] font-[500] py-2 pl-2">Available in stock :
          <span className="text-emerald-400 font-bold"> 135 items</span></span>
    </div>

  <p className="text-[14px] leading-6 mt-2 mb-5">lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </p>

   <div className="flex items-center">
    <span className="text-[16px] pr-2">Size :</span>
    <div className="flex items-center gap-1">
    <Button onClick={()=>setProductActionIndex(0)} className={`!min-w-[40px] !border-2 !border-gray-300 h-[30px]
      ${ProductActionIndex===0 ?'!bg-red-400 !text-white':''}`}>S</Button>

    <Button onClick={()=>setProductActionIndex(1)} className={`!min-w-[40px] !border-2 !border-gray-300 h-[30px]
      ${ProductActionIndex===1 ?'!bg-red-400 !text-white':''}`}>M</Button>

    <Button onClick={()=>setProductActionIndex(2)} className={`!min-w-[40px] !border-2 !border-gray-300 h-[30px]
      ${ProductActionIndex===2 ?'!bg-red-400 !text-white':''}`}>L</Button>

    <Button onClick={()=>setProductActionIndex(3)} className={`!min-w-[40px] !border-2 !border-gray-300 h-[30px]
      ${ProductActionIndex=== 3 ?'!bg-red-400 !text-white':''}`}>XL</Button>
    
    </div>
   </div>
  <p className="text-[14px] mt-4 mb-2 py-2">Free Shipping(Est. Delivery 2 to 3 days )</p>
   <div className="flex items-center gap-3">
    <div className="qtyBoxWrapper mb-2">
      <QtyBox/>
    </div>
    <button className="flex items-center h-[30px] bg-red-600 text-white py-2 px-4 rounded gap-2  hover:bg-black transition duration-300 mb-2">
    <ShoppingCartIcon className="text-[15px]" />
    Add To Cart
   </button>
</div>

    <div className="flex items-center gap-3 mt-4 ">
        <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[600]   hover:text-red-500 transition duration-300"> 
         <FaRegHeart className="text-[18px] font-[600]"/>Add to Wishlist
        </span>

        <span className="pl-2 flex items-center gap-2 text-[14px] link cursor-pointer font-[600]  hover:text-red-500 transition duration-300"> 
         <MdOutlineCompareArrows className="text-[18px] font-[600]"/>Add to Compare
        </span>
    </div>
    </div>
    
    </>
)
}

export default ProductDetailComponent