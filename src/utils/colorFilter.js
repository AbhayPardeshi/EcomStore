export const colorFilter = (products, selectedColors) => {
  if (!selectedColors.length) return products;

  return products.filter((product) =>
    product.varients?.variantList?.some((variant) =>
      selectedColors.includes(variant.color?.toUpperCase()),
    ),
  );
};

