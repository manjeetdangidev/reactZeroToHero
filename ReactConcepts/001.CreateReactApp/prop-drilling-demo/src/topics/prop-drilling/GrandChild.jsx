import React from 'react';

function GrandChild({ username }) {
  return (
    <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
      <h4>GrandChild</h4>
      <p>Hi, my name is <strong>{username}</strong></p>
    </div>
  );
}

export default GrandChild;
// This component receives the username prop from Child and displays it.
// It demonstrates how props can be drilled down through multiple levels of components.
// The username is passed down from App -> Parent -> Child -> GrandChild.