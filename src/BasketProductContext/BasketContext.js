import React, { useReducer, createContext } from "react";

const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false,
};

const sumItems = (items) => {
    const itemCounter = items.reduce(
        (total, product) => total + product.quantity,
        0
    );
    const total = items
        .reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2);
    return { itemCounter, total };
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
                state.selectedItems.push({ ...action.payload, quantity: 1 });
                console.log(state);
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            };
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(
                (item) => item.id !== action.payload.id
            );
            console.log(state);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems),
                checkout: false
            };
        case "INCREASE":

            const IndexI = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            const increasedItems = state.selectedItems.map((item, index) =>
                index === IndexI ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { ...state, selectedItems: increasedItems, ...sumItems(increasedItems) };
        case "DECREASE":
            const IndexD = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            const decreasedItems = state.selectedItems.map((item, index) =>
                index === IndexD ? { ...item, quantity: item.quantity - 1 } : item
            );
            return { ...state, selectedItems: decreasedItems, ...sumItems(decreasedItems) };
        case "CHECKOUT":
            console.log(state);
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true,
            };
        case "CLEAR":
            console.log(state);
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false,
            };
        default:
            return state;
    }
};

export const cartContext = createContext();

const BasketContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    );
};

export default BasketContextProvider;