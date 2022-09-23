export const brandFilter = (products, brands) => {
  if (brands.length && products.length) {
    const p = [];
    for (let product of products) {
      if (brands.includes(product.make)) {
        p.push(product);
      }
    }
    return p;
  } else {
    return products;
  }
};
