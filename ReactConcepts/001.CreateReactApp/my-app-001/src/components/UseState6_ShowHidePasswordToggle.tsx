import React, { useState } from 'react';

function UseState6_ShowHidePasswordToggle() {
    const[showPassword ,setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };
    return(
      <>
         <input type={showPassword ? "text" : "password"} placeholder="Enter Password" />
         <button onClick={togglePassword}>
            {showPassword ? "Hide Password" : "Show Password"}
         </button>
      </>
    )
}  
export default UseState6_ShowHidePasswordToggle;