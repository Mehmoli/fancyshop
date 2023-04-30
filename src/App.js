import './App.css';
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import MensFashion from "./Pages/MensFashion/MensFashion";
import LadiesFashion from "./Pages/LadiesFashion/LadiesFashion";
import Electronics from "./Pages/Electronics/Electronics";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Route, Routes } from 'react-router-dom';
import NotFound from "./Pages/NotFound";
import ShoppingBasket from "./Pages/ShoppingBasket";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile";



function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/mens-fashion" element={<MensFashion />} />
            <Route path="/ladies-fashion" element={<LadiesFashion />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/basket" element={<ShoppingBasket/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
  );
}

export default App;
