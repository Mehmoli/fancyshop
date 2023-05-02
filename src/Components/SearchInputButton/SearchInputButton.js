import searchStyle from './SearchInputButton.module.css';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../BasketProductContext/ProductContext";
import {useNavigate} from "react-router-dom";


function SearchInputButton({ all }) {
    const products = useContext(ProductsContext);


    const [searchQuery, setSearchQuery] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState([]);

    useEffect(() => {
        if (products) {
            const productsToDisplay = all
                ? products.filter((product) => product.category === all)
                : products;

            if (searchQuery) {
                const searchResults = productsToDisplay.filter((product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase()));

                setDisplayedProducts(searchResults);
            } else {
                setDisplayedProducts(displayedProducts);
            }
        }

    }, [displayedProducts, products, searchQuery, all]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    console.log(searchQuery);

    return (
        <>

            <li>
                <div className={searchStyle.search}>
                    <input
                        type="search"
                        placeholder="Zoek"
                        className={searchStyle.search_field}
                        onChange={handleSearch}
                    />
                    <button type="submit" className={searchStyle.search_button}>
                        <FaSearch size="0.8em" />
                    </button>
                </div>
            </li>

            </>

    );
}


export default SearchInputButton;
