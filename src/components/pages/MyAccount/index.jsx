import  Button  from "@mui/material/Button";
import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import TextField from '@mui/material/TextField';


const Myaccount=()=>{
    return(
        <section className="py-10 w-full">
            <div className="container flex  gap-3 p-5">
                <div className="col1 w-[20%]">
                    <div className="card bg-white shadow-md rounded-md p-5">
                        <div className="w-full p-3 flex-items justify-center flex-col">
                            <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group ml-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFWjv0YYht3Dl8wqfmp-ZdFzYxWwf1G77Q8qKp11OUlsHgC1VZUErZF4&s" className=
                   "w-full h-full object-cover"/>
                           
                           <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] 
                           flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                           <FaCloudUploadAlt className="text-[#fff] !text-[22px]"/>
                           <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0"/>
                            </div>
                            </div>
                           <h3 className="font-[600] ml-3">Rajesh Sharma</h3>
                           <h6 className="text-[14px] font-[600] ">rjSharma@gmail.com</h6>
                        </div>
                     

                     <ul className="list-none myAccountTabs">
                      <li className="w-full">
                      <NavLink to="/my-account"  exact={true} activeClassName="isActive"> 

                        <Button className="flex items-center gap-3 rounded-none w-full 
                        !capitalize !text-black !justify-start !text-left">
                             <FaRegUser className="text-[17px]"/> User Profile</Button>
                             </NavLink>
                         
                             <NavLink to="/my-list"  exact={true} activeClassName="isActive"> 

                             <Button className="flex items-center gap-3 rounded-none w-full 
                        !capitalize !text-black !justify-start !text-left">
                             <IoMdHeart  className="text-[17px]"/> My List</Button>
                             </NavLink>

                             <NavLink to="/my-orders"  exact={true} activeClassName="isActive"> 

                             <Button className="flex items-center gap-3 rounded-none w-full 
                        !capitalize !text-black !justify-start !text-left">
                             <IoBagCheckSharp className="text-[17px]"/> Orders</Button>
                             </NavLink>
                         
                            

                             <Button className="flex items-center gap-3 rounded-none w-full 
                        !capitalize !text-black !justify-start !text-left">
                             <IoIosLogOut className="text-[17px]"/>Logout</Button>
                             
                         
                      </li>
                     </ul>
                    </div>

                </div>
 
    <div className="col2 w-[50%]">
        <div className="card bg-white p-5 shadow-md rounded-md">
            <h2>My Profile</h2>
            <hr/>

        <form className="mt-5">
            <div className="flex items-center gap-5 !mb-3">
                <div className="w-[50%] !mb-2">
                <TextField 
                
                label="Full Name" 
                variant="outlined" 
                size="small"/>
                </div>
 
                <div className="w-[50%] !mb-2">
                <TextField 
                
                label="Email" 
                variant="outlined" 
                size="small"/>
                </div>

                

            </div>
            
            <div className="w-[50%] !mb-2">
                <TextField 
                
                label="Phone Number" 
                variant="outlined" 
                size="small"/>
                </div>

                <br/>
                <div className="flex gap-4">
  
  <Button className="!bg-red-600 !text-white !px-4 !py-2 !rounded-md !transition-all duration-300 hover:!bg-black">
    Save
  </Button>

 
  <Button className="!border !border-blue-600 !text-blue-600 !px-4 !py-2 !rounded-md !transition-all duration-300 hover:text-white">
    Cancel
  </Button>
</div>


   

        </form>
        </div>
    </div>
            </div>
        </section>
       
    )
}

export default Myaccount