import React from 'react';
import { useContext, useEffect } from "react";
import { AuthContext } from '../../AuthContext/AuthContextProvider';

function Logout() {
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        console.log("hallo hiero")
        const timer = setTimeout(() => {
            logout();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [])

    return (
        <>
            <div>U bent uitgelogd!</div>
        </>
    );
}

export default Logout;
