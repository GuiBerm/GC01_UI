import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UsersApi from '../api/client_user/src/api/UsersApi'; // Import UsersApi
import ApiClient from '../api/client_user/src/ApiClient';
import '../styles/navBarStyles.css';

import logo from './images/toniflix.png';
import avatar from './images/user.png';

function NavBarAdmin() {
    const { auth } = useAuth(); // Access auth context
    const [userName, setUserName] = useState('User'); // Initialize with default 'User'
    const apiClient = new ApiClient();
    const usersApi = new UsersApi(apiClient); // Create instance of UsersApi

    // Fetch the user name based on the userId
    useEffect(() => {
        if (!auth.userId) return;

        usersApi.usersUserIdGet(auth.userId, (error, user) => {
            if (error) {
                console.error('Error fetching user details:', error);
            } else {
                setUserName(user.username);
            }
        });
    }, [auth.userId, usersApi]);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar__content">
                {/* Logo */}
                <div className="navbar__logo">
                    <Link to="/admin">
                        <img src={logo} alt="ToniFlix Logo" />
                    </Link>
                </div>

                {/* User Section */}
                <div className="navbar__user">
                    <span className="navbar__profile-name">{userName}</span>
                    <img src={avatar} alt="User Avatar" onClick={toggleMenu} />
                    {menuOpen && (
                        <nav className="navbar__dropdown">
                            <ul>
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

export default NavBarAdmin;
