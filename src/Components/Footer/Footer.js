import React from 'react';
import footerStyle from './Footer.module.css'

function Footer(props) {
    return (
        <footer className={footerStyle.footer}>
            <div>
                <span>&copy; Fancyshop 2023</span>
            </div>
            <div>
                <span>A Fancyshop organisation</span>
            </div>

        </footer>
    );
}

export default Footer;