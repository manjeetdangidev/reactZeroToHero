// useCallback — Memoize a Function
   //  useCallback returns a memoized version of a function.
   //  This helps prevent unnecessary re-creations of the function on every re-render, which is useful especially when passing functions to child components.

// Syntax:
/*
   const memoizedFn = useCallback(() => {
   // function body
   }, [dependencies]);
*/

import React, { useState, useCallback } from 'react';

function UseCallBack1_PreventingFunctionRecreation() {
  const [count, setCount] = useState(0);
  console.log('Counter component rendered');
  const increment = useCallback(() => {
   console.log('increment function called');
    setCount(prev => prev + 1);
  }, []);
  console.log('increment function recreated');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
//increment is memoized, so it won’t be recreated on each re-render.
export default UseCallBack1_PreventingFunctionRecreation;