import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'
import { ShoppingCart } from "lucide-react";
import { Scale, Heart, Expand } from "lucide-react";




const productData = {
  FASHION: [
    { id: 1, name: "Denim Jacket", img: "fashion/fashion1.jpg", price: "₹850", oldPrice: "₹950", discount: "9%" },
    { id: 2, name: "T-shirt", img: "fashion/fashion2.jpg", price: "₹600", oldPrice: "₹700", discount: "10%" },
    { id: 3, name: "Denim Jacket", img: "fashion/fashion3.jpg", price: "₹850", oldPrice: "₹950", discount: "9%" },
    { id: 4, name: "T-shirt", img: "fashion/fashion4.jpg", price: "₹600", oldPrice: "₹700", discount: "10%" },
    { id: 5, name: "Denim Jacket", img: "fashion/fashion5.jpg", price: "₹850", oldPrice: "₹950", discount: "9%" },
    { id: 6, name: "T-shirt", img: "fashion/fashion6.jpg", price: "₹600", oldPrice: "₹700", discount: "10%" },
    { id: 7, name: "Denim Jacket", img: "fashion/fashion7.jpg", price: "₹850", oldPrice: "₹950", discount: "9%" },
    { id: 8, name: "T-shirt", img: "fashion/fashion8.jpg", price: "₹600", oldPrice: "₹700", discount: "10%" },
  ],
  ELECTRONICS: [
    { id: 3, name: "Smartphone", img: "electronics/electronics1.jpg", price: "₹15,000", oldPrice: "₹16,500", discount: "10%" },
    { id: 4, name: "Laptop", img: "electronics/electronics2.jpg", price: "₹50,000", oldPrice: "₹55,000", discount: "9%" },
    { id: 5, name: "Smartphone", img: "electronics/electronics3.jpg", price: "₹15,000", oldPrice: "₹16,500", discount: "10%" },
    { id: 6, name: "Laptop", img: "electronics/electronics4.jpg", price: "₹50,000", oldPrice: "₹55,000", discount: "9%" },
    { id: 7, name: "Smartphone", img: "electronics/electronics5.jpg", price: "₹15,000", oldPrice: "₹16,500", discount: "10%" },
    { id: 8, name: "Laptop", img: "electronics/electronics6.jpg", price: "₹50,000", oldPrice: "₹55,000", discount: "9%" },
    { id: 9, name: "Smartphone", img: "electronics/electronics7.jpg", price: "₹15,000", oldPrice: "₹16,500", discount: "10%" },
    { id: 10, name: "Laptop", img: "electronics/electronics8.jpg", price: "₹50,000", oldPrice: "₹55,000", discount: "9%" },
  
  
  ],
  BAGS: [
    { id: 5, name: "Leather Bag", img: "bags/bags1.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 6, name: "Backpack", img: "bags/bags2.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
    { id: 7, name: "Leather Bag", img: "bags/bags3.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 8, name: "Backpack", img: "bags/bags4.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
  ],
  FOOTWEAR: [
    { id: 5, name: "Leather Bag", img: "footwear/footwear1.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 6, name: "Backpack", img: "footwear/footwear2.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
    { id: 7, name: "Leather Bag", img: "footwear/footwear3.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 8, name: "Backpack", img: "footwear/footwear4.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
  ],

  BEAUTYPRODUCTS: [
    { id: 5, name: "Leather Bag", img: "beauty/beauty1.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 6, name: "Backpack", img: "beauty/beauty2.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
    { id: 7, name: "Backpack", img: "beauty/beauty3.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
  ],
  GROCERIES: [
    { id: 5, name: "Leather Bag", img: "grocery/grocery5.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 6, name: "Backpack", img: "grocery/grocery2.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
    { id: 7, name: "Leather Bag", img: "grocery/grocery4.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 8, name: "Backpack", img: "grocery/grocery6.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
  ],
   JEWELS: [
    { id: 5, name: "Leather Bag", img: "jewel/jewel1.jpg", price: "₹2,000", oldPrice: "₹2,500", discount: "12%" },
    { id: 6, name: "Backpack", img: "jewel/jewel2.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
    { id: 6, name: "Backpack", img: "jewel/jewel3.jpg", price: "₹1,500", oldPrice: "₹1,800", discount: "7%" },
  ],

  
  
};

const ProductSlider = ({ selectedCategory }) => {
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
    <Expand size={20} className="expand-icon" />
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

