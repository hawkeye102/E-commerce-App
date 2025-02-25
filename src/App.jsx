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

import ProductDetails from "./components/pages/ProductDetails";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { IoMdClose } from "react-icons/io";

import { createContext } from "react";
import ProductZoom from "./components/ProductZoom";
import ProductDetailComponent from "./components/dialogProductDetails";

export const MyContext=createContext()

export default function App() {

  const [openProductDetailsModal, setopenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(true);


  const handleClickOpenProductDetailsModal= () => {
    setopenProductDetailsModal(true);
  };

  const handleCloseProductDetailsModal = () => {
    setopenProductDetailsModal(false);
  };

  const values={
    setopenProductDetailsModal,
    handleClickOpenProductDetailsModal
  }
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("FASHION");

  return (
    <>
    <Router>
      <MyContext.Provider value={values}>
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
          <Route path="/ProductDetails/:id" element={<ProductDetails/>} />

        </Routes>
        <Footer />
        <MediaFooter />
      </div>
      </MyContext.Provider>
    </Router>

<Dialog
open={openProductDetailsModal}
// TransitionComponent={Transition}
fullWidth={fullWidth}
        maxWidth={maxWidth}
keepMounted
onClose={handleCloseProductDetailsModal}
aria-describedby="alert-dialog-slide-description"
className="ProductDetailsModal"
>

<DialogContent>
  <div className="flex items-start w-full ProductDetailsModalContainer !relative">
  <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black 
  !absolute top-[15px] right-[15px]" onClick={handleCloseProductDetailsModal}><IoMdClose/></Button>
    <div className=" w-[40%]  ">
       <ProductZoom/>
    </div>
    <div className=" w-[60%] !pt-0 flex items-start">
    <ProductDetailComponent/>
    </div>
  </div>
</DialogContent>

</Dialog>
</>
  );
}
