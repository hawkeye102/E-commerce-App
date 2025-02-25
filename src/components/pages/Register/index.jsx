import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from  '@mui/material/Button'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register=()=>{
    const [isShowPassword,setisShowPassword] =useState(false)
return(
    <section className="section py-10 min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('loginpic/login3.jpg')` }}>
        <div className="container">
            <div className="  card shadow-md w-[450px] m-auto rounded-md ! bg-white py-8 px-10">
                <h2 className="text-[20px] font-[600] text-center ">Register with your new Account</h2>

                <form className="w-full mt-5">
                <div className="form-group w-full mb-5 relative">
                  <TextField 
                  type="text"
                  id="name" 
                  label="Full Name"
                   variant="outlined"
                  className="w-full" />
                  </div>
                  <div className="form-group w-full mb-5 ">
                  <TextField 
                  type="password"
                  id="Email" 
                  label="Email Id"
                   variant="outlined"
                  className="w-full" />
                  </div>

                  <div className="form-group w-full mb-5 relative">
                  <TextField 
                  type={isShowPassword===false? "Password" :'text'}
                  id="Password" 
                  label="Password" 
                  variant="outlined"
                  className="w-full" />
                  
                  <Button className="!absolute top-[8px] right-[5px] z-50 !w-[45px] !h-[45px] !min-w-[35px]
                   !rounded-full !text-black " onClick={()=>setisShowPassword(!isShowPassword)}>
                    {isShowPassword===true ?
                    <IoMdEye className="text-[20px] opacity-75"/>
                    :<IoMdEyeOff className="text-[20px] opacity-75"/>}                    
                   </Button>
                  </div>
                 
                  <div className="flex items-center gap-2">
    <button className=" font-[400] !text-center !mt-5 bg-red-400 text-white  rounded-lg shadow-lg !w-full !h-[40px]
    hover:bg-black hover:shadow-xl transition-all duration-300 ease-in-out  mb-3">
    Register
  </button>
</div>
 
  <p className="text-center">Already have an Account ? <Link className=" text-blue-600 link text-[16px] font-[500]" to="/Login">Login</Link></p>

    <p className="mt-3 text-center font-[500]">Or add your social account</p>  

    <Button className="flex gap-3 !mt-3 w-full !bg-gray-300 !font-[500] !btn-lg !text-black">
        <FcGoogle className="text-[20px]"/>Login with google</Button>
                </form>
            </div>
        </div>
    </section>
)
}

export default Register;