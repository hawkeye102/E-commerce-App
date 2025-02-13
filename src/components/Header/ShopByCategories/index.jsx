
import {  ChevronUp, ChevronDown } from "lucide-react";
import React, { useState } from "react";
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
  Remove, // Chevron icons for expanding/collapsing
} from "@mui/icons-material";

// Categories Data Structure (Modified to include nested subcategories)
const categories = [
  {
    name: "Fashion",
    subcategories: [
      {
        name: "Apparel",
        subcategories: ["Smart Watch", "Crepe T-Shirt", "Rolling Diamond", "Leather Watch"], // Added second-level subcategories inside "Apparel"
      },
      "Outerwear",
      "Footwear",
    ],
  },
  { name: "Jewellery" },
  { name: "Watches" },
  { name: "Cosmetics" },
  { name: "Accessories" },
  { name: "Electronic" },
  { name: "Furniture" },
  { name: "Sunglasses" },
  { name: "Smart Tablet" },
];

const ShopByCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({}); //  State to track expanded categories

  //  Function to open/close drawer
  const toggleDrawer = (state) => () => {
    setIsOpen(state);
  };

  // Function to handle expanding/collapsing categories
  const handleToggle = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle the clicked category
    }));
  };

  return (
    <div>
      {/*  Button to open drawer */}
      <div className="flex items-center gap-2 cursor-pointer ml-15" onClick={toggleDrawer(true)}>
        <Menu size={24} className="text-gray-700" />
        <span className="font-semibold text-gray-700">SHOP BY CATEGORIES</span>
        <span className="ml-10">
          {isOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
        </span>
      </div>
      

      {/*  Drawer Component */}
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <div className="w-72 p-4">
          {/*  Drawer Header with Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Shop By Categories</h2>
            <IconButton onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
          </div>

          {/*  Categories List */}
          <List>
            {categories.map((category) => (
              <div key={category.name}>
                {/*  First-Level Categories */}
                <ListItem button onClick={() => handleToggle(category.name)}>
                  <ListItemText primary={category.name} />
                  {Array.isArray(category.subcategories) ? (
                    <ListItemIcon>
                      {openCategories[category.name] ? (
                        <Remove fontSize="small" sx={{ color: "gray" }} />
                      ) : (
                        <Add fontSize="small" sx={{ color: "gray" }} />
                      )}
                    </ListItemIcon>
                  ) : null}
                </ListItem>

                {/*  First-Level Subcategories (Expandable) */}
                {Array.isArray(category.subcategories) && (
                  <Collapse in={openCategories[category.name]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {category.subcategories.map((sub) =>
                        typeof sub === "object" ? (
                          <div key={sub.name}>

                            {/* Second-Level Expandable List (For Apparel) */}
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleToggle(sub.name)}>
                              <ListItemText primary={sub.name} sx={{ color: "gray" }} />
                              <ListItemIcon>
                                {openCategories[sub.name] ? (
                                  <Remove fontSize="small" sx={{ color: "gray" }} />
                                ) : (
                                  <Add fontSize="small" sx={{ color: "gray" }} />
                                )}
                              </ListItemIcon>
                            </ListItem>

                            {/*  Second-Level Subcategories Inside Apparel */}
                            <Collapse in={openCategories[sub.name]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {sub.subcategories.map((item) => (
                                  <ListItem key={item} button sx={{ pl: 6 }}>
                                    <ListItemText primary={item} sx={{ color: "gray" }} />
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          </div>
                        ) : (
                          <ListItem key={sub} button sx={{ pl: 4 }}>
                            <ListItemText primary={sub} sx={{ color: "gray" }} />
                          </ListItem>
                        )
                      )}
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





 
      