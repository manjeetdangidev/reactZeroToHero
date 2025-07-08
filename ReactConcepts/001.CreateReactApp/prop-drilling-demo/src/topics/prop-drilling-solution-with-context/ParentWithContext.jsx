import React from 'react';
import UserContext from './UserContext';
import ChildWithContext from './ChildWithContext';

function ParentWithContext() {
  const username = 'John Doe with Context'; // Example username to be provided to the context

  return (
    <UserContext.Provider value={username}>
      <div style={{ border: '2px solid purple', padding: '10px', margin: '10px' }}>
        <h2>Parent (Context)</h2>
        <ChildWithContext />
      </div>
    </UserContext.Provider>
  );
}

export default ParentWithContext;
// This component provides the username to the context.
// It uses the UserContext to pass down the username to ChildWithContext.