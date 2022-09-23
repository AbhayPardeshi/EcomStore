export const applyCategoryFilter = (filterDispatch, category) => {
  const categoryName = category.toUpperCase();
  switch (categoryName) {
    case "MEN":
      filterDispatch({ type: "CATEGORY", payload: categoryName });
      break;
    case "WOMEN":
      filterDispatch({ type: "CATEGORY", payload: categoryName });
      break;
    case "KIDS":
      filterDispatch({ type: "CATEGORY", payload: categoryName });
      break;
    default:
      break;
  }
};
