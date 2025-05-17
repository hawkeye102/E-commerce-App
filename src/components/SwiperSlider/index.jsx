import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import "./swiperStyles.css"; // Import the external CSS file
import Homecatslider from "../HomeCatSlider";
import { fetchData } from "../../utils/api";
import { useState,useEffect } from "react";

const Slider = () => {
 const [slides, setSlides] = useState([]);

  useEffect(() => {
    const loadSlides = async () => {
      const res = await fetchData("/api/homeslider");
      if (res?.data) {
        const allImages = res.data.flatMap(slide => slide.images || []);
        setSlides(allImages);
      } else {
        console.warn("No slides found or error in response.");
      }
    };
    loadSlides();
  }, []);

 return (
   <div className="w-screen bg-gray-100 py-4 px-2">
  <div className="rounded-xl overflow-hidden shadow-lg bg-white">
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      className="rounded-xl"
    >
      {slides.length > 0 ? (
        slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-xl">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[325px] object-cover transition-transform duration-300 "
              />
            </div>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <div className="w-full h-[400px] flex items-center justify-center text-gray-500">
            No slides available
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  </div>

  <Homecatslider />
</div>

  );
};

export default Slider;