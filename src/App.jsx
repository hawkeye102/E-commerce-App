import React, { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/SwiperSlider";
import PopularProducts from "./components/PopularProducts";
import ProductSlider from "./components/Productslider";
import FreeShip from "./components/freeShipping";
import Banner from "./components/Banner";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LatestProducts from "./components/LatestProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import BlogSection from "./components/BlogItems";
import Footer from "./components/FooterSection";
import MediaFooter from "./components/Media";
import Baanner2 from "./components/Homeslide2";
import ProductListing from "./components/pages/ProductListings";
import HoverCategories from "./components/Header/HoverCategories";

export default function App() {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("FASHION");

  return (
    <Router>
   <div>
        <Header /> {/* Header remains at the top for all pages */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Slider />
                <PopularProducts onCategoryChange={setSelectedCategory} />
                <ProductSlider selectedCategory={selectedCategory} />
                <Baanner2 />
                <FreeShip />
                <LatestProducts />
                <FeaturedProducts />
                <Banner />
                <BlogSection />
              </>
            }
          />

          {/* Product Listing Route */}
          <Route path="/products" element={<ProductListing />} />
          <Route path="/listingproducts/:category" element={<ProductListing />} />
        <Route path="/listingproducts/:category/:subcategory" element={<ProductListing />} />

        </Routes>
        <Footer />
        <MediaFooter />
      </div>
    </Router>
  );
}
