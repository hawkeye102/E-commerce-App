import React from "react";
import './style.css'

const BannerboxV2 = () => {
    return (
      <div className="bannerbox-container  ">
        <div className="bannerbox-item group relative">
          <img src="banV2/ban1.jpg" 
          className="bannerbox-img transition-transform duration-300 ease-in-out group-hover:scale-105"
     />
       
        <div className="w-full   absolute  flex-col  flex items-start pl-25">
        <h3 className="w-full text-[18px] font-[600] ml-15 mt-5">Buy Men <br />
        <span className="text-red-500 pr-1">Footwears</span> 
         with <br /> very low price <br /> 
         <span className="text-[30px] font-[600] text-cyan-500 mt-2">$37</span>
         </h3>
         <a href=" " 
         className="text-[15px]  ml-15 font-[600] underline hover:text-red-400 flex  mt-3">Shop Now</a>
        </div>
        
        
        </div>
  
        <div className="bannerbox-item relative overflow-hidden group">
          <img src="banV2/ban2.jpg" 
          className="bannerbox-img transition-transform duration-300 ease-in-out group-hover:scale-105" />
          
          <div className="w-full   absolute  flex-col  flex items-start pl-2">
          <h3 className="w-full text-[18px] font-[600]  mt-5">Buy Men <br />
          <span className="text-red-500  pr-1">Bags</span>  
          with <br /> very low price <br /> 
          <span className="text-[30px] font-[600] text-cyan-500 mt-2">$23</span>
          </h3>
           <a href=" " 
           className="text-[15px] font-[600] underline hover:text-red-400 flex  mt-3">Shop Now</a>
           </div>
        
        </div>
      </div>
    );
  };
  
  export default BannerboxV2;
  