const showCategoryMen = (products) => {
  const productList = [...products];
  return productList.filter(({ categoryName }) => categoryName === "MEN");
};

const showCategoryWomen = (products) => {
  const productList = [...products];
  return productList.filter(({ categoryName }) => categoryName === "WOMEN");
};
const showCategoryKids = (products) => {
  const productList = [...products];
  return productList.filter(({ categoryName }) => categoryName === "KIDS");
};

const categoryFilter = (productList, category) => {
  if (category) {
    if (category === "MEN") {
      return showCategoryMen(productList);
    } else if (category === "WOMEN") {
      return showCategoryWomen(productList);
    } else if (category === "KIDS") {
      return showCategoryKids(productList);
    } else {
      return [...productList];
    }
  } else {
    return productList;
  }
};

export { categoryFilter };
