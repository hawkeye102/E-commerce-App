import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'


const categories = [ // images for the catslider
    { image: "/catSliderImages/fashion.png", label: "Fashion" },
    { image: "/catSliderImages/electronics.png", label: "Electronics" },
    { image: "/catSliderImages/bag.png", label: "Bags" },
    { image: "/catSliderImages/foot.png", label: "Footwear" },
    { image: "/catSliderImages/groceries.png", label: "Groceries" },
    { image: "/catSliderImages/beauty.png", label: "Beauty" },
    { image: "/catSliderImages/well.png", label: "Wellness" },
    { image: "/catSliderImages/jewel.png", label: "Jewellery" },
  ];
const Homecatslider =()=>{
   
   
    return (
        <div className="w-full ml-0 mt-4 relative p-4 rounded-lg">

          <Swiper
            modules={[]}
            spaceBetween={10}
            slidesPerView={8} // Show 8 items at a time
            navigation ={false}
            loop={true} // Infinite scroll
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 8}, // Show 8 items on large screens
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="border p-4 rounded-lg shadow-md text-center bg-white hover:shadow-xl transition-all">
                <div className="bg-white p-4 rounded-full shadow-sm w-24 h-24 mx-auto flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.label}
                   className="w-16 h-16 transition-transform duration-300 hover:scale-110"
                  /></div>
                  <p className="text-sm font-semibold">{category.label}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };
    
    
export default Homecatslider