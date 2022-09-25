export const priceFilter = (products, range) => {
  if (range) {
    if (range.length && products.length) {
      const r = [];
      products.forEach((product) => {
        for (let i = 0; i < range.length; i++) {
          const value = range[i].split(",").map((x) => Number(x));
          if (
            product.originalPrice >= value[0] &&
            product.originalPrice <= value[1]
          ) {
            r.push(product);
          }
        }
      });
      return r;
    } else {
      return products;
    }
  }
};
