import paginationStyle from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className={paginationStyle.pagination}>
            {pageNumbers.map((pageNumber) => {
                return (
                    <>
                        <li className={paginationStyle.pageNumbers} key={pageNumber}>
                            <button
                                className={pageNumber === currentPage ? paginationStyle.active : ''}
                                onClick={() => onPageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        </li>

                    </>
                );
            })
            }
        </ul >
    );
}

export default Pagination;
