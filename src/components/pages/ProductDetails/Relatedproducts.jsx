import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaShoppingCart } from "react-icons/fa";
import "./style.css"; // Import CSS file
import { Star, StarHalf, Star as StarOutline } from "lucide-react";
import { Scale, Heart, Expand } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import './relp.css'
import { MyContext } from "../../../App";


const RelatedProducts = ({ products }) => {
  const context = useContext(MyContext);

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
    <div className="related-products w-full px-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {products.map((product) => {
          const image1 = product.images?.[0];
          const image2 = product.images?.[1];

          return (
            <SwiperSlide key={product._id}>
              <div className="product-card group relative border rounded-md p-2 overflow-hidden">
                
                {/* Discount badge */}
                {product.discount > 0 && (
                  <span className="absolute top-3 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    {Math.round((product.discount / (product.oldPrice || 1)) * 100)}% 
                  </span>
                )}

                {/* Product images (hover only switches image) */}
                <div className="relative aspect-[4/5] overflow-hidden rounded">
                  <img
                    src={image1}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  {image2 && (
                    <img
                      src={image2}
                      alt={`${product.name} hover`}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </div>

                {/* Action Icons */}
               {/* Action Icons */}
<div className="absolute top-4 right-2 flex flex-col space-y-8 opacity-0 group-hover:opacity-100 transition-opacity z-10">
  <button className="bg-white rounded-full p-1 shadow hover:scale-110 transition-transform">
    <Scale size={18} className="text-red-500" />
  </button>
  <button className="bg-white rounded-full p-1 shadow hover:scale-110 transition-transform">
    <Heart size={18} className="text-red-500" />
  </button>
  <button
    className="bg-white rounded-full p-1 shadow hover:scale-110 transition-transform"
    onClick={() => context.setopenProductDetailsModal(true)}
  >
    <Expand size={18} className="text-red-500" />
  </button>
</div>


                {/* Product info */}
                <div className="mt-2 text-sm text-center">
                  <div className="font-semibold truncate">{product.name}</div>
                  <div className="text-gray-500 text-xs">{product.brand}</div>
                  <div className="flex justify-center mt-2">{renderStars(product.rating)}</div>
                  <div className="mt-2">
                    <span className="text-green-500 font-bold">₹{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through ml-5 text-sm">₹{product.oldPrice}</span>
                    )}
                  </div>

                  {/* Add to Cart button (outlined by default, filled on hover) */}
                  <button className="mt-2 w-full border border-red-500 text-red-500 py-1 rounded hover:bg-red-500 hover:text-white transition duration-300 flex justify-center items-center gap-2 text-sm">
                    <ShoppingCart size={14} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
  
  export default RelatedProducts;