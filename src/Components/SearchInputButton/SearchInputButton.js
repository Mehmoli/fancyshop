import searchStyle from './SearchInputButton.module.css';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../BasketProductContext/ProductContext";
import { useNavigate } from "react-router-dom";
import SearchList from './SearchList';

function SearchInputButton({ all }) {
    const products = useContext(ProductsContext);
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value === "") {
            setDisplayedProducts(false);
        } else {
            setFilteredProducts(products.filter(
                product => {
                    return (
                        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }
            ));
            setDisplayedProducts(true);
            navigate({
                pathname: '/search',
                state: { filteredProducts: filteredProducts }
            });
        }
    };


    function searchList() {
        if (displayedProducts) {
            return (
                <SearchList filteredProducts={filteredProducts} />
            );
        }
    }


    return (
        <>
            <li>
                <div className={searchStyle.search}>
                    <input
                        type="search"
                        placeholder="Zoek"
                        value={searchQuery}
                        className={searchStyle.search_field}
                        onChange={handleSearch}
                    />
                    <button type="submit" className={searchStyle.search_button}>
                        <FaSearch size="0.8em" />
                    </button>
                </div>
            </li>
            {searchList()}
        </>
    );
}
export default SearchInputButton;