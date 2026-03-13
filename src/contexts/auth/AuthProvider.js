import { useReducer, useState } from "react";
import { useContext, createContext } from "react";
import { authReducer } from "./authReducer";
import { useFetch } from "../../services";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../services/Toast";
import jwtDecode from "jwt-decode";
const initialUserAuthState = {
  isUserLoggedIn: false,
  encodedToken: "",
  user: {},
};

const initialApiData = {
  apiURL: "",
  method: "GET",
  postMethodData: {},
  encodedToken: "",
};

const AuthContext = createContext(initialUserAuthState);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userAuthState, userAuthDispatch] = useReducer(
    authReducer,
    initialUserAuthState
  );

  // console.log(userAuthState);
  const [apiData, setApiData] = useState(initialApiData);
  const { apiURL, method, postMethodData, encodedToken } = apiData;

  const { serverResponse, error, isLoading } = useFetch(
    apiURL,
    method,
    postMethodData,
    encodedToken
  );

  const signupHandler = (signupFormData) => {
    // console.log(signupFormData);
    if (signupFormData) {
      setApiData((prev) => {
        return {
          ...prev,
          apiURL: "/api/auth/signup",
          method: "POST",
          postMethodData: { ...signupFormData },
        };
      });
    }
    navigate("/login");
  };
  const loginHandler = (loginFormData) => {
    if (loginFormData) {
      setApiData((prev) => {
        return {
          ...prev,
          apiURL: "/api/auth/login",
          method: "POST",
          postMethodData: { ...loginFormData },
        };
      });
    }
  };

  const logoutHandler = () => {
    userAuthDispatch({ type: "LOGOUT" });
    localStorage.clear("token");
    Toast({
      type: "success",
      msg: "logged out successfully!",
    });
    navigate(`/`);
  };

  useEffect(() => {
    let setTimeOutId;
    setTimeOutId = setTimeout(() => {
      const encodedTokenTemp = localStorage.getItem("token");
      if (encodedTokenTemp) {
        const decodedToken = jwtDecode(encodedTokenTemp);
        userAuthDispatch({
          type: "LOGIN",
          payload: {
            isUserLoggedIn: true,
            encodedToken: encodedTokenTemp,
            user: { ...decodedToken },
          },
        });
        Toast({
          type: "success",
          msg: `Logged in as ${decodedToken.firstName} ${decodedToken.lastName}`,
        });
      }
    });
    return () => clearTimeout(setTimeOutId);
  }, []);

  useEffect(() => {
    if (serverResponse || error) {
      console.log(serverResponse?.data);
      if (serverResponse?.status === 200) {
        const token = serverResponse.data.accessToken;
        const decodeToken = jwtDecode(token);
        
        userAuthDispatch({
          type: "LOGIN",
          payload: { encodedToken: token, user: decodeToken },
        });
        localStorage.setItem("token", token);
        console.log(decodeToken)
        Toast({
          type: "success",
          msg: `Logged in as ${decodeToken.firstName} ${decodeToken.lastName}`,
        });
        navigate("/");
      } else if (serverResponse?.status === 201) {
        Toast({
          type: "success",
          msg: "New User Registered",
        });
        navigate("/login");
      } else if (serverResponse?.status === 422) {
        console.log(serverResponse.data.message); // User Already Exits.
      } else if (error?.status === 401) {
        console.log(error?.status, error.message);
      }
    }
  }, [serverResponse, error, navigate]);

  return (
    <AuthContext.Provider
      value={{
        signupHandler,
        loginHandler,
        logoutHandler,
        isLoading,
        error,
        userAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
