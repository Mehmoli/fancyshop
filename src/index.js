import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./AuthContext/AuthContextProvider";
import BasketContextProvider from './BasketProductContext/BasketContext';
import ProductsContextProvider from './BasketProductContext/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProductsContextProvider>
            <BasketContextProvider>
                <Router>
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                </Router>
            </BasketContextProvider>
        </ProductsContextProvider>
    </React.StrictMode>
);