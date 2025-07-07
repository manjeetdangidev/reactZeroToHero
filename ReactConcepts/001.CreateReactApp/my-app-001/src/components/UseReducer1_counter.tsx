//Great for Complex state logic (form, cart management, etc.)
//Uses a reducer function to manage state
import React,{useReducer} from 'react';

const reducer = (state, action) => {
   switch (action.type) {
      case 'increment':
         return { count: state.count + 1 };
      case 'decrement':
         return { count: state.count - 1 };
         default: return state;
}
}
function UseReducer1_counter() {
   const [state, dispatch] = useReducer(reducer, { count: 0 });
   return (
      <>
         <h2>Count : {state.count}</h2>
         <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
         <button onClick={()=>dispatch({type : "decrement"})}>Decrement</button>
      </>
   )
}

export default UseReducer1_counter;