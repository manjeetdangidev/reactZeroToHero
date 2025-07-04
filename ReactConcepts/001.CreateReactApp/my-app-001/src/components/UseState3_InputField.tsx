import React,{useState} from "react";
function NameForm(){
   const[name,setName] = useState("");
   return(
      <>
         <input type="text" value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your name"/>
         <p>Your name is: {name || "stranger"}</p>
      </>
   )
}
export default NameForm;