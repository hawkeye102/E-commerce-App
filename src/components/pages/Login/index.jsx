import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from  '@mui/material/Button'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Email } from "@mui/icons-material";
import { MyContext } from "../../../App";


const Login=()=>{
    const [isShowPassword,setisShowPassword] =useState(false)

    const [formfields,setformfields] =useState({
        email:'',
        password:''
    })
    

    const context=useContext(MyContext)
    const history=useNavigate()

    const forgetPassword=(params)=> {
        
       
        history('/verify')
    context.openAlertBox("success", "otp send")
    }

return(
    <section className="section py-10 min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('loginpic/login4.jpg')` }}>
        <div className="container">
            <div className="  card shadow-md w-[400px] m-auto rounded-md ! bg-white py-8 px-10">
                <h2 className="text-[20px] font-[600] text-center ">Login to your Account</h2>

                <form className="w-full mt-5">
                  <div className="form-group w-full mb-5 relative">
                  <TextField 
                  
                  type="email"
                  id="Email" 
                  label="Email Id"
                   variant="outlined"
                   name="email"
                  className="w-full" />
                  </div>

                  <div className="form-group w-full mb-5 relative">
                  <TextField 
                  type={isShowPassword===false? "Password" :'text'}
                  id="Password" 
                  label="Password" 
                  variant="outlined"
                  name="password"
                  className="w-full" />
                  
                  <Button type="submit" className="!absolute top-[8px] right-[5px] z-50 !w-[45px] !h-[45px] !min-w-[35px]
                   !rounded-full !text-black " onClick={()=>setisShowPassword(!isShowPassword)}>
                    {isShowPassword===true ?
                    <IoMdEye className="text-[20px] opacity-75"/>
                    :<IoMdEyeOff className="text-[20px] opacity-75"/>}                    
                   </Button>
                  </div>
                  <a className="link font-[500] hover:text-blue-600 transition-colors duration-200  
                  cursor-pointer" onClick={forgetPassword}>Forget Password?</a>
                
                  <div className="flex items-center gap-2">
    <button className=" font-[400] !text-center !mt-5 bg-red-400 text-white  rounded-lg shadow-lg !w-full !h-[40px]
    hover:bg-black hover:shadow-xl transition-all duration-300 ease-in-out  mb-3">
    Login
  </button>
</div>
 
  <p className="text-center">Not Registered? <Link className=" text-blue-600 link text-[16px] font-[500]" to="/Register">Sign Up</Link></p>

    <p className="mt-3 text-center font-[500]">Or add your social account</p>  

    <Button className="flex gap-3 !mt-3 w-full !bg-gray-300 !font-[500] !btn-lg !text-black">
        <FcGoogle className="text-[20px]"/>Login with google</Button>
                </form>
            </div>
        </div>
    </section>
)
}

export default Login;