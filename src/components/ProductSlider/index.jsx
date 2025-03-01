import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'
import { ShoppingCart } from "lucide-react";
import { Scale, Heart, Expand } from "lucide-react";
import { MyContext } from "../../App";




const productData = {
  FASHION: [
    
    { id: 2, name: "Line Kurta", img: "fashion/f2.jpg", price: "₹600", oldPrice: "₹700", discount: "10%" },
    { id: 3, name: "Trendy top", img: "fashion/f8.jpg", price: "₹850", oldPrice: "₹950", discount: "9%" },
    { id: 4, name: "Zipper", img: "fashion/f5.jpg", price: "₹600", oldPrice: "₹700", discount: "10%" },
    { id: 5, name: "line kurta with bag", img: "hover/hov9.jpg", price: "₹850", oldPrice: "₹950", discount: "9%" },
    { id: 6, name: "Sweat shirt", img: "hover/hov8.jpg", price: "₹600", oldPrice: "₹700", discount: "10%" },
    { id: 7, name: "Cotton co-rd", img: "hover/hov10.jpg", price: "₹850", oldPrice: "₹950", discount: "9%" },
    { id: 8, name: "Silk-Saree", img: "hover/hov11.jpg", price: "₹600", oldPrice: "₹700", discount: "10%" },
  ],
  ELECTRONICS: [
    { id: 3, name: "SmartTv", img: "electronics/electronics1.jpg", price: "₹15,000", oldPrice: "₹16,500", discount: "10%" },
    { id: 4, name: "Mobile phone", img: "electronics/electronics2.jpg", price: "₹50,000", oldPrice: "₹55,000", discount: "9%" },
    { id: 5, name: "wired set", img: "electronics/electronics3.jpg", price: "₹15,000", oldPrice: "₹16,500", discount: "10%" },
    { id: 6, name: "Laptop", img: "electronics/electronics5.jpg", price: "₹50,000", oldPrice: "₹55,000", discount: "9%" },
    
    { id: 8, name: "Laptop", img: "electronics/electronics6.jpg", price: "₹50,000", oldPrice: "₹55,000", discount: "9%" },
    { id: 9, name: "SmartTV Sony", img: "electronics/electronics7.jpg", price: "₹15,000", oldPrice: "₹16,500", discount: "10%" },
    { id: 10, name: "Fridge", img: "electronics/electronics8.jpg", price: "₹50,000", oldPrice: "₹55,000", discount: "9%" },
  
  
  ],
  BAGS: [
    
    { id: 7, name: "Kid Bag", img: "bags/bags3.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 8, name: "Bag", img: "bags/bags4.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
  ],
  FOOTWEAR: [
    { id: 5, name: "Leather Shoe", img: "footwear/footwear1.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 6, name: "Kids shoe", img: "footwear/footwear2.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
    { id: 7, name: "Leather Slipper", img: "footwear/footwear3.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
  ],

  BEAUTYPRODUCTS: [
    { id: 5, name: "makeup-kit", img: "beauty/beauty1.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 6, name: "Gel", img: "beauty/beauty2.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
    { id: 7, name: "makeup", img: "beauty/beauty3.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
  ],
  GROCERIES: [
    { id: 5, name: "shelf", img: "grocery/grocery5.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 6, name: "Dry Fruits", img: "grocery/grocery2.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
    { id: 7, name: "Seed mix", img: "grocery/grocery4.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 8, name: " big-Shelf ", img: "grocery/grocery6.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
  ],
   JEWELS: [
    { id: 5, name: "gold plated", img: "jewel/jewel1.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
   ],

  
  
};

const ProductSlider = ({ selectedCategory }) => {
  
  const context=useContext(MyContext)

  return (
    <div className="product-slider">
      <h3 className="category-title">{selectedCategory}</h3>
      <Swiper
      
        modules={[Navigation, Pagination]}
        slidesPerView={6}
        spaceBetween={20}
        navigation
        pagination={false}
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {productData[selectedCategory]?.map((product) => (
          <SwiperSlide key={product.id} className="product-card">
           
            {/* Product Image Wrapper */}
            <div className="relative product-container">
              {/* Discount Badge */}
              <span className="discount">{product.discount}</span>

              {/* Product Image */}
              <img src={product.img} alt={product.name} className="product-img" />

              {/* Icons (Appear on Hover) */}
              <div className="product-actions">
  <button>
    <Scale size={20} className="scale-icon" />
  </button>
  <button>
    <Heart size={20} className="heart-icon" />
  </button>
  <button>
    <Expand size={20} className="expand-icon" onClick={() => context.setopenProductDetailsModal(true)}
    />
  </button>
</div>
            </div>


            <p className="product-name">{product.name}</p>
            <p className="price">
              <span className="old-price">{product.oldPrice}</span> {product.price}
            </p>
            <button className="add-to-cart">
              <ShoppingCart size={18} className="cart-icon" />
              ADD TO CART
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;