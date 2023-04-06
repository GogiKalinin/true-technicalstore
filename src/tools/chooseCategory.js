export const chooseCategory = (
    setShowMainElements,
    productArray,
    input_value,
    setAllProducts
  ) => {
    console.log(input_value)
    setShowMainElements(false);
    const selectedCategoryElem = [];
    for (let i = 0; i < productArray.length; i++) {
      if (input_value === productArray[i].name) {
        selectedCategoryElem.push(productArray[i]);
        console.log(selectedCategoryElem)
      }
    }
    setAllProducts(selectedCategoryElem);
    // console.log(productArray);
    // console.log(input_value);
    // console.log(setAllProducts);
    // const prepareArray = [];
    // prepareArray = (input_value) => productArray.fiter(product => product.name.includes(input_value))
    // setAllProducts(prepareArray)
    //   const find_product = (name) => products.filter(product => product.name.includes(name))
};
  