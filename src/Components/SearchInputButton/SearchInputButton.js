import './SearchInputButton.css';
import {FaSearch} from "react-icons/fa";

function SearchInputButton() {

    return (<>
            <li>
                <div className="search">
                    <input type="search" placeholder="Zoek" className="search-field"/>

                    <button type="submit" className="search-button">
                        <FaSearch size="0.8em"/>
                    </button>
                </div>
            </li>
        </>
    );
}

export default SearchInputButton;