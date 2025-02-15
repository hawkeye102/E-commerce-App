import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './style.css'

const Banner = () => {
  return (
    <div className="max-w-[1000px] mx-auto mt-8 shadow-lg rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, ]}
        navigation
        autoplay={ false}
        loop
        slidesPerView={4} // Show 3 slides at once
        spaceBetween={20} // Add spacing between images
        className="rounded-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src="bannerImgs/images.jpg"
            alt="Smartphone Deals"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src="bannerImgs/7.jpg"
            alt="Furniture Sale"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            src="bannerImgs/wellness.jpg"
            alt="Best Audio Deals"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            src="bannerImgs/lewel.png"
            alt="Latest Shoe Collection"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <img
            src="bannerImgs/tag1.png"
            alt="Laptops & Accessories"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <img
            src="bannerImgs/tag2.jpg"
            alt="Home Decor Sale"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
