import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const navigate = useNavigate()
    console.log(user, loading)
    return (
        <div>
            
            {
                loading ? <span className="loading loading-dots loading-lg"></span>
                    :
                    user ? children : <Navigate to='/login'></Navigate>
                       
            }
        </div>
    );
};

export default PrivateRoute;