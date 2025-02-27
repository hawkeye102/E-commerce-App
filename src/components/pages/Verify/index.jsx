import React, { useState } from "react";
import OtpBox from "../../Otpbox";

const Verify=()=>{
    const [otp,setOtp]=useState("")
    const handleOtpchange=(value)=>{
   setOtp(value)
    }

    const verifyOtp=(e)=>{
    e.preventDefault();
    alert(otp)
    }

    
    return(
        
        <section className="section py-10 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/loginpic/login1.jpg')` }}>
            <div className="container">
                <div className=" flex flex-col items-center  card shadow-md w-[400px] m-auto rounded-md ! bg-white py-8 px-10">
                    <div className=" text-center flex items-center justify-between ">
                        <img src="/shield/shield.jpg" width="80px"/>
                        
                    </div>

     <form onSubmit={verifyOtp}>
                         <h2 className="text-[20px] font-[600] text-center mt-1 ">Verify Otp</h2>
                    <p className="text-center mb-1.5 ">Otp sent to <span className="text-red-500 font-[500] pl-2">myaccount@gmail.com</span></p>
    <OtpBox length={6} onChange={ handleOtpchange}/>

    <div className="btn flex justify-center w-full">
  <button className=" w-full px-6 py-2 mt-3 bg-red-500 text-white font-semibold 
  rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2
   focus:ring-blue-500 transition-all duration-300">
    Verify OTP
  </button>
  </div>
  </form>


                  
                </div>
            </div>
        </section>
    )
}

export default Verify