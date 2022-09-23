export const setCategory = (state, payload) => {
  if (payload === "MEN") {
    return {
      ...state,
      categoryName: "MEN",
    };
  } else if (payload === "WOMEN") {
    return {
      ...state,
      categoryName: "WOMEN",
    };
  } else if (payload === "KIDS") {
    return { ...state, categoryName: "KIDS" };
  }
};
