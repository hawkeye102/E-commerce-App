import React,{useState} from "react";


        const OtpBox = ({ length, onChange }) => {
          const [otp, setOtp] = useState(new Array(length).fill(""));
        
          const handleChange = (element, index) => {
            const value = element.value;
            if (isNaN(value)) return; // Only allow numbers
        
            const newOtp = [...otp];
            newOtp[index] = value.slice(-1); // Ensure only one digit
            setOtp(newOtp);
            onChange(newOtp.join(""));
        
            // Move focus to next input if a number is entered
            if (value && index < length - 1) {
              document.getElementById(`otp-input-${index + 1}`).focus();
            }
          };
        
          return (
            <div className="flex gap-2 justify-center">
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp-input-${index}`}
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-12 h-12 text-center text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
          );
        };
        
        
        
    

export default OtpBox