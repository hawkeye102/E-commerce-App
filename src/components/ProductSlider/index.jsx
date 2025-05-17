import React, { useContext,useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'
import { ShoppingCart } from "lucide-react";
import { Scale, Heart, Expand } from "lucide-react";
import { MyContext } from "../../App";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { fetchData } from "../../utils/api";




const ProductSlider = ({ selectedCategory }) => {
  const context = useContext(MyContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!selectedCategory) return;
  
    fetchData("/api/product").then((res) => {
      if (res?.success && res.rootProducts?.length > 0) {
        const filtered = res.rootProducts.filter(
          (prod) => prod.catName?.toUpperCase() === selectedCategory
        );
        setProducts(filtered);
      } else {
        setProducts([]); // optional: clear if no matching category
      }
    });
  }, [selectedCategory]);
  
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar key={`full-${i}`} color="gold" />);
    }
  
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="gold" />);
    }
  
    while (stars.length < 5) {
      stars.push(<AiOutlineStar key={`empty-${stars.length}`} color="gold" />);
    }
  
    return stars;
  };
  
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
        {products.map((product) => (
          <SwiperSlide key={product._id} className="product-card">
            <div className="relative product-container">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
  </span>
             <img src={product.images?.[0]} alt={product.name} className="product-img" />
             <div className="product-actions">
                <button><Scale size={20} /></button>
                <button><Heart size={20} /></button>
                <button
  onClick={() => {
    context.setSelectedProductId(product._id); // <-- Set ID in context
    context.setopenProductDetailsModal(true);  // <-- Open modal
  }}
>
  <Expand size={20} />
</button>

              </div>
            </div>
            <div className="text-left w-full">
  <p className="text-sm text-gray-500 mb-1 p-0">{product.brand}</p>
  <p className="text-lg font-medium text-black mb-1 p-0">{product.name}</p>
 
  <p className="text-sm mt-1 p-0">
    <span className="line-through text-gray-400 mr-2">₹{product.oldPrice}</span>
    <span className="font-small discounted-price">₹{product.price}</span>
  </p> 
  <div className="flex gap-1 my-1">{renderStars(product.rating)}</div>
</div>

            <button className="add-to-cart">
              <ShoppingCart size={18} /> ADD TO CART
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default ProductSlider;