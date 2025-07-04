// Returns a state variable and a function to update it.
// Re-render the component when the state changes.
// Syntax : const[state, setState] = useState(intialValue);

import React, { useState } from 'react';
function UseStateExample() {
   const[count,setCount] = useState(0);//count is state variable, setCount is a function to update the state
   return(
      <>
         <h2>Count : {count}</h2>
         <button onClick={()=>setCount(count+1)}>Increment</button>
      </>
   )
}
export default UseStateExample;