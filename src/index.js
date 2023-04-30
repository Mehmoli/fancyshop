import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
