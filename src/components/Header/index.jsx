import searchicon from '../../assets/search.png';
import carticon from '../../assets/cart.png';
import CategoryNav from './Navigation'
import CategoryLinks from '../pages/ProductListings/CatergoryLinks';

import SearchBar from './SearchBar';
import { Tooltip } from "@mui/material";
import { FavoriteBorder, CompareArrows, ShoppingCart, PersonOutline,PersonAddOutlined} from "@mui/icons-material";

import { Link } from "react-router-dom";

<Link to="/products" className="hover:text-red-400">
  Shop All Products
</Link>

export default function Header() {
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
  <li className="flex items-center gap-1">
    <PersonOutline fontSize="medium" className="text-gray-700" />
    <a href="#" className="text-gray-700 hover:text-black">Login</a>
  </li>
  <li className="flex items-center gap-1 mr-10">
    <PersonAddOutlined fontSize="medium" className="text-gray-700" />
    <a href="#" className="text-gray-700 hover:text-black">Register</a>
  </li>
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
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <ShoppingCart fontSize="medium" className="text-gray-700 hover:text-green-500" />
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
