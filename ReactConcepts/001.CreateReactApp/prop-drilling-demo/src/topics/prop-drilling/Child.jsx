import React from 'react';
import GrandChild from './GrandChild';

function Child({ username }) {
  return (
    <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
      <h3>Child</h3>
      <GrandChild username={username} />
    </div>
  );
}

export default Child;
// This component receives the username prop from Parent and passes it down to GrandChild.
// It demonstrates how props can be drilled down through multiple levels of components.