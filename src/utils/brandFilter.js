export const brandFilter = (products, brands) => {
  if (brands.length && products.length) {
    const p = [];
    for (let product of products) {
      if (brands.includes(product.brand.toUpperCase())) {
        p.push(product);
      }
    }
    return p;
  } else {
    return products;
  }
};
