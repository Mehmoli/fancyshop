import React, { useContext } from "react";
import shoppingBasketStyle from "../../Pages/ShoppingBasket/ShoppingBasket.module.css";
import { ReactComponent as Plus } from "../../assets/Icons/plus.svg";
import { ReactComponent as Minus } from "../../assets/Icons/minus.svg";
import { ReactComponent as Cross } from "../../assets/Icons/cross.svg";
import { cartContext } from "../../BasketProductContext/BasketContext";
import { textTrim } from "../../helpers/textTrim";

const BasketItem = ({ data }) => {
    const { title, image, quantity, price } = data;
    const { dispatch } = useContext(cartContext);
    const productPrice = (quantity * price).toFixed(2);

    return (
        <div className={shoppingBasketStyle.item}>
            <div className={shoppingBasketStyle.image}>
                <img src={image} alt={textTrim(title)} />
            </div>
            <div className={shoppingBasketStyle.description}>
                <span>{textTrim(title)}</span>
            </div>
            <div className={shoppingBasketStyle.quantity}>
                <Plus className={shoppingBasketStyle.btn_plus} onClick={() => dispatch({ type: "INCREASE", payload: data })} />
                <div className={shoppingBasketStyle.count_digit}>{quantity}</div>
                {quantity > 1
                    ? (
                        <Minus className={shoppingBasketStyle.btn_minus} onClick={() => dispatch({ type: "DECREASE", payload: data })} />
                    ) : (
                        <Minus className={shoppingBasketStyle.btn_minus} disabled="disabled" />
                    )}
            </div>
            <div className={shoppingBasketStyle.price_delete}>
                <div className={shoppingBasketStyle.total_price}>{productPrice}</div>
                <Cross className={shoppingBasketStyle.btn_cross} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })} />
            </div>
        </div>
    );
};

export default BasketItem;