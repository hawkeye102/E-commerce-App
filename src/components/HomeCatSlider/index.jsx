import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'
import { fetchData } from '../../utils/api';



const Homecatslider =()=>{
   
  const [catData,setCatData] = useState([])

  useEffect(()=>{
    fetchData('/api/category').then((res)=>{
      console.log(res)

      if(res?.success===true){
        setCatData(res.rootCategories);
      }
    })
  },[])
    return (
    <div className="w-full ml-0 mt-4 relative p-4 rounded-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={8}
        navigation={false}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 8 },
        }}
      >
        {catData.map((category) => (
          <SwiperSlide key={category._id}>
            <div className="border p-4 rounded-lg shadow-md text-center bg-white hover:shadow-xl transition-all">
              <div className="bg-white p-4 rounded-full shadow-sm w-24 h-24 mx-auto flex items-center justify-center">
                <img
                  src={category.image || "/placeholder.jpg"}
                  alt={category.name}
                  className="w-16 h-16 transition-transform duration-300 hover:scale-110"
                />
              </div>
              <p className="text-sm font-semibold mt-2">{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Homecatslider;