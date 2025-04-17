import React, { useContext, useState,useEffect} from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Form, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { MyContext } from "../../App";
import CircularProgress from '@mui/material/CircularProgress';
import {LuMapPinPlusInside} from "react-icons/lu";

import { editData } from "../../utils/api";

const AccountsSideBar=()=>{
     const [preview, setpreview] = useState([])
     const [uploading, setuploading] = useState(false)
     const context = useContext(MyContext);

     let img_array=[];
     let uniqueArray =[];
     let selectedImages=[]

    useEffect(() => {
  const savedAvatar = localStorage.getItem("userAvatar");
  if (savedAvatar) {
    setpreview([savedAvatar]);
  }
  // If context.res.avatar exists, it would override localStorage
  if (context?.res?.avatar) {
    setpreview([context.res.avatar]);
    
  }
//   if (!context?.res?.avatar) {
//      localStorage.removeItem("userAvatar");
//      setpreview([])
// }
}, [context?.res?.avatar]);

      

     const onChangeFile=async(e,apiEndPoint)=>{
          try {
               setpreview([])
               setuploading(true) 
               const  files = e.target.files

               for(var i=0; i<files.length;i++){
                    if(files[i] &&(
                         files[i].type==="image/jpeg" ||
                         files[i].type==="image/jpg"  ||
                         files[i].type==="image/png"  ||
                         files[i].type==="image/webp"

                    )){
                         const file = files[i];
                         const formdata = new FormData()
                         selectedImages.push(file);
                         formdata.append('avatar',file)

                         editData("/api/users/user-avatar",formdata).then((res)=>{
                              setuploading(false)
                              console.log("Full response:", res); // Check  full response
                              console.log("Avatar URL:", res?.avatar); // Check if avatar exists
                                    
                              if (res?.avatar) {
                                   localStorage.setItem("userAvatar", res.avatar);
                                   setpreview([res.avatar]);
                                    setUserAvatar(res.avatar);
                               } else {
                                   console.error("Avatar URL is missing from the response");
                               }
                              let avatar=[];
                              avatar.push(res?.avatar)
                              setpreview(avatar)
                              console.log(res);
                         })
                          

                    }else{
                         context.openAlertBox("error", "please enter a valid jpg,jpeg or webp files")
                         setuploading(false)

                    }
               }
               console.log(files)
          } catch (error) {
             console.log(error)  
          }
     }
     // Read name and email from localStorage
  const userName = localStorage.getItem('userName') || context.name;
  const userEmail = localStorage.getItem('userEmail') || context.email;
    return(
        <div className="card bg-white shadow-md rounded-md p-5 !sticky top-[10px]">
<div className="w-full p-3 flex-items justify-center flex-col">
 <div className="w-[110px] h-[110px] rounded-full 
overflow-hidden mb-4 relative group ml-3 !flex items-center !justify-center !bg-gray-400">
            {uploading === true ? (
  <CircularProgress color="inherit" />
) : (
  preview?.length !== 0 ?
  preview?.map((map, index) => {
    return (
      <img
        key={index} // Add a key to avoid React warnings
        src={map} // Use map as the image URL
        alt={`Avatar ${index}`} // Add an alt text for accessibility
        className="w-full h-full object-cover"
      />
    );
  }) :
  <img
       
        src={"User/user.png"} // Use map as the image URL
        className="w-full h-full object-cover"
      />
)}
   <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] 
 flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
 <FaCloudUploadAlt className="text-[#fff] !text-[22px]"/>
 <input type="file" 
 className="absolute top-0 left-0 w-full h-full opacity-0"
 accept="image/*"
 onChange={(e)=>{
  onChangeFile(e, "api/users/user-avatar")
 }}
  name="avatar"/>
 </div>
</div>
<h3 className="font-semibold text-lg">{userName}</h3>
   <h6 className="text-sm text-gray-600">{ userEmail }</h6>
     </div>
                     

                     <ul className="list-none myAccountTabs">
                      <li className="w-full">
                      <NavLink to="/my-account"  exact={true} activeClassName="isActive"> 

                        <Button className="flex items-center gap-3 rounded-none w-full 
                        !capitalize !text-black !justify-start !text-left">
                             <FaRegUser className="text-[17px]"/> User Profile</Button>
                             </NavLink>

                             <NavLink to="/address"  exact={true} activeClassName="isActive"> 
                             <Button className="flex items-center gap-3 rounded-none w-full 
                             !capitalize !text-black !justify-start !text-left">
                            <LuMapPinPlusInside className="text-[17px]"/>Address</Button>
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
    )
}

export default AccountsSideBar