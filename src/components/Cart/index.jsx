
import React ,{useState}from "react";

import Button from '@mui/material/Button';
import { IoBagCheck } from "react-icons/io5";


import Rating from "@mui/material/Rating";
import CartItems from "./Cartitems";

const Cart=()=>{
    
return (
    <section className="section py-5 bg-gray-300 ">
        <div className="container flex w-[80%] max-w-[80%] pl-25 gap-5">
            <div className="leff-part w-[70%] ">
                

                <div className="shadow-md rounded-md p-5 mt-2 bg-white">
                <div className="px-3 py-2 mb-2 border-b border-black">
                    <h2 className="font-bold">Your Cart</h2>
                    <p className="mt-0 mb-2">There are <span className="font-bold text-red-500">2</span> products in your cart</p>
                </div>
           <CartItems size="s" qty={1}/>
           <CartItems size="s" qty={1}/>
           <CartItems size="s" qty={1}/>
           <CartItems size="s" qty={1}/>
           <CartItems size="s" qty={1}/>
                </div>

            </div>

            <div className="rightpart w-[30%]">
              <div className="shadow-md rounded-md p-5 mt-2 bg-white">
                <h3 className="p-3 font-[500]">Cart Totals</h3>
                <hr/>

                <p className="flex items-center justify-between px-3 py-3">
                     <span className="">SubTotal</span>
                    <span className="text-red-500">$1,233,456</span>
                </p>

                <p className="flex items-center justify-between px-3 py-3">
                   <span className="">Shipping</span>
                    <span className="font-[500]">Free</span>
                </p>

                <p className="flex items-center justify-between px-3 py-3">
                   <span className="">Estimate for </span>
                    <span className="font-[500]">United States</span>
                </p>

                <p className="flex items-center justify-between px-3 py-3">
                     <span className="">Total</span>
                    <span className="text-red-500">$1,233,456</span>
                </p>
<br/>
                < Button className="checkout-btn flex gap-2 w-full"
                        variant="contained"
                         color="primary"
                         sx={{
                            backgroundColor: '#f44336',   
                            '&:hover': {
                              backgroundColor: '#000000', 
                            },
                            color: 'white',
                            fontWeight: 'bold',
                           
                            borderRadius: '10px',
                            transition: 'all 0.3s ease',
                          }}>< IoBagCheck className="text-[20px]"/>
                Checkout
                </Button>
                </div>
             </div>

        </div>
    </section>
   
)
}

export default  Cart