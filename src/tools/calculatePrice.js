export const calculatePrice = (orders) => {
  if (orders === undefined) {
    return 0;
  } else if (orders.length === 0) {
    return 0;
  } else {
    return orders.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
  }
};
