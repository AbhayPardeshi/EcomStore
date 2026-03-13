export const genderFilter = (products, selectedGender) => {
  if (!selectedGender) {
    return products;
  }

  return products.filter((product) => {
    const productGender = product.gender?.toUpperCase();

    if (selectedGender === "MEN" || selectedGender === "WOMEN") {
      return (
        productGender === selectedGender || productGender === "UNISEX"
      );
    }

    return productGender === selectedGender;
  });
};
