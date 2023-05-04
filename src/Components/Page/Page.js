import React, { useContext, useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import Footer from '../Footer/Footer';
import pageStyle from './Page.module.css';
import { ProductsContext } from '../../BasketProductContext/ProductContext';
import Pagination from '../Pagination/Pagination';

function Page({ pageTitle, category, limit }) {
    const products = useContext(ProductsContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const [sortOption, setSortOption] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState('');

    const getRandomProducts = (products, limit) => {
        const shuffledProducts = products.sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, limit);
    };

    const sortProducts = (products, sortOption) => {
        if (sortOption === 'titleAsc') {
            return products.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === 'titleDesc') {
            return products.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortOption === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else {
            return products;
        }
    };

    useEffect(() => {
        if (products) {
            // Filter, sort, and shuffle the products as before
            const filteredProducts = products.filter((product) => {
                return category ? product.category === category : true;
            });
            const sortedProducts = sortProducts(filteredProducts, sortOption);
            const productsToDisplay = limit
                ? getRandomProducts(sortedProducts, limit)
                : sortedProducts;

            // Calculate the index of the first and last items to display
            const lastIndex = currentPage * itemsPerPage;
            const firstIndex = lastIndex - itemsPerPage;
            // console.log(lastIndex);

            // Set the displayed products to a slice of the products to display
            const displayedProducts = productsToDisplay.slice(firstIndex, lastIndex);
            setDisplayedProducts(displayedProducts);
        }
    }, [products, category, limit, sortOption, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    // setCurrentPage(totalPages);
    // console.log(totalPages)

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <section className={pageStyle.products}>
                <h1>{pageTitle}</h1>
                <div>
                    {pageTitle === "Producten" && (

                        <div className={pageStyle.sort_select}>

                            <label htmlFor="sort">Sorteren op:</label>
                            <select
                                id="sort"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option value="">Standaard</option>
                                <option value="titleAsc">Op naam A-Z</option>
                                <option value="titleDesc">Op naam Z-A</option>
                                <option value="priceAsc">Prijs laag naar Hoog</option>
                                <option value="priceDesc">Prijs hoog naar laag</option>
                            </select>

                        </div>




                    )}

                    <div className={pageStyle.product_cards}>
                        {displayedProducts ? (
                            <>
                                {displayedProducts.map((product) => {
                                    return (
                                        <SingleProduct product={product} key={product.id} />
                                    );
                                })}
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                        {pageTitle === "Producten" && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />)}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Page;
