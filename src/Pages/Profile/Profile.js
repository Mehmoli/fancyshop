import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContextProvider';
import axios from 'axios';
import profileStyle from './Profile.module.css'
import Footer from "../../Components/Footer/Footer";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get(`${process.env.REACT_APP_NOVI_BACKEND}user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        void fetchProfileData();
    }, [])

    return (
        <>
            <section className={profileStyle.container}>
                <h1 className={profileStyle.title}>Profielpagina</h1>
                <div className={profileStyle.profile}>
                    <h3>Uw persoonlijke gegevens</h3>

                    <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>

                    {Object.keys(profileData).length > 0 &&
                        <h3>---------------------------------</h3>}
                    <p>Terug naar de <Link to="/">Homepagina</Link></p>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Profile;