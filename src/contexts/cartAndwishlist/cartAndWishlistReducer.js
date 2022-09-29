export const cartAndWishlistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        apiURL: "/user/cart",
        method: "POST",
        postMethodData: {
          ...payload,
        },
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        apiURL: "/user/wishlist",
        method: "POST",
        postMethodData: {
          ...payload,
        },
      };

    case "GET_CART_PRODUCTS":
      return {
        ...state,
        apiURL: "/user/cart",
        method: "GET",
      };

    case "GET_WISHLIST_PRODUCTS":
      return {
        ...state,
        apiURL: "/user/wishlist",
        method: "GET",
      };
    case "UPDATE_CART_PRODUCT_QUANTITY":
      return {
        ...state,
        apiURL: `/user/cart/${payload.id}`,
        method: "POST",
        postMethodData: {
          action: { type: payload.action },
        },
      };
    case "DELETE_CART_PRODUCTS":
      return {
        ...state,
        apiURL: `/user/cart/${payload}`,
        method: "DELETE",
      };
    case "DELETE_WISHLIST_PRODUCTS":
      return {
        ...state,
        apiURL: `/user/wishlist/${payload}`,
        method: "DELETE",
      };

    case "USER_NOT_LOGGEDIN":
      return {
        apiURL: "",
        method: "GET",
        postMethodData: {},
      };

    default:
      break;
  }
};
