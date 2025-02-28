
import React ,{useState}from "react";

import Button from '@mui/material/Button';
import { IoBagCheck } from "react-icons/io5";
import AccountsSideBar from "../../Myaccountsidebar";

import Rating from "@mui/material/Rating";
import MyListItems from "./mylist";
import TextField from '@mui/material/TextField';

const MyList=()=>{
    
return (
    <section className="py-10 w-full">
    <div className="container flex  gap-3 p-5">
        <div className="col1 w-[20%]">
        <AccountsSideBar/>

        </div>

        <div className="leff-part w-[70%]  m-auto">
                

                <div className="shadow-md rounded-md p-5 mt-2 bg-white">
                <div className="px-3 py-2 mb-2 border-b border-black">
                    <h2 className="font-bold">My List</h2>
                    <p className="mt-0 mb-2">There are <span className="font-bold text-red-500">2</span> products in your My List</p>
                </div>
           < MyListItems />
           < MyListItems />
           < MyListItems />
           < MyListItems />
           < MyListItems />
                </div>

            </div>

</div>
   
</section>
 
)
}

export default MyList