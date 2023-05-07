import searchStyle from './SearchInputButton.module.css';
import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import { ProductsContext } from "../../BasketProductContext/ProductContext";
import { useNavigate } from "react-router-dom";

function SearchInputButton() {
    const products = useContext(ProductsContext);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value === "") {
            // Do nothing
        } else {
            const filtered = products.filter(
                product => {
                    return (
                        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }
            );
            navigate('/search', { state: { filteredProducts: filtered } });
        }
    };

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
        </>
    );
}

export default SearchInputButton;