import React, { useContext } from 'react';
import Button from '../Button/Button';
import { ReactComponent as CartIcon } from "../../assets/Icons/shopping-cart.svg";
import singleProductStyle from "./SingleProduct.module.css";
import { Link } from "react-router-dom";
import { textTrim } from '../../helpers/textTrim'
import { isInBasket } from '../../helpers/isInBasket'
import { cartContext } from "../../BasketProductContext/BasketContext";
import { ReactComponent as CrossIcon } from '../../assets/Icons/cross.svg';

function SingleProduct({ product }) {
    const { state, dispatch } = useContext(cartContext);
    const productPrice = product.price.toFixed(2);

    return (
        <section className={singleProductStyle.product_card}>
            <Link to={`/product-detail/${product.id}`}>
                <div className={singleProductStyle.product_photo}>
                    <img
                        className={singleProductStyle.product_image}
                        alt={`Afbeelding ${product.title}`}
                        src={product.image}
                    />
                </div>
            </Link>
            <div className={singleProductStyle.product_text}>
                <h2>€ {productPrice}</h2>
                <h4>{textTrim(product.title)}</h4>
                <p>{product.category}</p>

                {isInBasket(state, product.id) ?
                    (
                        <>
                            <CrossIcon className={singleProductStyle.btn_cross} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })} />
                            <Button
                                disabled='disabled'
                                className={singleProductStyle.btn_product_card}
                            >
                                In Winkelwagen
                                <CartIcon />
                            </Button>
                        </>
                    )
                    :
                    (
                        <Button
                            className={singleProductStyle.btn_product_card}
                            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
                        >
                            In Winkelwagen
                            <CartIcon />
                        </Button>
                    )}
            </div>
        </section>
    );
}

export default SingleProduct;