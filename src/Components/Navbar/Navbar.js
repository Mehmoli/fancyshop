import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import SearchInputButton from "../SearchInputButton/SearchInputButton";
import { ReactComponent as Logo } from "../../assets/Icons/logofancyshop.svg";
import { ReactComponent as Question } from "../../assets/Icons/questionmark.svg";
import { ReactComponent as ShoppingBasket } from "../../assets/Icons/shoppingbasket.svg";
import { ReactComponent as Hamburger } from "../../assets/Icons/hamburger.svg";
import { ReactComponent as Cross } from "../../assets/Icons/cross.svg";
import { ReactComponent as Heart } from "../../assets/Icons/heart.svg";
import { ReactComponent as User } from "../../assets/Icons/user.svg";
import {ReactComponent as CheckMark} from "../../assets/Icons/checkmark.svg";
import navbarStyle from "./Navbar.module.css";
import NavInfoBar from "../NavInfoBar/NavInfoBar";
import { cartContext } from '../../BasketProductContext/BasketContext';
import {AuthContext} from "../../AuthContext/AuthContextProvider";


function Navbar(props) {
    const { isAuth } = useContext(AuthContext);

    const [mobile, setMobile] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth >= 1024);

    const screenMedia = () => {
        setScreenSize(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", screenMedia);
        return () => window.removeEventListener("resize", screenMedia);
    });
    const { state } = useContext(cartContext);

    return (<>
        <header>
            <NavInfoBar />
            <nav className={navbarStyle.navbar_icons}>
                <Link to={"/"}>
                    <Logo className={navbarStyle.logo} />
                </Link>
                <ul className={!screenSize ? `${navbarStyle.nav_search_bar_mobile}` : `${navbarStyle.nav_search_bar}`}>
                    {!screenSize ? null : <SearchInputButton />}
                    <NavLink to='/products' className={navbarStyle.products}>
                    </NavLink>
                    <NavLink to='/contact' className={navbarStyle.contact}>
                        <li>{screenSize ? <span className={navbarStyle.icon_text}>Klantenservice</span> : null}<span
                            className={navbarStyle.icon_bar_icons}> <Question /></span></li>
                    </NavLink>
                    <NavLink to='/login' className='login'>
                        <li>{screenSize ? <span className={navbarStyle.icon_text}>Favorieten</span> : null}<span
                            className={navbarStyle.icon_bar_icons}> <Heart /></span></li>
                    </NavLink>
                    <NavLink to='/basket' className={navbarStyle.shopping_basket}>
                        <li>{screenSize ? <span className={navbarStyle.icon_text}>Winkelmand</span> : null}<span
                            className={navbarStyle.icon_bar_icons}><ShoppingBasket />

                            {/* Navbar basket green popup product */}
                            {state.itemCounter > 0 && <i className={navbarStyle.basket}>{state.itemCounter}</i>}
                        </span></li>
                    </NavLink>
                    <NavLink to='/profile' className={navbarStyle.profile}>
                        <li>{screenSize ? <span className={navbarStyle.icon_text}>Account</span> : null}<span
                            className={navbarStyle.icon_bar_icons}><User />
                            {isAuth ? <CheckMark className={navbarStyle.checkmark}/> :null}</span></li>
                    </NavLink>
                    <li>
                        <button className={navbarStyle.mobile_menu_icon} onClick={() => setMobile(!mobile)}>
                            {mobile ? <span className={navbarStyle.icon_bar_icons}><Cross /></span> :
                                <span className={navbarStyle.icon_bar_icons}><Hamburger /></span>}
                        </button>

                    </li>
                </ul>

            </nav>

            <nav className={navbarStyle.navbar_menu}>
                <ul className={mobile ? `${navbarStyle.nav_links_mobile}` : `${navbarStyle.nav_links}`}
                    onClick={() => setMobile(false)}>
                    <NavLink to='/' className={navbarStyle.home}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/products' className={navbarStyle.products}>
                        <li>Producten</li>
                    </NavLink><NavLink to='/mens-fashion' className={navbarStyle.mens_fashion}>
                    <li>Heren mode</li>
                </NavLink>
                    <NavLink to='/ladies-fashion' className={navbarStyle.ladies_fashion}>
                        <li>Dames mode</li>
                    </NavLink>
                    <NavLink to='/jewellery' className={navbarStyle.jewellery}>
                        <li>Juwelen</li>
                    </NavLink>
                    <NavLink to='/electronics' className={navbarStyle.electronics}>
                        <li>Electronica</li>
                    </NavLink>
                    <NavLink to='/contact' className={navbarStyle.contact}>
                        <li>Contact</li>
                    </NavLink>
                </ul>

                <ul>
                    {!screenSize ? <SearchInputButton /> : null}
                </ul>
            </nav>

        </header>
    </>);
}


export default Navbar;