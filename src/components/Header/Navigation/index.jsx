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
