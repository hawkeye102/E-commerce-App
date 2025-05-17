import React, { useState,useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import "./style.css"; // Import CSS
import { fetchData } from "../../utils/api";




const PopularProducts = ({ onCategoryChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [categories, setCategories] = useState([]); // Initially empty array

  useEffect(() => {
    fetchData("/api/category").then((res) => {
      if (res?.success && res.rootCategories?.length > 0) {
        const catNames = res.rootCategories.map((cat) => cat.name.toUpperCase());
        setCategories(catNames);

        // Notify parent of default selected category
        onCategoryChange(catNames[0]);
      }
    });
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    onCategoryChange(categories[newValue]);
  };

  return (
    <div className="popular-products">
      <div className="left-section">
        <h2>Popular Products</h2>
        <p>Do not miss the current offers until the end of March.</p>
      </div>

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
