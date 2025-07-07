//Helps to Avoid Prop Drilling by sharing data globally across components
//Works with React.createContext() and React.useContext()
import React,{useContext,useState,createContext} from 'react';

const ThemeContext = createContext();
//ThemeContext is a context object that will be used to share data across components
export function ThemeProvider({children}) {
   const [theme, setTheme] = useState('light'); // State to hold the theme value
   const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
   }
   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      </ThemeContext.Provider>
      )
}
export function ThemedBox(){
   const {theme,toggleTheme} = useContext(ThemeContext);
   return(
      <div style={{ 
         backgroundColor: theme === 'light' ? '#fff' : '#333', 
         color: theme === 'light' ? '#000' : '#fff', 
         padding: '20px', 
         borderRadius: '5px' 
      }}>
         <p>Current Theme: {theme}</p>
         <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
   )
}

