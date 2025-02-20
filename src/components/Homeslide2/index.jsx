import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'
import Button from '@mui/material/Button';

import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';

const Baanner2 = () => {
    return (
      <div className="py-6  ml-10">
        <div className="w-[63%] h-[415px] relative overflow-hidden rounded-lg"> 
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            autoplay={true}
            pagination={{ clickable: true }}
            modules={[EffectFade, Navigation, Pagination,Autoplay ]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="h-full w-full relative">
                <img
                  src="banner2/banner2.jpg"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="info absolute top-0  w-[50%] z-50 p-8 h-[100%]
                  flex items-center flex-col justify-center">
                    <h4 className="text-[16px] font-[500] mb-2 w-full text-left">big saving days sale </h4>
                    <h2 className="text-[28px] font-[700] w-full ">Men Round Toe <br />
                     Lace Up <br /> Lightweight PU <br /> Sneakers</h2>

                     <h3 className=" flex items-center gap-3 text-[16px] font-[500] mb-2 w-full text-left"> Starting at only 
                         <span className=" text-[35px] font-[600] text-red-500">$37.00</span>
                     </h3>
                       <div className="w-full">
                          <Button color="secondary" variant ="contained"
                         sx={{
                              backgroundColor: '#ff5722', // Normal background
                              '&:hover': {
                               backgroundColor: 'black', // Background on hover
                            },
                          }}
                          >Shop Now</Button>
                       </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <img
                  src="banner2/banne3.jpg"
                  className="w-full h-full object-cover rounded-lg"
                /> <div className="info absolute top-0  w-[50%] z-50 p-8 h-[100%]
                flex items-center flex-col justify-center">
                  <h4 className="text-[16px] font-[500] mb-2 w-full text-left">big saving days sale </h4>
                  <h2 className="text-[28px] font-[700] w-full ">Apple iphone 15 <br />
                   256GB Pink </h2>

                   <h3 className=" flex items-center gap-3 text-[16px] font-[500] mb-2 w-full text-left"> Starting at only 
                       <span className=" text-[35px] font-[600] text-red-500">$372.00</span>
                   </h3>
                     <div className="w-full">
                        <Button color="secondary" variant ="contained"
                       sx={{
                            backgroundColor: '#ff5722', // Normal background
                            '&:hover': {
                             backgroundColor: 'black', // Background on hover
                          },
                        }}
                        >Shop Now</Button>
                     </div>
              </div>
              </div>
            </SwiperSlide>
            
            
          </Swiper>
        </div>
      </div>
    );
  };
  
  export default Baanner2;