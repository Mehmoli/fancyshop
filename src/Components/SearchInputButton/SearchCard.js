import React from 'react';
import SingleProduct from "../SingleProduct/SingleProduct";

function SearchCard({ product }) {
    return (
        <SingleProduct product={product} key={product.id} />
    );
}

export default SearchCard;