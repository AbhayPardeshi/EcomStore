import { useReducer, useState } from "react";
import { useContext, createContext } from "react";
import { authReducer } from "./authReducer";
import { useFetch } from "../../services";
import { useEffect } from "react";
import unsign from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../services/Toast";
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
          apiURL: "/auth/signup",
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
          apiURL: "/auth/login",
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
        const decodedToken = unsign(
          encodedTokenTemp,
          process.env.REACT_APP_JWT_SECRET
        );
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
          msg: `Logged in as ${decodedToken[0].firstName} ${decodedToken[0].lastName}`,
        });
      }
    });
    return () => clearTimeout(setTimeOutId);
  }, []);

  useEffect(() => {
    if (serverResponse || error) {
      console.log(serverResponse);
      if (serverResponse?.status === 200) {
        const token = serverResponse.data.encodedToken;
        const decodeToken = unsign(token, process.env.USER_PWD_SECRET);
        userAuthDispatch({
          type: "LOGIN",
          payload: { encodedToken, user: decodeToken },
        });
        localStorage.setItem("token", token);

        Toast({
          type: "success",
          msg: `Logged in as ${decodeToken[0].firstName} ${decodeToken[0].lastName}`,
        });
        navigate("/");
      } else if (serverResponse?.status === 201) {
        console.log(serverResponse);
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
  }, [serverResponse, error]);

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
