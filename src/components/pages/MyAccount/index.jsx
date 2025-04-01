import  Button  from "@mui/material/Button";
import React, { useContext, useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import AccountsSideBar from "../../Myaccountsidebar";
import { MyContext } from "../../../App";


const Myaccount=()=>{
    
    const context = useContext(MyContext)
    const history = useNavigate()
     useEffect(()=>{
        const token = localStorage.getItem('accessToken')
        if (token===null){
            history('/')
        }
     },[context?.isLogin])
    return(
        <section className="py-10 w-full">
            <div className="container flex  gap-3 p-5">
                <div className="col1 w-[20%]">
                <AccountsSideBar/>

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