import React from 'react';
import Child from './Child';

function Parent({ username }) {
  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
      <h2>Parent</h2>
      <Child username={username} />
    </div>
  );
}

export default Parent;
// This component receives the username prop from App and passes it down to Child.
// It demonstrates how props can be drilled down through multiple levels of components.