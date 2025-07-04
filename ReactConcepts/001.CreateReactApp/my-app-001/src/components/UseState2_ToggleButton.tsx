import React,{useState} from 'react';
function UseStateToggleButton() {
  const [isOn, setIsOn] =useState(false);
   const toggle = () => setIsOn(!isOn);

  return (
    <button onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
export default UseStateToggleButton;