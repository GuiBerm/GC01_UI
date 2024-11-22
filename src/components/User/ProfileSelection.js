import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ProfilesApi from '../../api/client_user/src/api/ProfilesApi';
import UsersApi from '../../api/client_user/src/api/UsersApi';
import ApiClient from '../../api/client_user/src/ApiClient';
import Profile from '../../api/client_user/src/model/Profile';
import '../../styles/profileSelectionStyles.css';

function ProfileSelection() {
    const { auth, setAuth } = useAuth();
    const [profiles, setProfiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [newProfileName, setNewProfileName] = useState('');
    const [editingProfile, setEditingProfile] = useState(null);
    const [editingProfileName, setEditingProfileName] = useState('');
    const [editingUser, setEditingUser] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '' });

    const navigate = useNavigate();
    const userId = auth.userId;

    const apiClient = new ApiClient();
    const profilesApi = new ProfilesApi(apiClient);
    const usersApi = new UsersApi(apiClient);

    useEffect(() => {
        if (!userId) {
            setErrorMessage('User ID not found. Please log in again.');
            return;
        }

        const fetchProfiles = async () => {
            try {
                const response = await new Promise((resolve, reject) => {
                    profilesApi.usersUserIdProfilesGet(userId, (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });
                setProfiles(response);
            } catch (error) {
                setErrorMessage('Error retrieving profiles. Please try again.');
                console.error('Error retrieving profiles:', error);
            }
        };

        fetchProfiles();
    }, [userId, profilesApi]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await new Promise((resolve, reject) => {
                    usersApi.usersUserIdGet(userId, (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });

                setUsername(user.username);
                setPassword('');
                setEmail(user.email);
                setRol(user.rol);
            } catch (error) {
                setErrorMessage('Error retrieving user. Please try again.');
                console.error('Error retrieving user:', error);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification({ message: '', type: '' }), 3000);
    };

    const handleProfileSelection = (profileId) => {
        setAuth((prevAuth) => ({ ...prevAuth, profileId }));
        navigate('/user/main');
    };

    const handleAddProfile = async () => {
        if (!newProfileName) {
            showNotification('Please enter a name for the profile', 'error');
            return;
        }

        try {
            const newProfile = new Profile();
            newProfile.name = newProfileName;
            newProfile.userId = userId;

            await new Promise((resolve, reject) => {
                profilesApi.usersUserIdProfilesPost(newProfile, userId, (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            setNewProfileName('');
            const updatedProfiles = await new Promise((resolve, reject) => {
                profilesApi.usersUserIdProfilesGet(userId, (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            setProfiles(updatedProfiles);
            showNotification('Profile added successfully!');
        } catch (error) {
            showNotification('Error adding profile. Please try again.', 'error');
            console.error('Error adding profile:', error);
        }
    };

    const handleDeleteProfile = async (profileId) => {
        try {
            await new Promise((resolve, reject) => {
                profilesApi.usersUserIdProfilesProfileIdDelete(userId, profileId, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });

            const updatedProfiles = await new Promise((resolve, reject) => {
                profilesApi.usersUserIdProfilesGet(userId, (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            setProfiles(updatedProfiles);

            if (auth.profileId === profileId) {
                setAuth((prevAuth) => ({ ...prevAuth, profileId: null }));
            }
            showNotification('Profile deleted successfully!');
        } catch (error) {
            showNotification('Error deleting profile. Please try again.', 'error');
            console.error('Error deleting profile:', error);
        }
    };

    const handleEditUser = async () => {
        try {
            const updatedUser = {
                username,
                contrasena: password,
                email,
                rol,
            };

            await new Promise((resolve, reject) => {
                usersApi.usersUserIdPut(updatedUser, userId, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });

            setEditingUser(false);
            showNotification('User updated successfully!');
        } catch (error) {
            showNotification('Error updating user. Please try again.', 'error');
            console.error('Error updating user:', error);
        }
    };

    const handleDeleteUser = async () => {
        try {
            await new Promise((resolve, reject) => {
                usersApi.usersUserIdDelete(userId, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });

            setAuth(null);
            navigate('/login');
            showNotification('User deleted successfully!');
        } catch (error) {
            showNotification('Error deleting user. Please try again.', 'error');
            console.error('Error deleting user:', error);
        }
    };

    const handleEditProfile = (profile) => {
        setEditingProfile(profile);
        setEditingProfileName(profile.name);
    };

    const handleUpdateProfile = async () => {
        if (!editingProfileName.trim()) {
            showNotification('Profile name cannot be empty', 'error');
            return;
        }

        try {
            const updatedProfile = new Profile();
            updatedProfile.name = editingProfileName;
            updatedProfile.userId = userId;

            await new Promise((resolve, reject) => {
                profilesApi.usersUserIdProfilesProfileIdPut(updatedProfile, userId, editingProfile.id, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });

            setEditingProfile(null);
            setEditingProfileName('');
            const updatedProfiles = await new Promise((resolve, reject) => {
                profilesApi.usersUserIdProfilesGet(userId, (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            setProfiles(updatedProfiles);
            showNotification('Profile updated successfully!');
        } catch (error) {
            showNotification('Error updating profile. Please try again.', 'error');
            console.error('Error updating profile:', error);
        }
    };


    return (
        <div className="profile-container">
            {notification.message && (
                <div className={`notification ${notification.type}`}>
                    {notification.message}
                </div>
            )}
            <h1 className="profile-title">Who's watching?</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="profile-grid">
                {profiles.map((profile) => (
                    <div key={profile.id} className="profile-card">
                        {editingProfile && editingProfile.id === profile.id ? (
                            <div className="profile-editing">
                                <input
                                    type="text"
                                    value={editingProfileName}
                                    onChange={(e) => setEditingProfileName(e.target.value)}
                                    className="edit-profile-input"
                                />
                                <button
                                    className="save-button"
                                    onClick={handleUpdateProfile}
                                    disabled={!editingProfileName.trim()}
                                >
                                    Save
                                </button>
                                <button className="cancel-button" onClick={() => setEditingProfile(null)}>
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="profile-name">{profile.name}</div>
                                <div className="profile-actions">
                                    <button className="select-button" onClick={() => handleProfileSelection(profile.id)}>
                                        Select
                                    </button>
                                    <div className="edit-delete-container">
                                        <button className="edit-button" onClick={() => handleEditProfile(profile)}>
                                            Edit
                                        </button>
                                        <button className="delete-button" onClick={() => handleDeleteProfile(profile.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="add-profile-form">
                <input
                    type="text"
                    placeholder="New profile name"
                    value={newProfileName}
                    onChange={(e) => setNewProfileName(e.target.value)}
                    className="add-profile-input"
                />
                <button className="add-profile-button" onClick={handleAddProfile}>
                    Add Profile
                </button>
            </div>
            <div className="user-actions">
                {!editingUser ? (
                    <button className="edit-user-button" onClick={() => setEditingUser(true)}>
                        Edit User
                    </button>
                ) : (
                    <div className="edit-user-form">
                        <input
                            type="text"
                            placeholder="New username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="edit-user-input"
                        />
                        <input
                            type="password"
                            placeholder="New password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="edit-user-input"
                        />
                        <div className="form-actions">
                            <button className="save-user-button" onClick={handleEditUser}>
                                Save
                            </button>
                            <button className="cancel-user-button" onClick={() => setEditingUser(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
                <button className="delete-user-button" onClick={handleDeleteUser}>
                    Delete User
                </button>
            </div>
        </div>
    );
}

export default ProfileSelection;
