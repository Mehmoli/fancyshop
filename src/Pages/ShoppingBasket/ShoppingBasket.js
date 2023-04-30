import React from 'react';
import shoppingBasketStyle from "./ShoppingBasket.module.css";
import Footer from "../../Components/Footer/Footer";
import BasketItem from '../../Components/Basket/BasketItem';
import CheckOut from '../../Components/Basket/CheckOut';
import { useContext } from 'react';
import { cartContext } from '../../BasketProductContext/BasketContext';
import { Link } from 'react-router-dom';

function ShoppingBasket() {
    const { state } = useContext(cartContext);
    return (
        <>
            <section className={shoppingBasketStyle.shopping_cart}>
                <h1 className={shoppingBasketStyle.title}>Uw bestelling</h1>
                {state.selectedItems.map((item) => (
                    <BasketItem key={item.id} data={item} />
                ))}
                {state.selectedItems.length >= 1 && (
                    <CheckOut />
                )}
                {state.selectedItems.length < 1 &&
                    (
                        <>
                            <p>Uw bestelling wordt, zo spoedig mogelijk verzonden !</p>

                            <h2><Link to="/products">--Naar Shop--</Link></h2>
                        </>
                    )}
            </section>
            <Footer />
        </>
    );
}

export default ShoppingBasket;