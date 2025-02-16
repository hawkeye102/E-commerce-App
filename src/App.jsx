import React, { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/SwiperSlider";
import PopularProducts from "./components/PopularProducts";
import ProductSlider from "./components/Productslider";
import FreeShip from "./components/freeShipping";
import Banner from "./components/Banner";

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
      <Banner />
    </div>
  );
}
