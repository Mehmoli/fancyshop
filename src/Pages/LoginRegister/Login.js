import React from 'react';
import loginStyle from "./Login.module.css";
import basicStyle from "../Basic.module.css"
import Footer from "../../Components/Footer/Footer";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../AuthContext/AuthContextProvider';


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: email,
                password: password,
            });
            // log het resultaat in de console
            // console.log(result.data);

            // geef de JWT token aan de login-functie van de context mee
            login(result.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
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
                        {/*<p className={basicStyle.error}>{email}</p>*/}
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        {/*<p className={basicStyle.error}>{password}</p>*/}
                        {error && <p className={basicStyle.error}>Combinatie van emailadres en wachtwoord is onjuist</p>}

                        <button className={basicStyle.button_common} onClick={handleSubmit}>
                            Login
                        </button>
                    </form>
                    <Link to="/register">Nog geen account? Registreer nu</Link>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default Login;
