
import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MyContext } from "../../../App";
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from "../../../utils/api";
import { Email } from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword1 = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);
    const [isLoading,setisLoading] = useState(false)

    
        const [Formfields,setFormfields] =useState({
           
            email:localStorage.getItem("userEmail"),
           newpassword:'',
           confirmpassword:''
        })
        console.log('mail is found',localStorage.getItem("userEmail"))
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
    
        const handleSubmit=(e)=>{
        
                e.preventDefault();
                setisLoading(true);
               
        
                if(Formfields.newpassword===""){
                    setisLoading(false);
                    context.openAlertBox("error","please enter  password")
                    
                return;
                }
        
                if(Formfields.confirmpassword===""){
                    setisLoading(false)
                    context.openAlertBox("error","please enter confirm password")
                    
                    return;
                }
                if(Formfields.newpassword!==Formfields.confirmpassword){
                    setisLoading(false)
                    context.openAlertBox("error","password doesn't match")
                   
                    return;
                }
                
                postData("/api/users/reset-password",Formfields).then((res)=>{
                    console.log(res)

                    history('/login')
                })
            }

    return (
        <section className="section py-10 min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('loginpic/login4.jpg')` }}>
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white py-8 px-10">
                    <h2 className="text-[20px] font-[600] text-center">Forget Password</h2>

                    <form className="w-full mt-5" onSubmit={ handleSubmit}>
                        {/* Password Field */}
                        <div className="form-group w-full mb-5 relative">
                            <TextField 
                                type={isShowPassword ? "text" : "password"}  
                                id="password" 
                                label="New password"
                                variant="outlined"
                                name="newpassword"
                                value={Formfields.newpassword}
                                disabled={isLoading===true ? true :false}
                                className="w-full"
                                onChange={onChangeInput} 
                            />
                            <Button 
                                type="button"  
                                className="!absolute top-[8px] right-[5px] z-50 !w-[45px] !h-[45px] !min-w-[35px]
                                !rounded-full !text-black"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                                {isShowPassword ? <IoMdEye className="text-[20px] opacity-75"/> : <IoMdEyeOff className="text-[20px] opacity-75"/>}                    
                            </Button>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="form-group w-full mb-5 relative">
                            <TextField 
                                type={isShowPassword2 ? "text" : "password"}  
                                id="confirm_password" 
                                label="Confirm Password" 
                                variant="outlined"
                                name="confirmpassword"
                                value={Formfields.confirmpassword}
                                disabled={isLoading===true ? true :false}
                                className="w-full" 
                                onChange={onChangeInput}
                            />
                            <Button 
                                type="button"  
                                className="!absolute top-[8px] right-[5px] z-50 !w-[45px] !h-[45px] !min-w-[35px]
                                !rounded-full !text-black"
                                onClick={() => setIsShowPassword2(!isShowPassword2)}
                            >
                                {isShowPassword2 ? <IoMdEye className="text-[20px] opacity-75"/> : <IoMdEyeOff className="text-[20px] opacity-75"/>}                    
                            </Button>
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center gap-2">
                            <button 
                                  type="submit" 
                                // disabled={!valideValue} 
                                  className={`flex items-center justify-center gap-2 font-[400] !text-center !mt-5 bg-red-400 text-white rounded-lg shadow-lg !w-full !h-[40px] mb-3
                                    transition-all duration-300 ease-in-out 
                                   "hover:bg-black hover:shadow-xl"}`}
                                >
                                  {isLoading && <CircularProgress color="inherit" className="!w-[20px] !h-[20px]" />} 
                                  Change Password
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ForgetPassword1;
