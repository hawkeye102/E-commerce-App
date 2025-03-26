import React, { useEffect, useState } from "react";
import OtpBox from "../../Otpbox";
import { postData } from "../../../utils/api";

const Verify=()=>{
    const [otp,setOtp]=useState("")
    const [email, setEmail] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

    const handleOtpchange=(value)=>{
   setOtp(value)
    }

    const verifyOtp= async(e)=>{
    e.preventDefault();
    const storedEmail = localStorage.getItem("userEmail");

    if (!storedEmail) {
        alert("No email found! Please try signing up again.");
        return;
    }
    
    alert(otp)
    const res = await postData("/api/users/verify", {
        email: storedEmail,
        otp: otp
    });

    console.log("API Response:", res);

    if (res.success) {
        alert("OTP Verified Successfully!");
        //  Remove email from local storage after successful verification
      localStorage.removeItem("userEmail");

      // Redirect user to login page
      window.location.href = "/login"; 
    } else {
        alert(`Error: ${res.message}`);
    }
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
                   <p className="text-center mb-1.5">
              Otp sent to <span className="text-red-500 font-[500] pl-2">{email || "your email"}</span>
            </p>
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