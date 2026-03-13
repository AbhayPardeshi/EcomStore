export const newArrivalsFilter = (products) => {
  const productList = [...products];

  return productList;
  // for now as i dont have any date field in the product data to filter the products based on the latest arrivals,
  //  i am just returning the whole product list. once i have the date field in place, i can easily filter the products 
  // based on that field to get the latest arrivals.
  
  //return productList.filter(({ isLatest }) => isLatest === true);
};
