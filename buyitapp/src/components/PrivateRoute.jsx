import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";

function PrivateRoute({children}){
    // const {token} = useContext(AuthContext);
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to={"/login"} />
    }
    
    return children;
}

export default PrivateRoute;