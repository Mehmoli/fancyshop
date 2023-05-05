import Page from "../../Components/Page/Page";

const apiUrl = 'https://fakestoreapi.com/products/category/';

function Jewellery() {

    return (
        <>
            <Page apiUrl={apiUrl} pageTitle={"Juwelen"} />
        </>
    );
}
export default Jewellery;