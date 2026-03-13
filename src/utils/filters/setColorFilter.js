export const setColor = (state, payload) => {
  return {
    ...state,
    productColors: [...state.productColors, payload],
  };
};
