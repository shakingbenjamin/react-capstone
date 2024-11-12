import { createContext, useState } from "react";
// the value that needs to be accessed
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});
// a wrapper for any component that needs to access the user context
export const UserProvider = ({children}) => {
    // we want to store a user object - gets the value and the setter function
    const [currentUser, setCurrentUser] = useState(null);
    // the value has both currentUser and the setCurrent user
    const value = { currentUser, setCurrentUser };
    // any of the child components can access the values of the user 
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}