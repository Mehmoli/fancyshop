import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import SearchInputButton from "../SearchInputButton/SearchInputButton";
import {ReactComponent as Logo} from "../../assets/Icons/logofancyshop.svg";
import {ReactComponent as Question} from "../../assets/Icons/questionmark.svg";
import {ReactComponent as ShoppingBasket} from "../../assets/Icons/shoppingbasket.svg";
import {ReactComponent as Hamburger} from "../../assets/Icons/hamburger.svg";
import {ReactComponent as Cross} from "../../assets/Icons/cross.svg";
import {ReactComponent as Heart} from "../../assets/Icons/heart.svg";
import {ReactComponent as User} from "../../assets/Icons/user.svg";
import "./Navbar.css";
import NavInfoBar from "../NavInfoBar/NavInfoBar";
import HeaderBar from "../HeaderBar/HeaderBar";

function Navbar(props) {

    const [mobile, setMobile] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth >= 1024);

    const screenMedia = () => {
        setScreenSize(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", screenMedia);
        return () => window.removeEventListener("resize", screenMedia);
    });

    return (<>
        <header>
            <NavInfoBar/>
            <nav className='navbar-icons'>
                <Logo className="logo"/>
                <ul className={!screenSize ? "nav-search-bar-mobile" : "nav-search-bar"}>
                    {!screenSize ? null : <SearchInputButton/>}
                    <NavLink to='/products' className='products'>
                    </NavLink>
                    <NavLink to='/contact' className='contact'>
                        <li>{screenSize ? <span className="icon-text">Klantenservice</span> : null}<span
                            className="icon-bar-icons"> <Question/></span></li>
                    </NavLink>
                    <NavLink to='/login' className='login'>
                        <li>{screenSize ? <span className="icon-text">Favorieten</span> : null}<span
                            className="icon-bar-icons"> <Heart/></span></li>
                    </NavLink>
                    <NavLink to='/basket' className='shopping-basket'>
                        <li>{screenSize ? <span className="icon-text">Winkelmand</span> : null}<span
                            className="icon-bar-icons"> <ShoppingBasket/></span></li>
                    </NavLink>
                    <NavLink to='/profile' className='profile'>
                        <li>{screenSize ? <span className="icon-text">Account</span> : null}<span
                            className="icon-bar-icons"> <User/></span></li>
                    </NavLink>
                    <li>
                        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
                            {mobile ? <span className="icon-bar-icons"><Cross/></span> :
                                <span className="icon-bar-icons"><Hamburger/></span>}
                        </button>

                    </li>
                </ul>

            </nav>


            <nav className='navbar-menu'>
                <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <NavLink to='/' className='home'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/products' className='products'>
                        <li>Producten</li>
                    </NavLink><NavLink to='/mens-fashion' className='mens-fashion'>
                    <li>Heren mode</li>
                </NavLink>
                    <NavLink to='/ladies-fashion' className='ladies-fashion'>
                        <li>Dames mode</li>
                    </NavLink>
                    <NavLink to='/electronics' className='electronics'>
                        <li>Electronica</li>
                    </NavLink>
                    <NavLink to='/contact' className='contact'>
                        <li>Contact</li>
                    </NavLink>
                </ul>

                <ul>
                    {/*Plaats zoekveld in plaats van menu*/}
                    {!screenSize ? <SearchInputButton/> : null}
                </ul>
            </nav>
            <HeaderBar/>
        </header>
    </>);
}


export default Navbar;