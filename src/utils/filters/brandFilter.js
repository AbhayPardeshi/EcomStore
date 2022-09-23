export const setBrand = (state, payload) => {
  switch (payload) {
    case "ADIDAS":
      return {
        ...state,
        brandName: [...state.brandName, payload],
      };

    case "JORDAN":
      return {
        ...state,
        brandName: [...state.brandName, payload],
      };

    case "NIKE":
      return {
        ...state,
        brandName: [...state.brandName, payload],
      };

    case "MAISON ARTICLE":
      return {
        ...state,
        brandName: [...state.brandName, payload],
      };

    case "NEW BALANCE":
      return {
        ...state,
        brandName: [...state.brandName, payload],
      };

    case "REEBOK":
      return {
        ...state,
        brandName: [...state.brandName, payload],
      };
    case "PUMA":
      return {
        ...state,
        brandName: [...state.brandName, payload],
      };

    default:
      return state;
  }
};
