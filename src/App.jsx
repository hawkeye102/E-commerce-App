import React, { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/SwiperSlider";
import PopularProducts from "./components/PopularProducts";
import ProductSlider from "./components/Productslider";
import FreeShip from "./components/freeShipping";
import Banner from "./components/Banner";

import LatestProducts from "./components/LatestProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import BlogSection from "./components/BlogItems";
import Footer from "./components/FooterSection";
import MediaFooter from "./components/Media";

export default function App() {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("FASHION");

  return (
    <div>
      <Header />
      <Slider />

      {/* Only one instance of PopularProducts */}
      <PopularProducts onCategoryChange={setSelectedCategory} />

      {/* Correctly render ProductSlider based on selectedCategory */}
      <ProductSlider selectedCategory={selectedCategory} />

      <FreeShip />
      <LatestProducts/>
      <FeaturedProducts/>
      <Banner />
      <BlogSection/>
      <Footer/>
      <MediaFooter/>
    </div>
  );
}
