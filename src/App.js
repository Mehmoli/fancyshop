import './App.css';
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/LoginRegister/Login";
import Register from "./Pages/LoginRegister/Register";
import Logout from "./Pages/LoginRegister/Logout";
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from "./Pages/NotFound";
import ShoppingBasket from "./Pages/ShoppingBasket/ShoppingBasket";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import Page from "./Components/Page/Page";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthContextProvider";
import SearchPage from "./Components/SearchInputButton/SearchPage";

function App() {
    const { isAuth } = useContext(AuthContext);
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productdetails" element={<ProductDetails />} />
                <Route path="/mens-fashion" element={<Page pageTitle={"Heren Mode"} category={"men's clothing"} />} />
                <Route path="/ladies-fashion" element={<Page pageTitle={"Dames Mode"} category={"women's clothing"} />} />
                <Route path="/jewellery" element={<Page pageTitle={"Juwelen"} category={"jewelery"} />} />
                <Route path="/electronics" element={<Page pageTitle={"Electronica"} category={"electronics"} />} />
                <Route path="/product-detail/:id" element={<ProductDetails />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to='/' />} />
                <Route path="/basket" element={<ShoppingBasket />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
