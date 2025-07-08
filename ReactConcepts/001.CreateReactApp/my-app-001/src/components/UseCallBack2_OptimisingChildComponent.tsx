import React, { useState, useCallback } from 'react';

// Memoized child component
const Button = React.memo(({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click Me</button>;
});

function UseCallBack2_OptimisingChildComponent() {
  const [count, setCount] = useState(0);

  //useCallback: same function reference across renders
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <Button onClick={handleClick} />
    </>
  );
}

export default UseCallBack2_OptimisingChildComponent;
// This component demonstrates how to use useCallback to optimize a child component.
// The Button component will only re-render when the handleClick function changes, which it won't in this case because of useCallback.
// The parent component can update its state without causing unnecessary re-renders of the Button component.   