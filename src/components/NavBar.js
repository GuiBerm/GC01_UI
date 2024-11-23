import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfilesApi from '../api/client_user/src/api/ProfilesApi';
import ApiClient from '../api/client_user/src/ApiClient';
import '../styles/navBarStyles.css';

import logo from './images/toniflix.png';
import avatar from './images/user.png';

function NavBar() {
    const { auth } = useAuth(); // Access auth context
    const [profileName, setProfileName] = useState('');
    const apiClient = new ApiClient();
    const profilesApi = new ProfilesApi(apiClient);

    // Fetch the profile name based on the profileId
    useEffect(() => {
        if (!auth.profileId) return;

        profilesApi.usersUserIdProfilesGet(auth.userId, (error, profiles) => {
            if (error) {
                console.error('Error fetching profiles:', error);
            } else {
                const activeProfile = profiles.find((profile) => profile.id === auth.profileId);
                setProfileName(activeProfile ? activeProfile.name : 'Profile');
            }
        });
    }, [auth.profileId, auth.userId, profilesApi]);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar__content">
                {/* Logo */}
                <div className="navbar__logo">
                    <Link to="/user/main">
                        <img src={logo} alt="ToniFlix Logo" />
                    </Link>
                </div>

                {/* Profile Section */}
                <div className="navbar__user">
                    <span className="navbar__profile-name">{profileName}</span>
                    <img src={avatar} alt="User Avatar" onClick={toggleMenu} />
                    {menuOpen && (
                        <nav className="navbar__dropdown">
                            <ul>
                                <li>
                                    <Link to="/user/profile" onClick={() => setMenuOpen(false)}>Profiles</Link>
                                </li>
                                <li>
                                    <Link to="/logout" onClick={() => setMenuOpen(false)}>Log Out</Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}

export default NavBar;
