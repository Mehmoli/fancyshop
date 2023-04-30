import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate = useNavigate();

    const fetchUserData = useCallback(async (token, redirectUrl) => {
        try {
            console.log("fout?");
            console.log(token);
            const { data } = await axios.get(
                `https://frontend-educational-backend.herokuapp.com/api/user`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setIsAuth((prevAuth) => ({
                ...prevAuth,
                isAuth: true,
                user: {
                    username: data.username,
                    email: data.email,
                    id: data.id,
                },
                status: 'done',
            }));

            if (redirectUrl) {
                navigate(redirectUrl);
            }
        } catch (e) {
            console.error(e);

            setIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, [navigate]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwt_decode(token);
            console.log("token:" + token);
            console.log("sub:" + decoded.sub);
            fetchUserData(token);
        } else {
            setIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, [fetchUserData]);

    const login = useCallback((JWT) => {
        localStorage.setItem('token', JWT);

        fetchUserData(JWT, '/profile');
    }, [fetchUserData]);

    const logout = useCallback(() => {
        localStorage.clear();
        setIsAuth((prevAuth) => ({
            ...prevAuth,
            isAuth: false,
            user: null,
            status: 'done',
        }));

        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }, [navigate]);

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;