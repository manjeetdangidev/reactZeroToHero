import React, { useState } from 'react';
function TodoList (){
   const[todos, setTodos] = useState([]);
   const [text, setText] = useState("");

   const addToDo = () => {
      if(text.trim()) {
         setTodos([...todos, text]);
         setText("");
      }
   }
   return(
      <>
         <input type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder='Enter a todo item here'/>
         <button onClick={addToDo}>Add</button>
         <ul>
            {todos.map((todo,i) => <li key={i}>{todo}</li>)}
         </ul>
      </>
   )
}
export default TodoList;