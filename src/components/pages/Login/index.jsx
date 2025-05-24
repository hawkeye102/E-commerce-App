import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from  '@mui/material/Button'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../../utils/api";
import { MyContext } from "../../../App";
import CircularProgress from '@mui/material/CircularProgress';


const Login=()=>{
    const [isShowPassword,setisShowPassword] =useState(false)
    const [isLoading,setisLoading] = useState(false)

    const [Formfields,setFormfields] =useState({
        email:'',
        password:''
       
    })
    

    const context=useContext(MyContext)
    const history=useNavigate()

    const onChangeInput=(e)=>{
        const {name,value} = e.target;
        setFormfields(()=>{
            return{ 
                ...Formfields,
            [name]:value
        }
           
        })
        
    }
    const valideValue = Object.values(Formfields).every(el=>el);// this ensures untill the fields are empty u cant register

    const handleSubmit=(e)=>{
    
            e.preventDefault();
            setisLoading(true);
           
    
            if(Formfields.email===""){
                context.openAlertBox("error","please enter  email id")
                setisLoading(false);
            return;
            }
    
            if(Formfields.password===""){
                context.openAlertBox("error","please enter password")
                setisLoading(false);
                return;
            }
            postData('/api/users/login',Formfields).then((res)=>{
    
    
                console.log(res)
    
                
                if (res?.success) { 

                    localStorage.setItem("userId",res?._id); 
                    
                    // Show success alert
                    context.openAlertBox("success", "login successful!");
                    // Store user data in localStorage
            localStorage.setItem("accessToken", res?.accessToken);
            localStorage.setItem("refreshToken", res?.refreshToken);
            localStorage.setItem("userName", res?.name);
            localStorage.setItem("userEmail", res?.email);
            localStorage.setItem("userMobile", res?.mobile);  
            localStorage.setItem("userAvatar", res?.avatar);
                    
            context.setUserData({
  _id: res._id,
  name: res.name,
  email: res.email,
  mobile: res.mobile,
  avatar: res.avatar,
});


            // Verify stored values
            console.log("Stored mobile:", localStorage.getItem("usermobile"));
            console.log("Stored avatar:", localStorage.getItem("useravatar"));
      console.log("Stored Name:", localStorage.getItem("userName"));
      console.log("Stored Email:", localStorage.getItem("userEmail"));
      console.log("Stored AccessToken:", localStorage.getItem("accessToken"));
      console.log("Stored Id:", localStorage.getItem("userId")); 

    
                    setFormfields({ email: "", password: "" });


                   //  Check if tokens exist before storing
      if (res?.accessToken && res?.refreshToken) {
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        console.log("Tokens stored successfully!");
      } else {
        console.error("Tokens missing in API response!");
      }

      context.setIsLogin(true)
    
                   // Redirect user to home page
                   setTimeout(() => {
                    history('/');  // Redirect to Home Page
                   
                }, 500);
                }
                else if (res?.message?.toLowerCase().includes("already")) {  
                    //  If API returns "user already exists"
                    context.openAlertBox("error", "User already registered!");
                } else {
                    // Show error alert when user is already registered
                    context.openAlertBox("error", res?.message || "loginfailed! Try again.");
                }
                
            })
            .catch((err) => {
                console.error("login failed:", err);
                context.openAlertBox("error", "Network error! Please try again.");
            })
            .finally(() => {
                setisLoading(false);
            });
                
               
            
    
        }

    const forgetPassword=()=> {
        if(Formfields.email===""){
            context.openAlertBox("error","please enter  email id")
         return false;
        }

        //calling the post data api
        postData('/api/users/forgot-password',{email:Formfields.email})
        .then((res)=>{
            console.log("forgot password api response",res);

            if (res?.message?.toLowerCase().includes("otp sent")) {  
                context.openAlertBox("success", "OTP sent to your email!");
                localStorage.setItem("userEmail", Formfields.email);
                console.log("Stored User Email:", Formfields.email);
                
                // a flag to check if it is in forgot password or not 
                localStorage.setItem("forgotPasswordFlow", "true"); 
               
                 setTimeout(()=>{
                    history("/verify");
                 },[300])
                    
               
            } else {
                context.openAlertBox("error", res?.message || "Failed to send OTP. Try again!");
            }
        
         
        }).catch((err)=>{
            console.log("Error sending forget request")
            context.openAlertBox("error", "Network error  ! please try again") 


        })
       
       
        
    
    }

return(
    <section className="section py-10 min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('loginpic/login4.jpg')` }}>
        <div className="container">
            <div className="  card shadow-md w-[400px] m-auto rounded-md ! bg-white py-8 px-10">
                <h2 className="text-[20px] font-[600] text-center ">Login to your Account</h2>

                <form className="w-full mt-5" onSubmit={handleSubmit}>
                  <div className="form-group w-full mb-5 relative">
                  <TextField 
                  
                  type="email"
                  id="email" 
                  label="email Id"
                   variant="outlined"
                   name="email"
                   value={Formfields.email}
                   disabled={isLoading===true ? true :false}
                   onChange={onChangeInput}
                  className="w-full" 
                  />
                  </div>

                  <div className="form-group w-full mb-5 relative">
                  <TextField 
                  type={isShowPassword===false? "password" :'text'}
                  id="password" 
                  label="password" 
                  variant="outlined"
                  name="password"
                  value={Formfields.password}
                  disabled={isLoading===true ? true :false}
                  onChange={onChangeInput}
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
   <button 
       type="submit" 
       disabled={!valideValue} 
       className={`flex items-center justify-center gap-2 font-[400] !text-center !mt-5 bg-red-400 text-white rounded-lg shadow-lg !w-full !h-[40px] mb-3
         transition-all duration-300 ease-in-out 
         ${valideValue ? "hover:bg-black hover:shadow-xl" : "opacity-70"}`}
     >
       {isLoading && <CircularProgress color="inherit" className="!w-[20px] !h-[20px]" />} 
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