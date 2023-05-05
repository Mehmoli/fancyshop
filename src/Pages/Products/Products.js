import Page from "../../Components/Page/Page";

const apiUrl = 'https://fakestoreapi.com/products';

function Products() {

    return (
        <>
            <Page apiUrl={apiUrl} pageTitle={"Producten"} />
        </>
    );
}

export default Products;