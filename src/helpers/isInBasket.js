export const isInBasket = (state, id) => {
    return !!state.selectedItems.find((item) => item.id === id);
};