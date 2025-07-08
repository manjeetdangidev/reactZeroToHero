//useMemo returns a memoized value.
//It avoids re-computation of expensive calculations on every render, unless dependencies change.
//Syntax:
// const memoizedValue = useMemo(() => computeSomething(), [dependencies]);

import React, { useState, useMemo } from 'react';

function UseMemo1_ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 1e7; i++) total += i;
    return total;
  }, [count]);

  return (
    <>
      <h2>Expensive Calculation: {expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Recalculate</button>
      <input value={input} onChange={e => setInput(e.target.value)} />
    </>
  );
}

export default UseMemo1_ExpensiveComponent;
// This component demonstrates how to use useMemo to optimize performance by memoizing an expensive calculation.  