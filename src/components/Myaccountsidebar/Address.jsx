import React, { useContext } from 'react'
import { useState } from 'react';
import AccountsSideBar from '../Myaccountsidebar'
import { IoAddOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
 import MenuItem from '@mui/material/MenuItem';
 import { postData } from '../../utils/api';
 import { MyContext } from '../../App';
 import {deleteAddress} from '../../utils/api';
 

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { IoBagCheckOutline } from "react-icons/io5";
import { useEffect } from 'react';
import { fetchData } from '../../utils/api';
import { MdDeleteOutline } from "react-icons/md";


const Address = () => {
    const [open, setOpen] = React.useState(false);
    const [phone, setPhone] = useState('');
    const [isLoading,setisLoading] = useState(false)
    const [status, setstatus] = React.useState(false);
    const [savedAddress, setSavedAddress] = useState(null);


   const context=useContext(MyContext)

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleChangeStatus = (event) => {
      const value = event.target.value === 'true' || event.target.value === true;
      setstatus(value);
      setFormfields((prev) => ({
        ...prev,
        status: value,
      }));
    };
    
    
    const handleClose = () => {
      setOpen(false);
    };


    const [Formfields,setFormfields] =useState({
      address_line:'',
      city:'',
      mobile: localStorage.getItem('userMobile') || '',
      state:'',
      pincode:'',
      country:'',
      status:'',
      userId:''
  })

 
  
 
  const fetchAddress = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      const data = await fetchData(`/api/address/get/${userId}`); 

      

      if (data.success) {
        const normalizedAddress = Array.isArray(data.address) ? data.address : [data.address];
        setSavedAddress(normalizedAddress);
      }
      else {
        console.warn("Expected an array but got:", data.address);
      }
    } catch (err) {
      console.error("Failed to fetch address:", err);
    }
  };
  useEffect(() => {
 

    fetchAddress();
  }, []);
  
 const handleDelete = async (id) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this address?");
      if (!confirm) return;
      const userId = localStorage.getItem("userId");
      if (!userId) {
        context.openAlertBox("error", "User ID not found. Please login again.");
        return;
      }
      const result = await deleteAddress(`/api/address/${id}`);
      if (result.success) {
        context.openAlertBox("success", "Address deleted successfully");
        fetchAddress(); 
      } else {
        context.openAlertBox("error", result.message || "Failed to delete address");
      }
    } catch (err) {
      console.error(err);
      context.openAlertBox("error", err.message || "Something went wrong");
    }
  };
  


  
  
  

  
   const onChangeInput=(e)=>{
     const {name,value} = e.target;
     setFormfields(()=>{
         return{ 
             ...Formfields,
         [name]:value
     }
        
     })
     
 }


     const handleSubmit = (e) => {
           e.preventDefault();
           setisLoading(true);

          

           if (Formfields.mobile === "") {
             context.openAlertBox("error", "Please enter a phone number.");
             setisLoading(false);
             return;
         }
   
           if (Formfields.address_line === "") {
               context.openAlertBox("error", "Please enter a Address line.");
               setisLoading(false);
               return;
           }

           if (Formfields.city === "") {
             context.openAlertBox("error", "Please enter city name.");
             setisLoading(false);
             return;
         }

         if (Formfields.pincode === "") {
             context.openAlertBox("error", "Please enter pincode.");
             setisLoading(false);
             return;
         }

         if (Formfields.state === "") {
             context.openAlertBox("error", "Please enter state name.");
             setisLoading(false);
             return;
         }

         if (Formfields.country === "") {
             context.openAlertBox("error", "Please enter  country name.");
             setisLoading(false);
             return;
         }
  
           
   
          
           postData("/api/address/add", Formfields)
               .then((res) => {
                 console.log("Access token from localStorage:", localStorage.getItem("accessToken"));

                   if (res?.success) {
                       context.openAlertBox("success", "Address updated successfully!");
                       
                       
                       console.log('fields values',Formfields)
                       fetchAddress();

                       setFormfields({
                        address_line:'',
                        city:'',
                        mobile:'',
                        state:'',
                        pincode:'',
                        country:'',
                        status:'',
                        userId:''
                       })
                       
                     
                   } else {
                       context.openAlertBox("error", res?.message || "Update failed! Try again.");
                   }
               })
               .catch((err) => {
                 console.error("Caught error in .catch:", err);
                 context.openAlertBox("error", err.message || "Network error! Please try again.");
               })
               
              
               .finally(() => {
                   setisLoading(false);
               });
       };

  
  return (
    <>
    <section className="py-10 w-full">
    <div className="container flex  gap-3 p-5">
        <div className="col1 w-[20%]">
        <AccountsSideBar/>

        </div>

<div className="col2 w-[50%]">
<div className="card bg-white p-5 shadow-md rounded-md">
    <div className="flex items-center pb-0">
        <h2>Address</h2>
    
    </div>
   

    <div className="max-w-md mx-auto p-2">
      
      <div className=" flex items-center justify-center border border-gray-300 bg-gray-100  py-3 rounded-lg font-semibold mb-4 
      cursor-pointer w-full hover:bg-gray-500 gap-2" onClick={handleClickOpen}>
        <IoAddOutline className='text-[23px]' /><h2 className='text-center'>Add Address</h2>
      </div>

      <div className="space-y-4">
      {savedAddress?.length>0 && savedAddress.map((addr,index)=>(
         <div key={index} className="border flex items-center justify-between p-3 
         rounded-md bg-blue-100 text-sm text-black gap-2">
    <strong>Address:</strong> {addr.address_line}, {addr.city}, {addr.state} - {addr.pincode}, {addr.country}
    <div className="">
     
    <MdDeleteOutline 
    className="!text-[22px] !text-black hover:!scale-115  cursor-pointer 
    transform transition duration-200" onClick={() => handleDelete(addr._id)}/>
    </div>
  </div>
  ))}
  </div>

      
    </div>
    </div>
    </div>
    </div>
    
    
    <hr/>
</section>


<Dialog
open={open}
onClose={handleClose}
slotProps={{
  paper: {
    component: 'form',
    onSubmit: handleSubmit,
   
    sx: {
        width: '1800px',       
        minHeight: '300px',   
        borderRadius: 2,       
                   
      },
  },
}}
>
<DialogTitle>Add Address</DialogTitle>
<DialogContent dividers sx={{ padding: 2 }}>

<div className="flex items-center gap-3 mb-3">
<div className="w-full grid-cols-1 ">
<TextField
 className="w-full" 
 label="Address Line" 
 variant="outlined" 
 size="small"
 name="address_line" onChange={onChangeInput} value={Formfields.address_line}/>
</div>



 
  </div>
  <div className="flex items-center gap-3 mb-3">
<div className="w-[50%] ">
<TextField 
className="w-full" 
label="City" 
variant="outlined" 
 size="small" name="city" onChange={onChangeInput} value={Formfields.city}/>
</div>

 <div className="w-[50%] ">
 <TextField 
 className="w-full "
 label="State"
  variant="outlined" 
  size="small"
  name="state" onChange={onChangeInput} value={Formfields.state} />
 </div>
 </div>

 <div className="flex items-center gap-3 mb-3 ">
<div className="w-[50%] ">
<TextField 
className="w-full" 
label="Pincode" 
variant="outlined" 
 size="small"
 name="pincode" onChange={onChangeInput} value={Formfields.pincode}/>
</div>

 <div className="w-[50%] ">
 <TextField 
 className="w-full "
 label="Country"
  variant="outlined" 
  size="small"
  name="country" onChange={onChangeInput} value={Formfields.country} />
 </div>
 </div>

 <div className="flex items-center gap-3 mb-3 ">
<div className="w-[50%] ">
 <PhoneInput
  defaultCountry="in"
  onChange={(phone) => {
    setPhone(phone);
    setFormfields((prev) => ({
      ...prev,
      mobile: phone,
    }));
  }}
  value={Formfields.mobile?.toString() || ""}
  disabled={isLoading === true}
  className="!w-[68%]"
/>
</div>

 <div className="w-[50%] ">
 <Select
          value={Formfields.status}
          onChange={handleChangeStatus}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size='small'
          className='w-full'
        >
         
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
         
        </Select>
 </div>
 </div>
 

</DialogContent>
<DialogActions>
    
<Button
      onClick={handleClose}
      variant="outlined"
      sx={{
        color: 'gray',
        borderColor: 'gray',
        '&:hover': {
          backgroundColor: '#f5f5f5',
          borderColor: 'black',
          color: 'black',
        },
      }}
    >
      Cancel
    </Button>
    <Button
      type="submit"
      variant="contained"
      sx={{
        backgroundColor: '#1976d2',
        '&:hover': {
          backgroundColor: '#115293',
        },
      }}
    >
      Save
    </Button>
</DialogActions>
</Dialog>
</>
  )
}

export default Address