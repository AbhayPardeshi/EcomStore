export const cartAndWishlistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        apiURL: "/api/cart",
        method: "POST",
        postMethodData: {
          ...payload,
        },
        encodedToken: payload.encodedToken,
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        apiURL: "/api/wishlist",
        method: "POST",
        postMethodData: {
          ...payload,
        },
        encodedToken: payload.encodedToken,
      };

    case "GET_CART_PRODUCTS":
      return {
        ...state,
        apiURL: "/api/cart",
        method: "GET",
        encodedToken: payload.encodedToken,
      };

    case "GET_WISHLIST_PRODUCTS":
      return {
        ...state,
        apiURL: "/api/wishlist",
        method: "GET",
        encodedToken: payload.encodedToken,
      };
    case "UPDATE_CART_PRODUCT_QUANTITY":
      return {
        ...state,
        apiURL: `/api/cart/${payload.id}`,
        method: "POST",
        postMethodData: {
          action: { type: payload.action },
        },
        encodedToken: payload.encodedToken,
      };
    case "DELETE_CART_PRODUCTS":
      return {
        ...state,
        apiURL: `/api/cart/${payload}`,
        method: "DELETE",
        encodedToken: payload.encodedToken,
      };
    case "DELETE_WISHLIST_PRODUCTS":
      return {
        ...state,
        apiURL: `/api/wishlist/${payload}`,
        method: "DELETE",
        encodedToken: payload.encodedToken,
      };

    case "USER_NOT_LOGGEDIN":
      return {
        apiURL: "",
        method: "GET",
        postMethodData: {},
        encodedToken: "",
      };

    default:
      break;
  }
};
