import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersApi from '../../api/client_user/src/api/UsersApi';
import ApiClient from '../../api/client_user/src/ApiClient';
import ApiClientAddInfo from '../../api/client_addInfo/src/ApiClient';
import ReviewsApi from '../../api/client_addInfo/src/api/ReviewsApi';
import NavBarAdmin from '../NavBarAdmin';
import "../../styles/showStyles.css";

function ShowUsers() {
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const apiClient = new ApiClient();
    const usersApi = new UsersApi(apiClient);

    const apiClientAddInfo = new ApiClientAddInfo();
    const reviewsApi = new ReviewsApi(apiClientAddInfo);

    const fetchUsers = async () => {
        try {
            const data = await new Promise((resolve, reject) => {
                usersApi.usersGet((error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            setUsers(data.map(user => ({ ...user, averageRating: '-' })));
        } catch (error) {
            setErrorMessage('Error fetching users. Please try again.');
            console.error('Error fetching users:', error);
        }
    };

    const fetchUserAverage = async (userId) => {
        try {
            const reviewsResponse = await new Promise((resolve, reject) => {
                reviewsApi.getNumericReviewsByUser(userId, (error, data) => {
                    if (error) reject(error);
                    else resolve(data);
                });
            });

            const reviews = reviewsResponse.reviews || [];
            const averageRating = reviews.length > 0
                ? `${(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(2)}/5`
                : 'No reviews';

            setUsers(prev => prev.map(user =>
                user.id === userId ? { ...user, averageRating } : user
            ));
        } catch (error) {
            console.error(`Error fetching reviews for user ${userId}:`, error);
        }
    };

    React.useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>List of Users</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Average Rating</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.contrasena}</td>
                            <td>{user.rol === 2 ? 'Admin' : 'User'}</td>
                            <td>{user.averageRating}</td>
                            <td>
                                <button onClick={() => fetchUserAverage(user.id)}>Show Average</button>
                                <button
                                    className="delete-button"
                                    onClick={() => navigate('/admin/delete-user', { state: { userId: user.id } })}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowUsers;
