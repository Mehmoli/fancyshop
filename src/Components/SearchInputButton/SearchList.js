import React from 'react';
import SearchCard from './SearchCard';

function SearchList({ filteredProducts }) {
    const filtered = filteredProducts.map(product => <SearchCard key={product.id} product={product} />);
    console.log(filtered.length);

    const filteredContent = filtered?.length ? filtered : <p>Geen resultaten!</p>
    return (
        <div>
            {filteredContent}
        </div>
    );
}

export default SearchList;