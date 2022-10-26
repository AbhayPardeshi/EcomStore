export const newArrivalsFilter = (products) => {
  const productList = [...products];

  return productList.filter(({ isLatest }) => isLatest == true);
};
