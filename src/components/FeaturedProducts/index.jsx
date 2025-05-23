import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaShoppingCart } from "react-icons/fa";
import "./style.css"; // Import CSS file
import { Star, StarHalf, Star as StarOutline } from "lucide-react";
import { Scale, Heart, Expand } from "lucide-react";

const products = [
  
  {
    id: 2,
    name: "LIVE FASHION Black Women PU Bag",
    img: "hover/hov9.jpg",
    hoverImg: "hover/hov9back.jpg",
    price: "₹1,450.00",
    oldPrice: "₹1,850.00",
    discount: "15%",
     rating:"4.3"
  },
  {
    id: 3,
    name: "Men Round Toe Lace-Up Sandals",
    img: "hover/hov5.jpg",
    hoverImg: "hover/hov5back.jpg",
    price: "₹450.00",
    oldPrice: "₹250.00",
    discount: "8%",
     rating:"4.3"
  },
  {
    id: 4,
    name: "FLORES Stylish Fashion Backpack",
    img: "hover/hov2.jpg",
    hoverImg: "hover/hov2back.jpg",
    price: "₹1,400.00",
    oldPrice: "₹1,550.00",
    discount: "10%",
     rating:"4.3"
  },
  {
    id: 5,
    name: "Apple iPhone 15 256GB Black",
    img: "hover/hov11.jpg",
    hoverImg: "hover/hov11back.jpg",
    price: "₹35,000.00",
    oldPrice: "₹45,000.00",
    discount: "10%",
     rating:"4.3"
  },
  {
    id: 6,
    name: "ZAALQA Girls Black Handbag",
    img: "hover/hov10.jpg",
    hoverImg: "hover/hov10back.jpg",
    price: "₹100.00",
    oldPrice: "₹750.00",
    discount: "10%",
     rating:"4.3"
  },
  {
    id: 7,
    name: "ZAALQA Girls Black Handbag",
    img: "hover/hov12.jpg",
    hoverImg: "hover/hov12back.jpg",
    price: "₹100.00",
    oldPrice: "₹750.00",
    discount: "10%",
     rating:"4.3"
  },
  {
    id: 8,
    name: "ZAALQA Girls Black Handbag",
    img: "hover/hov8.jpg",
    hoverImg: "hover/hov8back.jpg",
    price: "₹100.00",
    oldPrice: "₹750.00",
    discount: "10%",
     rating:"5",
  },
  {
    id: 9,
    name: "ZAALQA Girls Black Handbag",
    img: "hover/hov3.jpg",
    hoverImg: "hover/hov3back.jpg",
    price: "₹100.00",
    oldPrice: "₹750.00",
    discount: "10%",
    rating:"4.3",
  },
];

const FeaturedProducts = () => {
    // Function to render stars based on rating
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
          stars.push(<Star key={i} className="text-yellow-500 w-4 h-4" />);
        } else if (i - 0.5 === rating) {
          stars.push(<StarHalf key={i} className="text-yellow-500 w-4 h-4" />);
        } else {
          stars.push(<StarOutline key={i} className="text-gray-300 w-4 h-4" />);
        }
      }
      return stars;
    };
  
    return (
      <div className="featured-products ">
        <h2>Featured Products</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={6}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6},
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                <span className="discount-badge">{product.discount}</span>
                <div className="product-image-container">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="product-image default-img"
                  />
                  <img
                    src={product.hoverImg}
                    alt={product.name}
                    className="product-image hover-img"
                  />
                </div>
                            {/* Icons (Appear on Hover) */}
              <div className="product-action1">
  <button>
    <Scale size={12} className="scale-icon" />
  </button>
  <button>
    <Heart size={12} className="heart-icon" />
  </button>
  <button>
    <Expand size={12} className="expand-icon" />
  </button>
</div>
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <p className="product-prices">
                    <span className="old-price">{product.oldPrice}</span>
                    <span className="new-price">{product.price}</span>
                  </p>
                  {/* Star Ratings */}
                  <div className="flex items-center mt-1">{renderStars(product.rating)}</div>
  
                  <button className="add-to-cart">
                    <FaShoppingCart className="cart-icon" />
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default FeaturedProducts;