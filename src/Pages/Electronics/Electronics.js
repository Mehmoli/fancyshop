import Page from "../../Components/Page/Page";

const apiUrl = 'https://fakestoreapi.com/products/category/electronics';

function Electronics() {

    return (
        <>
            <Page apiUrl={apiUrl} pageTitle={"Electronica"} />
        </>
    );
}

export default Electronics;