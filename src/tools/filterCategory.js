export const selectNavItem = (
  setShowMainElements,
  productArray,
  name,
  setAllProducts,
  navigationItems,
  setNavigationItems
) => {
  setShowMainElements(false);
  const selectedCategoryElem = [];
  for (let i = 0; i < productArray.length; i++) {
    if (name === productArray[i].category) {
      selectedCategoryElem.push(productArray[i]);
    }
  }
  setAllProducts(selectedCategoryElem);

  const updatedNavigationItems = [];
  for (let i = 0; i < navigationItems.length; i++) {
    const newNavigationItem = navigationItems[i];
    if (navigationItems[i].name === name) {
      newNavigationItem.active = true;
    } else {
      newNavigationItem.active = false;
    }
    updatedNavigationItems.push(newNavigationItem);
  }
  setNavigationItems(updatedNavigationItems);
  localStorage.setItem("nowCategory", name);
};
