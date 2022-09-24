export const setColor = (state, payload) => {
  const color = payload;
  switch (color) {
    case "RED":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };

    case "BLUE":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };

    case "BLACK":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };

    case "BEIGE":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };

    case "GREEN":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };

    case "WHITE":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };
    case "GREY":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };
    case "PINK":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };
    case "ORANGE":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };
    case "PURPLE":
      return {
        ...state,
        productColors: [...state.productColors, color],
      };

    default:
      return state;
  }
};
