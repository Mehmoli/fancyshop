import React from 'react';
import headerBarStyle from "./HeaderBar.module.css";
import HeaderImage from "../../assets/headerimage-300.png";

function HeaderBar() {
    return (
        <section className={headerBarStyle.header_bar}>
            <img className={headerBarStyle.header_image} alt="logo" src={HeaderImage} />
        </section>
    );
}

export default HeaderBar;