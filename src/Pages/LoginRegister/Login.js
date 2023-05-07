import React from 'react';
import loginStyle from "./Login.module.css";
import basicStyle from "../Basic.module.css"
import Footer from "../../Components/Footer/Footer";
import {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../../AuthContext/AuthContextProvider';

function Login() {
    const [loading, toggleLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [message, setMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const {login} = useContext(AuthContext);

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    async function handleSubmit(e) {
        e.preventDefault();
        toggleLoading(false);
        if (regEx.test(email)) {
            setMessage("");
        } else if (!regEx.test(email) && email !== "") {
            setMessage("Email is niet geldig");
        }

        setPasswordError(false);
        if (password.length < 6) {
            setPasswordError(true);
        }

        try {
            const result = await axios.post(`${process.env.REACT_APP_NOVI_BACKEND}auth/signin`, {
                username: email,
                email: email,
                password: password,
            });

            login(result.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            {loading ? <p>Loading...</p> :
                <section className={basicStyle.container}>
                    <div className={loginStyle.login}>
                        <form>
                            <h1>Login</h1>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {error && <p className={basicStyle.error}>{message}</p>}
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError &&
                                <p className={basicStyle.error}>Wachtwoord is te kort! Minimaal 6 characters</p>}
                            <button className={basicStyle.button_common} onClick={handleSubmit}>
                                Login
                            </button>
                        </form>
                        <Link to="/register">Nog geen account? Registreer nu</Link>
                    </div>
                </section>}
            <Footer/>
        </>
    );
}

export default Login;
