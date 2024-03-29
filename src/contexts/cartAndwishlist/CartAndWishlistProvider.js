import { useState } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useFetch } from "../../services";
import { useAuth } from "../auth/AuthProvider";
import { cartAndWishlistReducer } from "./cartAndWishlistReducer";

const initialApiData = {
  apiURL: "",
  method: "GET",
  postMethodData: {},
};

const CartAndWishlistContext = createContext(initialApiData);

export const useCartAndWishlist = () => useContext(CartAndWishlistContext);

export const CartAndWishlistProvider = ({ children }) => {
  const {
    userAuthState: { encodedToken, isUserLoggedIn },
  } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const [cartAndWishlistState, cartAndWishlistDispatch] = useReducer(
    cartAndWishlistReducer,
    initialApiData
  );

  const { serverResponse, error, isLoading } = useFetch(
    cartAndWishlistState.apiURL,
    cartAndWishlistState.method,
    cartAndWishlistState.postMethodData,
    encodedToken
  );

  useEffect(() => {
    let setTimeOutId;
    if (!isUserLoggedIn) {
      cartAndWishlistDispatch({ type: "USER_NOT_LOGGEDIN" });
    } else {
      setTimeOutId = setTimeout(() => {
        cartAndWishlistDispatch({ type: "GET_CART_PRODUCTS" });
        setTimeOutId = setTimeout(() => {
          cartAndWishlistDispatch({ type: "GET_WISHLIST_PRODUCTS" });
        }, 0);
      }, 0);
    }
    return () => clearTimeout(setTimeOutId);
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (serverResponse) {
      if (serverResponse?.data?.cart?.qty) {
        setCartItems(serverResponse.data.cart.products);
      } else if (serverResponse?.data?.wishlist?.qty) {
        setWishlistItems(serverResponse.data.wishlist.products);
      } else if (!serverResponse?.data?.cart?.qty) {
        setCartItems([]);
      } else if (!serverResponse?.data?.wishlist?.qty) {
        setWishlistItems([]);
      }
    }
  }, [serverResponse]);

  return (
    <CartAndWishlistContext.Provider
      value={{
        cartItems,
        wishlistItems,
        isLoading,
        error,
        cartAndWishlistDispatch,
        showCart,
        setShowCart,
        showWishlist,
        setShowWishlist,
        isUserLoggedIn,
      }}
    >
      {children}
    </CartAndWishlistContext.Provider>
  );
};
