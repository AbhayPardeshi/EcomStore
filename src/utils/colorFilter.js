export const colorFilter = (products, colors) => {
  if (colors.length && products.length) {
    const color = [];
    for (let product of products) {
      if (colors.includes(product.productColor.toUpperCase())) {
        color.push(product);
      }
    }
    return color;
  } else {
    return products;
  }
};
