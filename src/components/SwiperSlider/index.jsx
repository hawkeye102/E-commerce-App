import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import "./swiperStyles.css"; // Import the external CSS file

const Slider = () => {
  const slides = [
    "/images/image five.jpg",
    "/images/image one.jpg",
    "/images/image two .jpg",
    "/images/imagetwo.jpg",
    
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-4 relative bg-gray-100 p-4 rounded-lg">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0} 
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }} // Enable Pagination
        className="rounded-lg shadow-lg overflow-hidden"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;