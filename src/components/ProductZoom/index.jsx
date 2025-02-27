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




const ProductZoom = () => {
  const [slideIndex,setslideIndex] =useState(0)
  const zoomSliderBig=useRef();
  const zoomSliderSml=useRef();

  const goto =(index)=>{
    
    setslideIndex(index)
    
    zoomSliderSml.current.swiper.slideTo(index)
    zoomSliderBig.current.swiper.slideTo(index)
    
  }
  

  return (
    <div className='flex gap-3 pl-4 !rounded-md'>
      <div className='slider w-[25%] h-[310px] relative '>
        <Swiper
        ref={zoomSliderSml}
        direction={'vertical'}
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper1 h-full' >

          
          <SwiperSlide>
         <div className={`items rounded-md overflow-hidden cursor-pointer group ${
          slideIndex === 0 ? '!opacity-100' : '!opacity-30'
             }`}
         onClick={() => goto(0)}
           >

              <img src={`/ProductD/product2.jpg`}
              className="w-full h-[100px] object-cover transition-all group-hover:scale-120" />
              </div>
          </SwiperSlide>

          <SwiperSlide>
             <div className={`items rounded-md overflow-hidden cursor-pointer group ${
          slideIndex === 1 ? '!opacity-100' : '!opacity-30' }`}
          onClick={() => goto(1)}
           >
              <img src={`/ProductD/products3.jpg`}
              className="w-full h-[100px] object-cover transition-all group-hover:scale-120" />
              </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className={`items rounded-md overflow-hidden cursor-pointer group ${
          slideIndex === 2 ? '!opacity-100' : '!opacity-30' }`}
          onClick={() => goto(2)}
           >
              <img src={`/ProductD/products4.jpg`}
            className="w-full h-[100px] object-cover transition-all group-hover:scale-120" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className={`items rounded-md  overflow-hidden cursor-pointer group ${
          slideIndex === 3 ? '!opacity-100' : '!opacity-30 ' }`
        }
          onClick={() => {

            goto(3)}}
           >
              <img src={`/ProductD/products5.jpg`}
               className="w-full h-[100px] object-cover transition-all group-hover:scale-120" />
             </div>
          </SwiperSlide>
          </Swiper>

      </div>
    <div className=' Zoom-container w-[63%] h-[600px] !rounded-md'>
    <Swiper
       ref={zoomSliderBig}
        slidesPerView={1}
        spaceBetween={0}
        navigation={false}
        >
  
  <SwiperSlide>
    <InnerImageZoom src="/ProductD/product2.jpg" 
    zoomSrc="/ProductD/product2.jpg" 
    alt="product image"
    zoomType="hover" // Options: 'click' or 'hover'
    zoomPreload={true} // Preloads the zoom image
      />
      </SwiperSlide>

      <SwiperSlide>
    <InnerImageZoom src="/ProductD/products3.jpg" 
    zoomSrc="/ProductD/products3.jpg" 
    alt="product image"
    zoomType="hover" // Options: 'click' or 'hover'
    zoomPreload={true} // Preloads the zoom image
      />
      </SwiperSlide>

      <SwiperSlide>
    <InnerImageZoom src="/ProductD/products4.jpg" 
    zoomSrc="/ProductD/products4.jpg" 
    alt="product image"
    zoomType="hover" // Options: 'click' or 'hover'
    zoomPreload={true} // Preloads the zoom image
      />
      </SwiperSlide>

      <SwiperSlide>
    <InnerImageZoom src="/ProductD/products5.jpg" 
    zoomSrc="/ProductD/products5.jpg" 
    alt="product image"
    zoomType="hover" // Options: 'click' or 'hover'
    zoomPreload={true} // Preloads the zoom image
      />
      </SwiperSlide>


      </Swiper>
      </div>

</div>
  );
};

export default ProductZoom;
