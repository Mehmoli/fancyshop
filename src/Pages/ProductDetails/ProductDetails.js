import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useContext } from "react";
import prodDetailStyle from "./ProductDetails.module.css";
import Button from "../../Components/Button/Button";
import { ReactComponent as CartIcon } from "../../assets/Icons/shopping-cart.svg";
import Footer from "../../Components/Footer/Footer";
import { ProductsContext } from '../../BasketProductContext/ProductContext';
import { cartContext } from '../../BasketProductContext/BasketContext';
import {ReactComponent as ArrowLeft} from "../../assets/Icons/arrowleft.svg";

function ProductDetails() {
    const { dispatch } = useContext(cartContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const params = useParams();
    const data = useContext(ProductsContext);
    const product = data[params.id - 1];

    return (
        <>
            <section className={prodDetailStyle.container}>
                <div className={prodDetailStyle.product_card}>
                    <button className={prodDetailStyle.btn_back} onClick={goBack}><ArrowLeft/>Terug</button>
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
                        <p className={prodDetailStyle.price}>€ {product.price.toFixed(2)}</p>
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