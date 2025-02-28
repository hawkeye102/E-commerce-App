import searchicon from '../../assets/search.png';
import carticon from '../../assets/cart.png';
import CategoryNav from './Navigation'

import SearchBar from './SearchBar';
import { Tooltip } from "@mui/material";
import { FavoriteBorder, CompareArrows, ShoppingCart, PersonOutline,PersonAddOutlined} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

<Link to="/products" className="hover:text-red-400">
  Shop All Products
</Link>

export default function Header() {
  const context=useContext(MyContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
    <header className="w-full border-b border-gray-200 text-sm">
      {/* Top Strip */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-100 text-gray-600">
        {/* Promo Message */}
        <p>Get up to 50% off new season styles, limited time only</p>

        {/* Center Options */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Help Center</a>
          <span className="h-4 w-px bg-gray-500"></span>
          <a href="#" className="hover:underline text-blue-600 font-medium">Order Tracking</a>
        </div>

        {/* Language & Currency Dropdowns */}
        <div className="flex items-center gap-2">
          <select className="border-none bg-transparent cursor-pointer">
            <option>🇺🇸 English</option>
            <option>🇮🇳 Hindi</option>
            <option>🇫🇷 French</option>
          </select>

          <select className="border-none bg-transparent cursor-pointer">
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200 text-sm">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">E-Shop</a>
        </div>

        {/* Search Bar (Centered) */}
        <div className="flex-1 flex justify-center ml-40">
          <SearchBar />
        </div>

 {/* using icon fom materialise ui  */}
       
        <ul className="flex gap-6">

         { context.isLogin ===false?(
          <>
         <li className="flex items-center gap-1">
    <PersonOutline fontSize="medium" className="text-gray-700" />
    <a href="/login" className="text-gray-700 hover:text-black">Login</a>
  </li> 
  
 
  <li className="flex items-center gap-1 mr-10">
    <PersonAddOutlined fontSize="medium" className="text-gray-700" />
    <a href="/register" className="text-gray-700 hover:text-black">Register</a>
  </li>
  </> )
  :
  (
    <>
  <div className='MyAccountwrap flex items-center gap-3'>
    <Button  className=' !text-[20px] w-[40px] h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]' onClick={handleClick}>

   <FaRegUser className='text-[16px] text-[#000]'/>
   
    </Button>
    <div className='flex  flex-col'>
    <span className='text-[14px] font-[500]'>John wilson</span>
    <span className='text-[12px] font-[500]'>John_wilson@gmail.com</span>
   </div>

  </div>

<Menu
anchorEl={anchorEl}
id="account-menu"
open={open}
onClose={handleClose}
onClick={handleClose}
slotProps={{
  paper: {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  },
}}
transformOrigin={{ horizontal: 'right', vertical: 'top' }}
anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
  <Link to="/my-account" className='w-full block'>
<MenuItem onClick={handleClose}>
  <FaRegUser className='mr-2'/> <span className='text-[14px]'>MyAccount</span> 
</MenuItem>
</Link>

<MenuItem onClick={handleClose}>
  <IoBagCheckSharp className='mr-2'/> <span className='text-[14px]'>Orders</span>
</MenuItem>

<MenuItem onClick={handleClose}>
  <IoMdHeart className='mr-2'/> <span className='text-[14px]'>My List</span>
</MenuItem>
<MenuItem onClick={handleClose}>
  <IoIosLogOut className='mr-2'/> <span className='text-[14px]'>Logout</span>
</MenuItem>
<Divider />



</Menu> 
</>
 
  )} 
</ul>



        {/* Navigation Links & Icons */}
        

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            {/* Wishlist Icon */}
            <Tooltip title="Wishlist">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <FavoriteBorder fontSize="medium" className="text-gray-700 hover:text-red-500" />
              </button>
            </Tooltip>

            {/* Compare Icon */}
            <Tooltip title="Compare">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <CompareArrows fontSize="medium" className="text-gray-700 hover:text-blue-500" />
              </button>
            </Tooltip>

            {/* Cart Icon */}
            <Tooltip title="Cart">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition" 
              onClick={()=>context. setopenCartPanel(true)}>
                <ShoppingCart fontSize="medium" className="text-gray-700 hover:text-green-500"/>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
              </button>
            </Tooltip>
          </div>
       
      </nav>
      <CategoryNav/>
      
    </header>
    
    
    </div>
  );
}
