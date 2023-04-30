import React, { useContext, useEffect, useState } from 'react';
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Footer from "../Components/Footer/Footer";
import pageStyle from './Page.module.css';
import { ProductsContext } from '../BasketProductContext/ProductContext';

function Page({ pageTitle, category, limit }) {
    const products = useContext(ProductsContext);

    const [displayedProducts, setDisplayedProducts] = useState(null);

    const getRandomProducts = (products, limit) => {
        const shuffledProducts = products.sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, limit);
    };

    useEffect(() => {
        if (products) {
            const filteredProducts = products.filter((product) => {
                return category ? product.category === category : true;
            });

            const productsToDisplay = limit ? getRandomProducts(filteredProducts, limit) : filteredProducts;
            setDisplayedProducts(productsToDisplay);
        }
    }, [products, category, limit]);

    return (
        <>
            <section className={pageStyle.products}>
                <h1>{pageTitle}</h1>
                <div className={pageStyle.product_cards}>
                    {displayedProducts ? (
                        <>
                            {displayedProducts.map((product) => {
                                return <SingleProduct
                                    product={product}
                                    key={product.id}
                                />;
                            })}
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Page;
