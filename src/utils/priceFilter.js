export const priceFilter = (products, range) => {
  if (range.length && products.length) {
    const r = [];
    products.forEach((product) => {
      for (let i = 0; i < range.length; i++) {
        if (
          product.originalPrice >= range[i]?.[0] &&
          product.originalPrice <= range[i]?.[1]
        ) {
          r.push(product);
        }
      }
    });
    return r;
  } else {
    return products;
  }
};
