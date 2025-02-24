import React, { useState } from "react";
import './Qtybox.css'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Button from  '@mui/material/Button'


const QtyBox=()=>{
    const [qtyVal,setqtyVal] = useState(1)

    const plusQty=()=>{
        setqtyVal(qtyVal+1)
    }

    const minusQty=()=>{
        if(qtyVal===1){
            setqtyVal(qtyVal+1)
        }
        else{
            setqtyVal(qtyVal-1)
        }
       
    }

    return(
        <div className="qtyBox flex items-center relative">
            <input type="number" 
            className="w-[60px] h-[30px] pl-5 focus:outline-none !border-2 !border-gray-400 rounded-md  "
            Value={qtyVal}/> 

     <div className="flex items-center flex-col justify-between !h-[30px] absolute top-0 right-0 z-50">
       < Button  className="!mt-0.5 !min-w-[30px] w-[30px] !h-[10px] !text-black rounded-none !text-[12px]" onClick={plusQty}><FaAngleUp/></ Button>
       < Button  className="!min-w-[30px] w-[30px] !h-[10px]  !text-black rounded-none !text-[12px]" onClick={minusQty}><FaAngleDown/></ Button>
    </div>

    
           
        </div>
    )
}

export default  QtyBox