import Page from "../../Components/Page";

const apiUrl = 'https://fakestoreapi.com/products/category/electronics';

function Electronics(props) {

    return (
        <>
            <Page apiUrl={apiUrl} pageTitle={"Electronica"} />
        </>
    );
}

export default Electronics;