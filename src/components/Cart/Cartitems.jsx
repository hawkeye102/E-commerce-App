import React ,{useState}from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import { Rating } from "@mui/material";

const CartItems=(props)=>{
    const [sizeanchorEl, setsizeAnchorEl] = useState(null)
    const [selectSize, setselectSize] = useState(props.size)
    const openSize = Boolean(sizeanchorEl);

    const [QtyanchorEl, setQtyAnchorEl] = useState(null)
    const [selectQty, setselectQty] = useState(props.qty)
    const openQty = Boolean(QtyanchorEl);

        const handleClickSize = (event) => {
            setsizeAnchorEl(event.currentTarget);
        };
        const handleCloseSize = (value) => {
            setsizeAnchorEl(null);
            if(value!==null){
                setselectSize(value)
            }
            
        };

        const handleClickQty = (event) => {
            setQtyAnchorEl(event.currentTarget);
        };
        const handleCloseQty = (value) => {
            setQtyAnchorEl(null);
            if(value!==null){
                setselectQty(value)
            }
            
        };

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
     
      <div className="flex items-center gap-4 mt-2 ">

       <div className="relative">
        <span className="flex items-center justify-between bg-gray-100 rounded-md 
        cursor-pointer px-3 py-1 text-[12px] font-[500]" onClick={handleClickSize}>
            Size:{selectSize} <GoTriangleDown />

        </span>
        <Menu
id="basic-menu"
anchorEl={sizeanchorEl}
open={ openSize}
onClose={handleCloseSize}
MenuListProps={{
'aria-labelledby': 'basic-button',
}}
>
<MenuItem onClick={()=>handleCloseSize("s")}>s</MenuItem>
<MenuItem onClick={()=>handleCloseSize("M")}>M</MenuItem>
<MenuItem onClick={()=>handleCloseSize("L")}>L</MenuItem>
<MenuItem onClick={()=>handleCloseSize("XL")}>XL</MenuItem>
<MenuItem onClick={()=>handleCloseSize("XXL")}>XXL</MenuItem>
</Menu>
        </div>

        <div className="relative">
        <span className="flex items-center justify-between bg-gray-100
         rounded-md cursor-pointer px-3 py-1 text-[12px] font-[500]" onClick={handleClickQty}>
             Qty:{selectQty} <GoTriangleDown />
        </span>
        <Menu
id="basic-menu"
anchorEl={QtyanchorEl}
open={ openQty}
onClose={handleCloseQty}
MenuListProps={{
'aria-labelledby': 'basic-button',
}}
>
<MenuItem onClick={()=>handleCloseQty(1)}>1</MenuItem>
<MenuItem onClick={()=>handleCloseQty(2)}>2</MenuItem>
<MenuItem onClick={()=>handleCloseQty(3)}>3</MenuItem>
<MenuItem onClick={()=>handleCloseQty(4)}>4</MenuItem>
<MenuItem onClick={()=>handleCloseQty(5)}>5</MenuItem>
<MenuItem onClick={()=>handleCloseQty(6)}>6</MenuItem>
<MenuItem onClick={()=>handleCloseQty(7)}>7</MenuItem>
<MenuItem onClick={()=>handleCloseQty(8)}>8</MenuItem>
<MenuItem onClick={()=>handleCloseQty(9)}>9</MenuItem>
<MenuItem onClick={()=>handleCloseQty(10)}>10</MenuItem>
</Menu>
       </div>
       </div>
     
      <p className=" mt-2">
      <span className="newprice !text-black text-[14px] font-semibold ">$24.00</span>
      <span className="old-price line-through text-[14px] font-semibold pl-5 "> $47.00</span> 
        
      
      <span className="new-price text-[14px] font-semibold  pl-5">50% OFF</span>
      </p>
</div>
        </div>

        
          


    
       
       
        </>
    )
}
export default CartItems