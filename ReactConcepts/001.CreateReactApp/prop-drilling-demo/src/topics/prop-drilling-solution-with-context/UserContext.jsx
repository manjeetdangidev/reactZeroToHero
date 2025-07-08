// topics/prop-drilling-solution/UserContext.jsx
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
// This context can be used to provide user-related data throughout the component tree.
// It allows components to access user information without prop drilling.