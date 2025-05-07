
import {  ChevronUp, ChevronDown } from "lucide-react";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Collapse,
} from "@mui/material";
import {
  Menu,
  Close,
  Add,
  Remove, 
} from "@mui/icons-material";
import { fetchData } from "../../../utils/api";


const ShopByCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [catData, setCatData] = useState([]);
  const [openCategories, setOpenCategories] = useState({}); 

  // Fetch categories from backend
  useEffect(() => {
    fetchData("/api/category").then((res) => {
      if (res?.success) {
        setCatData(res.rootCategories); 
      }
    });
  }, []);

  // Toggle drawer open/close
  const toggleDrawer = (state) => () => {
    setIsOpen(state);
  };

  // Toggle expand/collapse for a category
  const handleToggle = (categoryId) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <div>
      {/* Drawer Toggle Button */}
      <div className="flex items-center gap-2 cursor-pointer ml-15" onClick={toggleDrawer(true)}>
        <Menu size={24} className="text-gray-700" />
        <span className="font-semibold text-gray-700">SHOP BY CATEGORIES</span>
        <span className="ml-10">
          {isOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
        </span>
      </div>

      {/* Drawer */}
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <div className="w-72 p-4">
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Shop By Categories</h2>
            <IconButton onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
          </div>

          {/* Category List */}
          <List>
  {catData.map((category) => (
    <div key={category._id}>
      {/* Main Category (with Link) */}
      <ListItem button onClick={() => handleToggle(category._id)}>
      <ListItemText>
  <div onClick={() => setIsOpen(false)}>
    <Link
      to={`/listingproducts/${category.name.toLowerCase()}`}
      className="text-black hover:text-red-500 font-medium"
    >
      {category.name}
    </Link>
  </div>
</ListItemText>


        {category.children?.length > 0 && (
          <ListItemIcon>
            {openCategories[category._id] ? (
              <Remove fontSize="small" sx={{ color: "gray" }} />
            ) : (
              <Add fontSize="small" sx={{ color: "gray" }} />
            )}
          </ListItemIcon>
        )}
      </ListItem>

      {/* Subcategories */}
      {category.children?.length > 0 && (
        <Collapse in={openCategories[category._id]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {category.children.map((sub) => (
              <ListItem key={sub._id} button sx={{ pl: 4 }}>
               <ListItemText>
  <div onClick={() => setIsOpen(false)}>
    <Link
      to={`/listingproducts/${category.name.toLowerCase()}/${sub.name.toLowerCase()}`}
      className="text-gray-600 hover:text-red-400"
    >
      {sub.name}
    </Link>
  </div>
</ListItemText>

              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </div>
  ))}
</List>

        </div>
      </Drawer>
    </div>
  );
};


export default ShopByCategories;





 
      