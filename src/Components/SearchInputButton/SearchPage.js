import React from 'react';
import SearchList from './SearchList';
import { useLocation } from 'react-router-dom';
import pageStyle from "../Page/Page.module.css";
import Footer from "../Footer/Footer";

function SearchPage() {
    const location = useLocation();
    const { filteredProducts } = location.state || {};

    return (
        <>
        <section className={pageStyle.products}>
            <h1>Zoek Resultaten</h1>
                <div className={pageStyle.product_cards}>
                    {filteredProducts && <SearchList filteredProducts={filteredProducts} />}
                </div>
        </section>
    <Footer />
        </>
    )
}

export default SearchPage;

