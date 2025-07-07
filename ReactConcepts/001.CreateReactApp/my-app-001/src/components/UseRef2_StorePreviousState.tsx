import React,{useState,useRef,useEffect} from 'react';

function UseRef2_StorePreviousState() {
   const [count, setCount] = useState(0);
   const prevCount = useRef();
   useEffect(()=>{
      // Store the previous count value in the ref
      prevCount.current = count;
   },[count]);
   return(
      <>
         <h2>Current : {count}</h2>
         <h2> Previous : {prevCount.current}</h2>
         <button onClick={()=>setCount(count+1)}>Increment</button>
      </>
   )  
}
export default UseRef2_StorePreviousState;