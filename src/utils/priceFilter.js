export const priceFilter = (products, range) => {
  if (range) {
    if (range.length && products.length) {
      const r = [];
      products.forEach((product) => {
        for (let i = 0; i < range.length; i++) {
          const value = range[i].split(",").map((x) => Number(x));
          console.log("price",product.productPricing.originalPrice);
          if (
            product.productPricing.originalPrice >= value[0] &&
            product.productPricing.originalPrice <= value[1]
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
