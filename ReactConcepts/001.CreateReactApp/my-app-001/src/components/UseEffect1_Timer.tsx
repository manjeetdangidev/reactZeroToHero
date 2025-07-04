// Runs after the component renders
// Use it to fetch data, add event listeners,setTimeout, or perform side effects
//Can simulate componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods
//Syntax : 
// useEffect(() => {
//   // Your code here 
//   return () => {
//     // Cleanup code here
//   }
// }, [dependencies]);

//Example-1
// import React, { useState, useEffect } from 'react';
// function UseEffect1_Timer() {
//    const[seconds, setSeconds] = useState(0);
//    //1000 miliseconds = 1 second
//    useEffect(() => {
//       const interval = setInterval(() => {
//          setSeconds(prevSeconds => prevSeconds + 1);
//       }, 1000);
      
//       // Cleanup function to clear the interval
//       return () => clearInterval(interval);
//    }, []); // Empty dependency array means this effect runs once when the component mounts

//    return (
//       <div>
//          <h1>Timer: {seconds} seconds</h1>
//          <p>This timer updates every second.</p>
//       </div>
//    );
// }
// export default UseEffect1_Timer;

//Example-2 Stop it after 10 Seconds 
import React, { useState, useEffect } from 'react';
function UseEffect1_Timer() {
   const[seconds, setSeconds] = useState(0);
   //1000 miliseconds = 1 second
   useEffect(() => {
      if (seconds >= 10) {
         return; // Stop the timer after 10 seconds
      }
      const interval = setInterval(() => {
         setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      
      // Cleanup function to clear the interval
      return () => clearInterval(interval);
   }, [seconds]); // Empty dependency array means this effect runs once when the component mounts

   return (
      <div>
         <h1>Timer: {seconds} seconds</h1>
         <p>This timer updates every second.</p>
      </div>
   );
}
export default UseEffect1_Timer;