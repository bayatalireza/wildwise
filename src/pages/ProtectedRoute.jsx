import { useEffect } from "react";
import {useAuth} from "../contexts/FakeAuthContext";
import {useNavigate} from "react-router-dom";
export default function ProtectedRoute({children}) {
      const {isAuthenticated} = useAuth();
      const navigate = useNavigate();

      useEffect(() => {

            if (!isAuthenticated) {
              navigate("/");
            }
      }, [isAuthenticated, navigate]);
      // If the user is authenticated, render the children
      // Otherwise, navigate to the login page
  return isAuthenticated? children : null
}