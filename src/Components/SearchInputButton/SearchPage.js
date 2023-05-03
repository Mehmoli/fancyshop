import React from 'react';
import SearchList from './SearchList';

function SearchPage({ filteredProducts, displayedProducts, }) {
    return (
        <div>
            <h1>Search Results:</h1>
            {displayedProducts &&
                <SearchList filteredProducts={filteredProducts} />}

        </div>
    )
}

export default SearchPage;

