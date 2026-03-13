export const buildProductsUrl = (baseQuery = {}, filterState = {}) => {
  const params = new URLSearchParams();

  Object.entries(baseQuery).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, String(value));
    }
  });

  filterState.brandName?.forEach((brand) => {
    params.append("brand", brand);
  });

  filterState.productColors?.forEach((color) => {
    params.append("color", color);
  });

  filterState.productPriceRanges?.forEach((range) => {
    params.append("priceRange", range);
  });

  if (filterState.selectedGender && !baseQuery.gender) {
    params.set("gender", filterState.selectedGender.toLowerCase());
  }

  const queryString = params.toString();

  return queryString ? `/api/products?${queryString}` : "/api/products";
};
