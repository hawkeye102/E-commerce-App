import { Menu, Rocket } from "lucide-react"; 
import ShopbyCategories from '../ShopByCategories'
import HoverCategories from "../HoverCategories";

import { useState } from "react";
import "./style.css";


const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-2 border-b shadow-sm">
      {/* Left Section: Menu and Category Dropdown */}
      <ShopbyCategories/>
      
      {/* Center Section: Navigation Links */}
      {/* <nav className="flex gap-6">
  <a href="#" className="text-gray-700 hover:text-red-500 active:text-blue-600 focus:text-blue-700  font-semibold transition-all duration-200 transform active:scale-110">Home</a>
  <a href="#" className="text-gray-700 hover:text-red-500 active:text-blue-600 focus:text-blue-700  font-semibold transition-all duration-200 transform active:scale-110">Fashion</a>
  <a href="#" className="text-gray-700 hover:text-red-500 active:text-blue-600 focus:text-blue-700  font-semibold transition-all duration-200 transform active:scale-110">Electronics</a>
  <a href="#" className="text-gray-700 hover:text-red-500 active:text-blue-600 focus:text-blue-700  font-semibold transition-all duration-200 transform active:scale-110">Bags</a>
  <a href="#" className="text-gray-700 hover:text-red-500 active:text-blue-600 focus:text-blue-700  font-semibold transition-all duration-200 transform active:scale-110">Beauty</a>
  <a href="#" className="text-gray-700 hover:text-red-500 active:text-blue-600 focus:text-blue-700  font-semibold transition-all duration-200 transform active:scale-110">Jewellery</a>
  <a href="#" className="text-gray-700 hover:text-red-500 active:text-blue-600 focus:text-blue-700  font-semibold transition-all duration-200 transform active:scale-110">Footwear</a>
  <a href="#" className="text-gray-700 hover:text-red-500 active:text-blue-600 focus:text-blue-700  font-semibold transition-all duration-200 transform active:scale-110">Grocery</a>
</nav> */}

 <HoverCategories/>


      {/* Right Section: Free Delivery */}
      <div className="flex items-center gap-2">
        <Rocket size={20} className="text-gray-700" />
        <span className="text-gray-700 font-medium">Free International Delivery</span>
      </div>
    </div>
  );
};

export default CategoryNav;
