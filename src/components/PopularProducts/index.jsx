import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import "./style.css"; // Import CSS

const categories = [
  "FASHION",
  "ELECTRONICS",
  "BAGS",
  "FOOTWEAR",
  "GROCERIES",
  "BEAUTYPRODUCTS",
  "JEWELS",
];

const PopularProducts = ({ onCategoryChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    onCategoryChange(categories[newValue]); // Notify App.jsx about the selected category
  };

  return (
    <div className="popular-products">
      {/* Left Section */}
      <div className="left-section">
        <h2>Popular Products</h2>
        <p>Do not miss the current offers until the end of March.</p>
      </div>

      {/* Right Section: Scrollable Tabs */}
      <div className="right-section">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          className="custom-tabs"
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} className="custom-tab" />
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default PopularProducts;
