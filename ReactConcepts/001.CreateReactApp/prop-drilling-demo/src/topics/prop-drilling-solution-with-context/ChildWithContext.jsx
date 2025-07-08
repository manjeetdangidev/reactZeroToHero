// src/topics/prop-drilling-solution-with-context/ChildWithContext.jsx
import React from 'react';
import GrandChildWithContext from './GrandChildWithContext';

function ChildWithContext() {
  return (
    <div style={{ border: '2px solid orange', padding: '10px', margin: '10px' }}>
      <h3>Child (Context)</h3>
      <GrandChildWithContext />
    </div>
  );
}

export default ChildWithContext;
// This component does not receive props directly.
// Instead, it consumes the context provided by ParentWithContext.