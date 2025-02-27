
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const ForgetPassword1 = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);

    return (
        <section className="section py-10 min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('loginpic/login4.jpg')` }}>
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white py-8 px-10">
                    <h2 className="text-[20px] font-[600] text-center">Forget Password</h2>

                    <form className="w-full mt-5">
                        {/* Password Field */}
                        <div className="form-group w-full mb-5 relative">
                            <TextField 
                                type={isShowPassword ? "text" : "password"}  
                                id="password" 
                                label="New password"
                                variant="outlined"
                                name="password"
                                className="w-full" 
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
                                name="password2"
                                className="w-full" 
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
                            <button className="font-[400] text-center mt-5 bg-red-400 text-white rounded-lg shadow-lg w-full h-[40px]
                                hover:bg-black hover:shadow-xl transition-all duration-300 ease-in-out mb-3">
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
