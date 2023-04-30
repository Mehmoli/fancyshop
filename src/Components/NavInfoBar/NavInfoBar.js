import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import navInfoBarStyle from "./NavInfoBar.module.css";
import { AuthContext } from "../../AuthContext/AuthContextProvider";

function NavInfoBar() {
    const [screenSize, setScreenSize] = useState(window.innerWidth > 1024);

    const screenMedia = () => {
        setScreenSize(window.innerWidth > 1024);
    };

    const { isAuth } = useContext(AuthContext);

    useEffect(() => {
        window.addEventListener("resize", screenMedia);
        return () => window.removeEventListener("resize", screenMedia);
    });

    return (
        <header>
            <nav className={navInfoBarStyle.nav_info_bar}>
                <ul className={navInfoBarStyle.nav_info_bar_items}>
                    {!screenSize ? <li>
                        Gratis verzending vanaf 50 euro
                    </li> : <>
                        <li>
                            Gratis verzending vanaf 50 euro
                        </li>
                        <li>
                            {!isAuth ?
                                <>
                                    <Link className={navInfoBarStyle.links} to="/login">inloggen </Link>
                                    of
                                    <Link className={navInfoBarStyle.links} to="/register"> registreren</Link>
                                </>
                                :
                                <Link className={navInfoBarStyle.links} to="/logout">uitloggen</Link>
                            }
                        </li>
                    </>}
                </ul>
            </nav>
        </header>
    );
}

export default NavInfoBar;