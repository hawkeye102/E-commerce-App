import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from  '@mui/material/Button'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../../utils/api";
import { MyContext } from "../../../App";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";


const Register=()=>{
    const [isLoading,setisLoading] = useState(false)
    const [isShowPassword,setisShowPassword] =useState(false)
    const [Formfields,setFormfields] =useState({
        name:"",
        email:"",
        password :""
    })

    const context =useContext(MyContext)
    const navigate = useNavigate(); 

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
        if(Formfields.name===""){
            context.openAlertBox("error","please enter full name")
            setisLoading(false);
        return;
        }

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
        postData('/api/users/register',Formfields).then((res)=>{


            console.log(res)

            if (res?.success) { 
                console.log("Before Storing Email:", Formfields.email);  // Debugging 
                // Show success alert
                context.openAlertBox("success", "Registration successful!");
                localStorage.setItem("userEmail",  Formfields.email);
                console.log("Stored Email:",  Formfields.email);

                setFormfields({ name: "", email: "", password: "" });

               // Redirect user to Verify OTP page, passing email in query params
        navigate(`/verify?email=${encodeURIComponent(Formfields.email)}`);
            }
            else if (res?.message?.toLowerCase().includes("already")) {  
                //  If API returns "user already exists"
                context.openAlertBox("error", "User already registered!");
            } else {
                // Show error alert when user is already registered
                context.openAlertBox("error", res?.message || "Registration failed! Try again.");
            }
            
        })
        .catch((err) => {
            console.error("Registration failed:", err);
            context.openAlertBox("error", "Network error! Please try again.");
        })
        .finally(() => {
            setisLoading(false);
        });
            
           
        

    }
    
return(
    <section className="section py-10 min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('loginpic/login3.jpg')` }}>
        <div className="container">
            <div className="  card shadow-md w-[450px] m-auto rounded-md ! bg-white py-8 px-10">
                <h2 className="text-[20px] font-[600] text-center ">Register with your new Account</h2>

                <form className="w-full mt-5" onSubmit={handleSubmit}>
                <div className="form-group w-full mb-5 relative">
                  <TextField 
                  type="text"
                  id="name"
                  name="name" 
                  label="Full Name"
                   variant="outlined"
                  className="w-full"
                  value={Formfields.name}
                  disabled={isLoading===true ? true :false}
                  onChange={onChangeInput} />
                  </div>
                  <div className="form-group w-full mb-5 ">
                  <TextField 
                  type="email"
                  id="email" 
                  name="email"
                  label="Email Id"
                   variant="outlined"
                  className="w-full"
                  value={Formfields.email} 
                  disabled={isLoading===true ? true :false}
                  onChange={onChangeInput}/>
                  </div>

                  <div className="form-group w-full mb-5 relative">
                  <TextField 
                  type={isShowPassword===false? "password" :'text'}
                  id="password" 
                  name="password"
                  label="password" 
                  variant="outlined"
                  className="w-full"
                  value={Formfields.password}
                  disabled={isLoading===true ? true :false}
                  onChange={onChangeInput} />
                  
                  <Button className="!absolute top-[8px] right-[5px] z-50 !w-[45px] !h-[45px] !min-w-[35px]
                   !rounded-full !text-black " onClick={()=>setisShowPassword(!isShowPassword)}>
                    {isShowPassword===true ?
                    <IoMdEye className="text-[20px] opacity-75"/>
                    :<IoMdEyeOff className="text-[20px] opacity-75"/>}                    
                   </Button>
                  </div>
                 
                  <div className="flex items-center gap-2">
  <button 
    type="submit" 
    disabled={!valideValue} 
    className={`flex items-center justify-center gap-2 font-[400] !text-center !mt-5 bg-red-400 text-white rounded-lg shadow-lg !w-full !h-[40px] mb-3
      transition-all duration-300 ease-in-out 
      ${valideValue ? "hover:bg-black hover:shadow-xl" : "opacity-70"}`}
  >
    {isLoading && <CircularProgress color="inherit" className="!w-[20px] !h-[20px]" />} 
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