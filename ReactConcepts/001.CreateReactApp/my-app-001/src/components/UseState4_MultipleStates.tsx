import React, { useState } from 'react';
function UserInfo(){
   const [name,setName] = useState("");
   const [age, setAge] = useState("");

   return(
      <div>
         <input placeholder='Enter your name here'
                value = {name}
                onChange={(e)=>setName(e.target.value)}/>
         <input placeholder='Enter your age here'
                value = {age}
                onChange={(e)=>setAge(e.target.value)}/>
         <p>Your name is: {name || "stranger"}</p>
         <p>Your age is: {age || "unknown"}</p>
      </div>
   )
}
export default UserInfo;