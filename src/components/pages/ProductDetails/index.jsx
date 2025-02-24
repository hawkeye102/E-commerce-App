import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductZoom from "../../ProductZoom";
import Rating from  '@mui/material/Rating'
import Button from  '@mui/material/Button'
import QtyBox from "../../Qtybox";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import TextField from '@mui/material/TextField';
import LatestProducts from "../../LatestProducts";
import RelatedProducts from "./Relatedproducts";


const ProductDetails=()=>{

  

  const [ProductActionIndex,setProductActionIndex]=useState(null)
  const [ActiveTab,setActiveTab] =useState(0)
    return(
      <>
       
<div className="container">
<Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Fashion
          
        </Link>
        {/* <Typography sx={{ color: 'text.primary' }}></Typography> */}
      </Breadcrumbs>
</div>
 
<section className="py-5 bg-white">
<div className="container flex gap-4 items-center">
    <div className="Product-zoom container  w-[40%] h-[70vh] overflow-hidden">
        <ProductZoom/>
    </div>
    <div className="Product-content  w-[60%] pr-10">
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
</div>

<div className="  container mt-8">
  <div className=" ml-6 link flex items-center gap-4  mb-5 ">
    <span  className={`link text-[15px] cursor-pointer font-[500] ${ActiveTab === 0 ? 'text-blue-500' : ''}`}
     onClick={() => setActiveTab(0)} >Description</span>
    <span  className={`link text-[15px] cursor-pointer font-[500] ${ActiveTab === 1 ? 'text-blue-500' : ''}`}
    onClick={() => setActiveTab(1)}>Product Details</span>
    <span className={`link text-[15px] cursor-pointer font-[500] ${ActiveTab === 2 ? 'text-blue-500' : ''}`}
     onClick={() => setActiveTab(2)}>Reviews (5)</span>
  </div>
  
  {ActiveTab===0 &&(
   <div className=" bg-gray-100 shadow-md w-full rounded-md  py-5 px-8">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

       <h4 className="font-[600] mt-2">LightWeight</h4>
       <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
       <h4 className="font-[600] mt-2">Free Shipping & Return </h4>
       <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
 
       <h4 className="font-[600] mt-2">Money Bach Guarntee</h4>
       <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
       <h4 className="font-[600] mt-2">Online Support </h4>
       <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
   </div>
  )}
   
   {ActiveTab===1 &&(
   <table class="table-fixed w-full border border-gray-300 rounded-lg overflow-hidden ml-2">
   <thead>
     <tr class="bg-blue-100">
       <th class="border border-gray-300 px-4 py-2">StandUp</th>
       <th class="border border-gray-300 px-4 py-2">Framing</th>
       <th class="border border-gray-300 px-4 py-2">Weight</th>
       
     </tr>
   </thead>
   <tbody>
     <tr class="hover:bg-blue-50 transition-colors duration-300">
       <td class="border border-gray-300 px-4 py-2">
         Duumy The Sliding Mr. Bones (Next Stop, Pottersville)
       </td>
       <td class="border border-gray-300 px-4 py-2">Field1</td>
       <td class="border border-gray-300 px-4 py-2">Field2</td>
     </tr>
     <tr class="hover:bg-blue-50 transition-colors duration-300">
       <td class="border border-gray-300 px-4 py-2">Witchy Woman</td>
       <td class="border border-gray-300 px-4 py-2">The Eagles</td>
       <td class="border border-gray-300 px-4 py-2">1972</td>
     </tr>
     <tr class="hover:bg-blue-50 transition-colors duration-300">
       <td class="border border-gray-300 px-4 py-2">Shining Star</td>
       <td class="border border-gray-300 px-4 py-2">Earth, Wind, and Fire</td>
       <td class="border border-gray-300 px-4 py-2">1975</td>
     </tr>
   </tbody>
 </table>
 
)}

{ActiveTab === 2 && (
  <div className="w-full bg-white rounded-lg shadow-md p-5">
    <h2 className="text-2xl font-semibold text-center mb-6"> Customer Reviews</h2>

    {/* Scrollable Reviews Section */}
    <div className="w-full max-h-[320px] overflow-y-auto pr-2 space-y-4">
      {/* Review Card 1 */}
      <div className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Ananya Sharma"
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[16px]">Ananya Sharma</h3>
            <p className="text-sm text-gray-500">2024-12-01</p>
          </div>
          <p className="text-gray-700 mt-1 text-sm italic">
            "Absolutely love this product! The quality is top-notch, and customer support was super helpful. Highly recommend!"
          </p>
          <div className="text-yellow-400 mt-1 text-sm">⭐⭐⭐⭐☆</div>
        </div>
      </div>

      {/* Review Card 2 */}
      <div className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Rohan Verma"
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[16px]">Rohan Verma</h3>
            <p className="text-sm text-gray-500">2024-12-01</p>
          </div>
          <p className="text-gray-700 mt-1 text-sm italic">
            "I am amazed by the fast delivery and the packaging. The product exceeded my expectations!"
          </p>
          <div className="text-yellow-400 mt-1 text-sm">⭐⭐⭐⭐⭐</div>
        </div>
      </div>

       {/* Review Card 3 */}
       <div className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Rohan Verma"
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[16px]">Rohan Verma</h3>
            <p className="text-sm text-gray-500">2024-12-01</p>
          </div>
          <p className="text-gray-700 mt-1 text-sm italic">
            "I am amazed by the fast delivery and the packaging. The product exceeded my expectations!"
          </p>
          <div className="text-yellow-400 mt-1 text-sm">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  </div>
)}
 
 <br/>

 <div className="review form bg-gray-300 rounded-md py-4 px-2 ml-3">
  <h2 className="text-[16px] font-[600] mb-2">Add a Review</h2>

  <form className="w-full">
    <TextField
      id="outlined-multiline-flexible"
      label="Write a review"
      multiline
      maxRows={4}
      className="w-full"
    />
    <br></br>
    <Rating name="size-small" defaultValue={4} readOnly />
  
    <div className="flex justify-start mt-4">
  <button className="  text-[12px]  bg-blue-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
    Submit Review
  </button>
 </div>
</form>
</div>

<div className="container mt-5 px-6">
  <h2 className="text-[20px] font-[600] mb-2">Related Products</h2>
  <RelatedProducts/>
</div>

 


 
    
</div>
</section>

</>
    )
}

export default ProductDetails