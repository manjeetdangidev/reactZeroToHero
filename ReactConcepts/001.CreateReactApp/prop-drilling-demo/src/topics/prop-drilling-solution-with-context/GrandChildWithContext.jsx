// src/topics/prop-drilling-solution-with-context/GrandChildWithContext.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function GrandChildWithContext() {
  const username = useContext(UserContext);

  return (
    <div style={{ border: '2px solid teal', padding: '10px', margin: '10px' }}>
      <h4>GrandChild (Context)</h4>
      <p>Hi, my name is <strong>{username}</strong></p>
    </div>
  );
}

export default GrandChildWithContext;
// This component consumes the UserContext to access the username.
// It displays the username without needing to pass it down through props.