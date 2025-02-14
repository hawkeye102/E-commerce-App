import React from "react";
import { Truck } from "lucide-react";

const FreeShip=()=>{

     return (
              <div className="max-w-[800px] mx-auto bg-white border-2 border-red-500 rounded-lg p-4 flex items-center justify-between text-black shadow-md mt-6">
                <div className="flex items-center space-x-2">
                <Truck className="text-blue-500" size={28} />
                  <span className="font-bold">FREE SHIPPING</span>
                </div>
                <p className="text-gray-600 text-sm font-semibold">
                  Free Delivery Now On Your First Order and Over $200
                </p>
                <span className="font-bold text-red-500">- ONLY $200*</span>
              </div>
            );
          
          
          }
export default FreeShip