import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Button, Box } from '@mui/material';

const CartPanel=()=>{
return(
  <>
    <div className="scroll w-full !max-h-[150px] overflow-y-scroll overflow-x-hidden py-3 px-4">
  <div className="cartItem flex items-center gap-4 w-full border-b border-black">
    <div className="!w-[25%] overflow-hidden h-[100px] ">
     <Link to="/product/9807" className="block group"> <img src="/beauty/beauty1.jpg" alt="makeup kit"
      className="w-full h-full object-cover rounded-md  group-hover:scale-105" />
     </Link>
    </div>

    <div className="!info w-[75%] pr-3 relative">
    <Link to="/product/9807" className="link transition-all"><h3 
    className="!font-[500] hover:text-red-500 hover:underline cursor-pointer">
      Versatile Makeup Kit</h3></Link>

      <p className=" flex items-center  ">
        <span>Qty:</span>
        <span className="px-1">2</span>
        <span className="text-red-500 px-4"   >Price: $25 </span>
      </p>
      <MdDelete className="text-[20px] absolute top-[5px] right-[10px] cursor-pointer"/>
    </div>
  </div>

  <div className="cartItem flex items-center gap-4 w-full border-b border-black">
    <div className="!w-[25%] overflow-hidden h-[100px] ">
     <Link to="/product/9807" className="block group"> <img src="/beauty/beauty3.jpg" alt="makeup kit"
      className="w-full h-full object-cover rounded-md  group-hover:scale-105" />
     </Link>
    </div>

    <div className="!info w-[75%] pr-3 relative">
    <Link to="/product/9807" className="link transition-all"><h3 
    className="!font-[500] hover:text-red-500 hover:underline cursor-pointer">
      Versatile Makeup Kit</h3></Link>

      <p className=" flex items-center  ">
        <span>Qty:</span>
        <span className="px-1">2</span>
        <span className="text-red-500 px-4"   >Price: $25 </span>
      </p>
      <MdDelete className="text-[20px] absolute top-[5px] right-[10px] cursor-pointer"/>
    </div>
  </div>

  <div className="cartItem flex items-center gap-4 w-full border-b border-black">
    <div className="!w-[25%] overflow-hidden h-[100px] ">
     <Link to="/product/9807" className="block group"> <img src="/beauty/beauty2.jpg" alt="makeup kit"
      className="w-full h-full object-cover rounded-md  group-hover:scale-105" />
     </Link>
    </div>

    <div className="!info w-[75%] pr-3 relative">
    <Link to="/product/9807" className="link transition-all"><h3 
    className="!font-[500] hover:text-red-500 hover:underline cursor-pointer">
      Versatile Makeup Kit</h3></Link>

      <p className=" flex items-center  ">
        <span>Qty:</span>
        <span className="px-1">2</span>
        <span className="text-red-500 px-4"   >Price: $25 </span>
      </p>
      <MdDelete className="text-[20px] absolute top-[5px] right-[10px] cursor-pointer"/>
    </div>
  </div>


 
  
</div>
<br/>

<div className="Bottom-sec absolute !bottom-[10px] w-full pr-5">
<div className="w-full border-t border-black flex items-center justify-between flex-col">
  <div className="flex items-center justify-between w-full  py-2 px-3">
    <span className="text-[14px] font-[600]">1 items</span>
    <span className="text-red-500">$86.76</span>

  </div>
  <div className="flex items-center justify-between w-full py-3 px-4">
    <span className="text-[14px] font-[600]">Shipping</span>
    <span className="text-red-500">$8</span>

  </div>
  
</div>



<div className="w-full border-t border-black flex items-center justify-between flex-col">
  <div className="flex items-center justify-between w-full  py-2 px-3">
    <span className="text-[14px] font-[600]">Total(tax.excl)</span>
    <span className="text-red-500">$90.70</span>

  </div>
  <div className="flex items-center justify-between w-full py-3 px-4">
    <span className="text-[14px] font-[600]">Total(tax.incl)</span>
    <span className="text-red-500">$120.00</span>

  </div>

  <div className="flex items-center justify-between">
  <Box className="flex justify-between gap-4 py-4 px-3">
  <Link to="/cart" className="w-full">
      <Button
        variant="outlined"
        color="primary"
        fullWidth
      >
        View Cart
      </Button>
      </Link>

      <Link to="/checkout" className="w-full">
      <Button
        variant="contained"
        color="secondary"
        fullWidth
      >
        Checkout
      </Button>
      </Link>
    </Box>

  </div>
  
</div>
</div>
</>

)
}

export default CartPanel