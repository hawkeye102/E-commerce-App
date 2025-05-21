import { Menu, Rocket } from "lucide-react"; 
import ShopbyCategories from '../ShopByCategories'
import HoverCategories from "../HoverCategories";

import { useState } from "react";
import "./style.css";


const CategoryNav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Left: ShopbyCategories */}
        <ShopbyCategories />

        {/* Center: HoverCategories */}
        <HoverCategories />

        
      </div>
    </div>
  );
};


export default CategoryNav;
