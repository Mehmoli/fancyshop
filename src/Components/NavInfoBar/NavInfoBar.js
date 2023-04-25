import React from 'react';
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import "./NavInfoBar.css";

function NavInfoBar() {

    const [screenSize, setScreenSize] = useState(window.innerWidth > 1024);

    const screenMedia = () => {
        setScreenSize(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", screenMedia);
        return () => window.removeEventListener("resize", screenMedia);
    });


    return (
        <header>
        <nav className='nav-info-bar'>
            <ul className="nav-info-bar-items">
                {!screenSize ? <li>
                    Gratis verzending vanaf 50 euro
                </li> : <>
                    <li>
                        Gratis verzending vanaf 50 euro
                    </li>
                    <li>
                        <Link to="/login">inloggen </Link>of<Link to="/register"> registreren</Link>
                    </li>
                </>}
            </ul>
        </nav>
    </header>
    );
}

export default NavInfoBar;