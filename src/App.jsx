import React, { useEffect, useState } from "react";
import './App.css'
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

import DialogContent from '@mui/material/DialogContent';
import { IoMdClose } from "react-icons/io";

import { createContext } from "react";
import ProductZoom from "./components/ProductZoom";
import ProductDetailComponent from "./components/dialogProductDetails";
import Login from "./components/pages/Login";
export const MyContext=createContext()
import Register from "./components/pages/Register";
import Cart from "./components/Cart";
import Verify from "./components/pages/Verify";

import toast, { Toaster } from 'react-hot-toast';
import ForgetPassword1 from "./components/pages/Forgetpassword";
import Checkout from "./components/pages/Checkout";
import Myaccount from "./components/pages/MyAccount";


import MyList from "./components/pages/MyList";
import Orders from "./components/pages/Order";
import Address from "./components/Myaccountsidebar/Address";

import { fetchData, postData } from "./utils/api";




export default function App() {

  const [openProductDetailsModal, setopenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(true);
  const [isLogin,setIsLogin] =useState(false)
  const apiUrl=import.meta.env.VITE_API_URL;
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [userData, setUserData] = useState(null);

  const [cartdata,SetCartdata]=useState([])
  const [openCartPanel, setopenCartPanel] = useState(false);

const toggleCartPanel = (newOpen) => () => {
  setopenCartPanel(newOpen);
};




useEffect(() => {
  
  fetchData('/api/users/profile').then((res) => {
  if (res.success) {
    const user = res.user;
    setUserData({
      id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      avatar: user.avatar,
    });
    setIsLogin(true);
  }
});
}, []);



useEffect(() => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    setIsLogin(true);
  } else {
    setIsLogin(false);
  }
}, []);



const [product, setProduct] = useState(null);

useEffect(() => {
  if (!selectedProductId) return;
fetch(`${apiUrl}/api/product/${selectedProductId}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setProduct(data.product);
      } else {
        setProduct(null);
      }
    })
    .catch(() => {
      setProduct(null);
    });
}, [selectedProductId]);


  const handleClickOpenProductDetailsModal= () => {
    setopenProductDetailsModal(true);
  };
 const handleCloseProductDetailsModal = () => {
    setopenProductDetailsModal(false);
  };

  const openAlertBox=(status,msg)=>{
    if(status==="success"){
      toast.success(msg);
    }
    if(status==="error"){
      toast.error(msg);
    }
   

  }

 const addTocart = (product, userId, quantity) => {
  if (!userId) {
    openAlertBox("error", "User ID missing! Please login.");
    return;
  }

  const payload = {
    productTitle: product.name,
    image: product.images[0],
    rating: product.rating,
    price: product.price,
    quantity: quantity,
    SubTotal: product.price * quantity,
    productId: product._id,
    countInstock: product.countInstock,
    userId: userId
  };

  postData('/api/cart/add', payload)
    .then((res) => {
      console.log("Add to cart response:", res);

      if (res?.success) {
        const newCartItem = res?.cartItem;
        openAlertBox("success", "Item added to cart!");

        // ✅ Update cartdata state with new item
        SetCartdata((prevCart) => [...prevCart, newCartItem]);
      } else {
        openAlertBox("error", res?.message || "Failed to add item to cart.");
      }
    })
    .catch((err) => {
      console.error("Add to cart failed:", err);
      openAlertBox("error", "Something went wrong! Try again.");
    });
};

useEffect(() => {
  if (!userData?.id) return;

  fetchData('/api/cart/get')
    .then((res) => {
      if (res.success) {
        SetCartdata(res.cartItems || []);
      } else {
        SetCartdata([]);
      }
    })
    .catch(() => SetCartdata([]));
}, [userData?.id]); // <- Re-run whenever userData becomes available


  const values={
    selectedProductId,
    setSelectedProductId,
    setopenProductDetailsModal,
    handleClickOpenProductDetailsModal,
    setopenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
     addTocart,
     cartdata,
     SetCartdata
    
    
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
           <Route path="/listingproducts" element={<ProductListing />} />
          <Route path="/listingproducts/:category" element={<ProductListing />} />
          <Route path="/listingproducts/:category/:subcategory" element={<ProductListing />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails/>} />

           {/* {Login route} */}
           <Route path="/login" element={<Login/>} />
            
             {/* {Register route} */}
           <Route path="/Register" element={<Register/>} />

           <Route path="/cart" element={<Cart/>} />

            {/* {Verify route} */}
           <Route path="/verify" element={<Verify/>} />

            {/* {forgot password route} */}
            <Route path="/forget-password" element={<ForgetPassword1/>} />
           
           {/* {checkout page route} */}
           <Route path="/checkout" element={<Checkout/>} />

           {/* {my-account page route} */}
           <Route path="/my-account" element={<Myaccount/>} />

           {/* {my-listitems page route} */}
           <Route path="/my-list" element={<MyList/>} />

           {/* {my-orders page route} */}
           <Route path="/my-orders" element={<Orders/>} />

           {/* {address page route} */}
           <Route path="/address" element={<Address/>} />


        </Routes>
        <Footer />
        <MediaFooter />
      </div>
      
    
    <Toaster />

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
  {!product ? (
    <p className="p-4">Loading product details...</p>
  ) : (
    <div className="flex items-start w-full ProductDetailsModalContainer !relative">
      <Button
        className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black 
        !absolute top-[15px] right-[15px]"
        onClick={handleCloseProductDetailsModal}
      >
        <IoMdClose />
      </Button>
      <div className="w-[40%]">
       <ProductZoom images={
  Array.isArray(product?.images)
    ? product.images.map(img => img.url || img)  // handle string or object
    : product?.images
      ? [product.images] // if it's just a string
      : []
} />

      </div>
      <div className="w-[60%] !pt-0 flex items-start">
        <ProductDetailComponent product={product} />
      </div>
    </div>
  )}
</DialogContent>


</Dialog>


</MyContext.Provider>
</Router>
</>
  );
}
