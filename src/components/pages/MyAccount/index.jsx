import  Button  from "@mui/material/Button";
import React, { useContext, useEffect,useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import AccountsSideBar from "../../Myaccountsidebar";
import { MyContext } from "../../../App";
import { UpdateData } from "../../../utils/api";
import CircularProgress from '@mui/material/CircularProgress';



const Myaccount=()=>{
    
    const context = useContext(MyContext)
    const history = useNavigate()
    const [isLoading,setisLoading] = useState(false)

    
    const [Formfields,setFormfields] =useState({
        name:localStorage.getItem('userName'),
        email:localStorage.getItem('userEmail'),
         mobile: localStorage.getItem('userMobile') || ''
    })
     useEffect(()=>{
        const token = localStorage.getItem('accessToken')
        if (token===null){
            history('/')
        }
 },[context?.isLogin])

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
    
     const handleSubmit = (e) => {
        e.preventDefault();
        setisLoading(true);

        if (Formfields.mobile === "") {
            context.openAlertBox("error", "Please enter a phone number.");
            setisLoading(false);
            return;
        }

        // Only update mobile number in DB
        UpdateData("/api/users/profile", { mobile: Formfields.mobile })
            .then((res) => {
                if (res?.success) {
                    context.openAlertBox("success", "Profile updated successfully!");
                    localStorage.setItem('userMobile', Formfields.mobile);
                    setFormfields({ ...Formfields}); // Reset mobile field
                    
                   
                } else {
                    context.openAlertBox("error", res?.message || "Update failed! Try again.");
                }
            })
            .catch(() => {
                context.openAlertBox("error", "Network error! Please try again.");
            })
            .finally(() => {
                setisLoading(false);
            });
    };

            
        
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

        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="flex items-center gap-5 !mb-3">
                <div className="w-[50%] !mb-2">
                <TextField 
                
                label="Full Name" 
                variant="outlined" 
                size="small"
                name="name"
                value={Formfields.name}
                disabled={isLoading===true ? true :false}
                onChange={onChangeInput}/>
                </div>
 
                <div className="w-[50%] !mb-2">
                <TextField 
                type="email"
                label="Email" 
                variant="outlined" 
                size="small"
                name="email"
                value={Formfields.email}
                disabled={isLoading===true ? true :false}
                onChange={onChangeInput}/>
                </div>

                

            </div>
            
            <div className="w-[50%] !mb-2">
                <TextField 
                
                label="Phone Number" 
                variant="outlined" 
                size="small"
                name="mobile"
                value={Formfields.mobile}
                disabled={isLoading===true ? true :false}
                onChange={onChangeInput}/>
                </div>

                <br/>
                <div className="flex gap-4">
 <button 
        type="submit" 
        disabled={!valideValue} 
        className={`flex items-center justify-center gap-2 font-[400] !text-center !mt-5 bg-red-400 text-white rounded-lg shadow-lg !w-[150px] !h-[40px] mb-3
          transition-all duration-300 ease-in-out 
          ${valideValue ? "hover:bg-black hover:shadow-xl" : "opacity-70"}`}
      >
        {isLoading && <CircularProgress color="inherit" className="!w-[20px] !h-[20px]" />} 
        Update Profile
      </button>

 
  {/* <Button className="!border !border-blue-600 !text-blue-600 !px-4 !py-2 !rounded-md !transition-all duration-300 hover:text-white">
    Cancel
  </Button> */}
</div>


   

        </form>
        </div>
    </div>
            </div>
        </section>
       
    )
}

export default Myaccount