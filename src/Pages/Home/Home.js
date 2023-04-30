import HeaderBar from "../../Components/HeaderBar/HeaderBar";
import Page from "../../Components/Page";

function Home() {
    return (
        <>
            <HeaderBar />
            <Page pageTitle={"Uitgelichte Producten"} limit={4} />
        </>
    );
}

export default Home;