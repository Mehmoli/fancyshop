import React, { useState, useEffect, createContext } from "react";
import { fetchProduct } from "../fetchdata/fetch";

export const ProductsContext = createContext();
const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProducts(await fetchProduct());
        };

        void fetchData();
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;