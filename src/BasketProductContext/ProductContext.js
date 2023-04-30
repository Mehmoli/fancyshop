import React, { useState, useEffect, createContext } from "react";
import { fetchProduct } from "../fetchdata/fetch";

export const ProductsContext = createContext();
const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProducts(await fetchProduct());
        };

        fetchData();
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;