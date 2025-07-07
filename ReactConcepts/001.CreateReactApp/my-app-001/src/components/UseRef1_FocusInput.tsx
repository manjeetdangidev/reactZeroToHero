//useRef() - Accessing DOM elements directly and Persist Values
//Like createRef() in class Components
//2 main use cases:
//1. Accessing DOM elements directly
//2. Persisting values without causing re-renders
import React,{ useRef } from 'react';

function UseRef1_FocusInput() {
 const inputRef = useRef();
 const focusInput = () => {
   inputRef.current.focus();
 };
 return(
   <>
      <input ref={inputRef} placeholder='Type Something...' />
      <button onClick = {focusInput}>Focus Input</button>
   </>
 )
}
export default UseRef1_FocusInput;