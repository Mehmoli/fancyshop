import searchStyle from './SearchInputButton.module.css';
import { FaSearch } from "react-icons/fa";

function SearchInputButton() {

    return (<>
            <li>
                <div className={searchStyle.search}>
                    <input type="search" placeholder="Zoek" className={searchStyle.search_field} />
                    <button type="submit" className={searchStyle.search_button}>
                        <FaSearch size="0.8em" />
                    </button>
                </div>
            </li>
        </>
    );
}

export default SearchInputButton;