import React, { useContext } from 'react';
import shoppingBasketStyle from "../../Pages/ShoppingBasket/ShoppingBasket.module.css";
import { cartContext } from "../../BasketProductContext/BasketContext";

function CheckOut() {
    const { state, dispatch } = useContext(cartContext)

    return (

        <div className={shoppingBasketStyle.checkout}>
            <p><strong>Totaal prijs voor {state.itemCount} producten</strong><span
                className={shoppingBasketStyle.total_amount}><strong>{state.total}</strong></span></p>
            <button className={shoppingBasketStyle.btn_checkout} type="submit" onClick={() => dispatch({ type: "CHECKOUT" })}>Checkout</button>

        </div>
    );
}

export default CheckOut;
