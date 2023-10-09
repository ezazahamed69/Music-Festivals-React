import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    // const location = useLocation ();
    // console.log(location.pathname);

    if (user){
        return children;
    }
    return <Navigate to="/login"></Navigate>;
       
    
};

export default PrivateRoute;