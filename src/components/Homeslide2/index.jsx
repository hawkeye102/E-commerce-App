import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './homeslide.css'
import Button from '@mui/material/Button';
import { MyContext } from '../../App';

import { EffectFade, Navigation, Pagination,Autoplay, } from 'swiper/modules';
import BannerboxV2 from "../Bannerbox";
import { fetchData } from '../../utils/api';
const Baanner2 = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [bannerProducts, setBannerProducts] = useState([]);

 useEffect(() => {
  fetchData('/api/product')
    .then((data) => {
      console.log("Raw fetched products:", data);

      if (data.success && Array.isArray(data.rootProducts)) {
        const displayBanners = data.rootProducts.filter(
          (product) =>
            product.IsDisplaybanner === true &&
            Array.isArray(product.bannerimages) &&
            product.bannerimages.some((img) => typeof img === 'string' && img.trim() !== '')
        );

        console.log("Filtered banner display products:", displayBanners);

        setBannerProducts(displayBanners);
      } else {
        console.warn('No products or invalid data format:', data);
      }
    })
    .catch((err) => {
      console.error('Error fetching products:', err);
      setBannerProducts([]);
    });
}, []);


  return (
    <div className="py-6 ml-10 flex items-center">
      <div className="w-[63%] h-[420px] relative overflow-hidden rounded-lg">
        {bannerProducts.length === 0 ? (
          <div className="text-center text-red-500 font-semibold py-10">
            No banners available to display.
          </div>
        ) : (
          <Swiper
            loop={true}
            spaceBetween={30}
            effect="fade"
            navigation={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {bannerProducts.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full w-full relative">
                  <img
                    src={item.bannerimages?.[0] || item.images?.[0]}
                    className="w-full h-full object-cover rounded-lg"
                    alt={`banner-${index}`}
                  />
                  <div className="info absolute top-0 w-[50%] z-50 p-8 h-full flex items-center flex-col justify-center">
                    <h4 className="text-[16px] font-[500] mb-2 w-full text-left">{item.name}</h4>
                    <h2 className="text-[28px] font-[700] w-full whitespace-pre-line">
                      {item.bannerTitlename}
                    </h2>
                    <h3 className="flex items-center gap-3 text-[16px] font-[500] mb-2 w-full text-left">
                      Starting at only{' '}
                      <span className="text-[35px] font-[600] text-red-500">{item.price}</span>
                    </h3>
                    <div className="w-full">
                      <Button
                        color="secondary"
                        variant="contained"
                        href={`/ProductDetails/${item._id}`}
                        sx={{
                          backgroundColor: '#ff5722',
                          '&:hover': {
                            backgroundColor: 'black',
                          },
                        }}
                      >
                        {item.buttonText || 'Shop Now'}
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="w-[27%] pl-7 h-[420px]">
        <BannerboxV2 className="w-full" />
      </div>
    </div>
  );
};

  
  export default Baanner2;