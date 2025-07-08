import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './topics/routing/Home';
import About from './topics/routing/About';
import Parent from './topics/prop-drilling/Parent';
import ParentWithContext from './topics/prop-drilling-solution-with-context/ParentWithContext';


function App() {
  const username = 'John Doe'; // Example username to be passed down

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/drilling" style={{ marginLeft: '10px' }}>Prop Drilling</Link>
        <Link to="/drilling-context" style={{ marginLeft: '10px' }}>Prop Drilling (Context)</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/drilling" element={<Parent username={username} />} />
        <Route path="/drilling-context" element={<ParentWithContext />} />
      </Routes>
    </div>
  );
}

export default App;
