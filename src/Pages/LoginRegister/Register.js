import React, {useState} from 'react';
import Footer from "../../Components/Footer/Footer";
import {Link, useNavigate} from 'react-router-dom';
import registerStyle from './Register.module.css'
import basicStyle from './../Basic.module.css'
import axios from "axios";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [registered, toggleRegistered] = useState(false);

    const [message, setMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

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
            await axios.post(`${process.env.REACT_APP_NOVI_BACKEND}auth/signup`, {
                username: email,
                email: email,
                password: password,
                role: ["user"]
            });

            setTimeout(() => {
                navigate('/login');
            }, 1000);

            toggleRegistered(true);

        } catch (error) {
            console.error(error);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>{loading ? <p>Loading...</p> :<>
            {registered ? <p> Successfully registered, redirecting...</p> :
            <section className={basicStyle.container}>
                <div className={registerStyle.register}>
                    <form>
                        <h1>Registreren</h1>
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
                            Register
                        </button>
                    </form>
                    <Link to="/login">Al een account? Login</Link>
                </div>
            </section>
            }
        </>
        }
            <Footer/>
        </>
    );
}

export default Register;
