import Page from "../../Components/Page";

const apiUrl = 'https://fakestoreapi.com/products/category/men\'s clothing';

function MensFashion() {

    return (
        <>
            <Page apiUrl={apiUrl} pageTitle={"Heren Kleding"} />
        </>
    );
}

export default MensFashion;