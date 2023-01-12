export const setBasketToLocalStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket))
}