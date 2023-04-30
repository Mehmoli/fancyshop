import Page from "../../Components/Page";

const apiUrl = 'https://fakestoreapi.com/products';

function Products(props) {

    return (
        <>
            <Page apiUrl={apiUrl} pageTitle={"Producten"} />
        </>
    );
}

export default Products;