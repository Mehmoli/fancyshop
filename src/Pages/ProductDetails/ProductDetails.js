import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import prodDetailStyle from "./ProductDetails.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as HeartIcon } from "../../assets/Icons/heart.svg";
import Button from "../../Components/Button/Button";
import { ReactComponent as CartIcon } from "../../assets/Icons/shopping-cart.svg";
import Footer from "../../Components/Footer/Footer";
import { ProductsContext } from '../../BasketProductContext/ProductContext';
import { cartContext } from '../../BasketProductContext/BasketContext';


function ProductDetails(props) {
    const { dispatch } = useContext(cartContext);

    const params = useParams();
    const data = useContext(ProductsContext);
    const product = data[params.id - 1];

    return (

        <>
            <section className={prodDetailStyle.container}>
                <div className={prodDetailStyle.product_card}>
                    <h3>{product.title}</h3>
                    <div className={prodDetailStyle.product_photo}>
                        <img
                            className={prodDetailStyle.product_image}
                            alt='Afbeelding product'
                            src={product.image}
                        />

                    </div>
                    <div className={prodDetailStyle.product_text}>


                        <p>{product.description}</p>
                        <HeartIcon className={prodDetailStyle.product_heart_icon} />
                        <p className={prodDetailStyle.price}>€ {product.price}</p>

                        <Button
                            className={prodDetailStyle.btn_product_card}
                            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
                        >
                            In Winkelwagen
                            <CartIcon />
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}



export default ProductDetails;