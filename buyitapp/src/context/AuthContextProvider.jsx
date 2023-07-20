import {createContext, useState} from "react";


export const AuthContext = createContext();

function AuthContextProvider({children}){
    const token = localStorage.getItem("token");
    return(
        <AuthContext.Provider value={{token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;