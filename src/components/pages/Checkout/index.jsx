import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { IoBagCheckOutline } from "react-icons/io5";

const Checkout=()=>{
    return(
        <section className="py-10 bg-gray-100">
            <div className="flex  gap-5">
                <div className=" pl-10 leftcol w-[70%]">
                    <div className="   bg-white shadwo-md rounded-md w-full p-3">
                        <h1 className="text-[16px] font-[500]">The Billings</h1>

                        <form className="w-full mt-5">
                            <div className="flex items-center gap-3">
                                <div className="w-[50%] ">
                                <TextField className="w-full  " label="Full Name" variant="outlined" 
                                size="small"/>
                               
                                </div>

                                <div className="w-[50%] ">
                                <TextField 
                                className="w-full "
                                type="email"
                                 label="E-mail"
                                  variant="outlined" 
                                  size="small"/>
                               
                                </div>

                                

                                

                            </div>
                            <h1 className="text-[14px] font-[500] mt-3">Streets</h1>
                            <div className="w-[100%] mt-3">
                                <TextField 
                                className="w-full "
                               
                                 label="House & Street Name"
                                  variant="outlined" 
                                  size="small"/>
                                  </div>

                                  <div className="w-[100%] mt-3">
                                <TextField 
                                className="w-full "
                               
                                 label="Apartment, suite, unit (optional)"
                                  variant="outlined" 
                                  size="small"/>
                                  </div>

                                  <div className="flex items-center gap-3">  
                                  <div className="w-[50%] mt-3">
                                <TextField 
                                className="w-full "
                               
                                 label="Town/City"
                                  variant="outlined" 
                                  size="small"/>
                                  </div>

                                  <div className="w-[50%] mt-3">
                                <TextField 
                                className="w-full "
                               
                                 label="State/Country"
                                  variant="outlined" 
                                  size="small"/>
                                  </div>
                                  </div>

                                  <h1 className="text-[14px] font-[500] mt-3">Postals/Zip*</h1>
                                  <div className="w-[100%] mt-3">
                                <TextField 
                                className="w-full "
                               
                                 label="Zip Code*"
                                  variant="outlined" 
                                  size="small"/>
                                  </div>

                                  <div className="flex items-center gap-3">  
                                  <div className="w-[50%] mt-3">
                                <TextField 
                                className="w-full "
                               
                                 label="Phone No:"
                                  variant="outlined" 
                                  size="small"/>
                                  </div>

                                  <div className="w-[50%] mt-3">
                                <TextField 
                                className="w-full "
                               
                                 label="Email Address"
                                  variant="outlined" 
                                  size="small"
                                  />
                                  </div>
                                  </div>
                        </form>
                    </div>
                </div>

                <div className="rightcol w-[30%]">
                    <div className="bg-white gap-3 rounded-md shadow-md p-5 mr-3 "> 
                        <h2 className= "text-[16px] font-[500] mb-3">Your Order</h2> 

                        <div className="flex items-center justify-between py-2 border-t border-gray-500  border-b">
                            <span className="text-[14px] font-[600]">Product</span>
                            <span className="text-[14px] font-[600]">SubTotal</span>
                        </div>

                        <div className="scroll max-h-[200px] overflow-y-scroll overflow-x-hidden p-2 
                            ! scrollbar-thin !scrollbar-thumb-red-500 mb-5">
                        <div className="flex items-center gap-3">
                            <div className="mt-3 rounded-md group">
                                <img src="/beauty/beauty1.jpg" className="w-[50px] h-[50px] object-cover
                                transition-all group-hover:scale-105"/>

                                

                            </div>
                            <div className="flex flex-col flex-1">
                           <h4 className="text-[14px] font-[500]">A versatile makeup kit</h4>
                             <span className="text-[14px]">Qty: 1</span>
                        </div>

                            <span className=" text-[14px] font-[500] text-red-500">$134.00</span>
                        </div>

                        
                        <div className="flex items-center gap-3">
                            <div className="mt-3 rounded-md group">
                                <img src="/beauty/beauty1.jpg" className="w-[50px] h-[50px] object-cover
                                transition-all group-hover:scale-105"/>

                                

                            </div>
                            <div className="flex flex-col flex-1">
                           <h4 className="text-[14px] font-[500]">A versatile makeup kit</h4>
                             <span className="text-[14px]">Qty: 1</span>
                        </div>

                            <span className=" text-[14px] font-[500] text-red-500">$134.00</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="mt-3 rounded-md group">
                                <img src="/beauty/beauty1.jpg" className="w-[50px] h-[50px] object-cover
                                transition-all group-hover:scale-105"/>

                                

                            </div>
                            <div className="flex flex-col flex-1">
                           <h4 className="text-[14px] font-[500]">A versatile makeup kit</h4>
                             <span className="text-[14px]">Qty: 1</span>
                        </div>

                            <span className=" text-[14px] font-[500] text-red-500">$134.00</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="mt-3 rounded-md group">
                                <img src="/beauty/beauty1.jpg" className="w-[50px] h-[50px] object-cover
                                transition-all group-hover:scale-105"/>

                                

                            </div>
                            <div className="flex flex-col flex-1">
                           <h4 className="text-[14px] font-[500]">A versatile makeup kit</h4>
                             <span className="text-[14px]">Qty: 1</span>
                        </div>

                            <span className=" text-[14px] font-[500] text-red-500">$134.00</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="mt-3 rounded-md group">
                                <img src="/beauty/beauty1.jpg" className="w-[50px] h-[50px] object-cover
                                transition-all group-hover:scale-105"/>

                                

                            </div>
                            <div className="flex flex-col flex-1">
                           <h4 className="text-[14px] font-[500]">A versatile makeup kit</h4>
                             <span className="text-[14px]">Qty: 1</span>
                        </div>

                            <span className=" text-[14px] font-[500] text-red-500">$134.00</span>
                        </div>

                        </div>

                        <Button
      variant="contained"
      color="primary"
      startIcon={<IoBagCheckOutline className="!text-[25px]"/>}
      className= " w-full text-center !bg-red-500 !text-white !py-2 !px-5 !rounded-md hover:!bg-black"
    >
      Checkout
    </Button>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout