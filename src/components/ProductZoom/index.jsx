import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // ✅ Correctly import Navigation
import 'swiper/css';
import 'swiper/css/navigation';
import './product.css';
import { useEffect } from 'react';




const ProductZoom = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current?.swiper?.slideTo(index);
    zoomSliderBig.current?.swiper?.slideTo(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="flex gap-3 pl-4 !rounded-md">
      {/* Thumbnail slider */}
      <div className="slider w-[25%] h-[310px] relative">
        <Swiper
          ref={zoomSliderSml}
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper1 h-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`items rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === idx ? "!opacity-100" : "!opacity-30"
                }`}
                onClick={() => goto(idx)}
              >
                <img
                  src={img}
                  alt={`thumb-${idx}`}
                  className="w-full h-[100px] object-cover transition-all group-hover:scale-120"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Zoom slider */}
      <div className="Zoom-container w-[63%] h-[600px] !rounded-md">
        <Swiper ref={zoomSliderBig} slidesPerView={1} spaceBetween={0}>
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <InnerImageZoom
                src={img}
                zoomSrc={img}
                alt={`product-zoom-${idx}`}
                zoomType="hover"
                zoomPreload={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;

