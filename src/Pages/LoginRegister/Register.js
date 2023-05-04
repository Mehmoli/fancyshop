import React, { useState } from 'react';
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate} from 'react-router-dom';
import registerStyle from './Register.module.css'
import basicStyle from './../Basic.module.css'
import axios from "axios";


function Register() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                username: email,
                email: email,
                password: password,
                role: ["user"]
            });
            navigate('/login');
        } catch (error) {
            console.error(error);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>
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

                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className={basicStyle.error}>Dit account bestaat al. Probeer een ander emailadres.</p>}
                        <button className={basicStyle.button_common} onClick={handleSubmit}>
                            Register
                        </button>
                    </form>
                    <Link to="/login">Al een account? Login</Link>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Register;
