import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarAdmin from "../NavBarAdmin";
import '../../styles/adminPageStyles.css'; // Make sure the path is correct

function AdminPage() {
    const navigate = useNavigate();

    // Navigation handlers
    const handleAddContent = () => navigate('/admin/add-content');
    const handleModifyContent = () => navigate('/admin/modify-content');
    const handleDeleteContent = () => navigate('/admin/delete-content');

    const handleShowDirector = () => navigate('/admin/show-director');
    const handleAddDirector = () => navigate('/admin/add-director');
    const handleModifyDirector = () => navigate('/admin/modify-director');
    const handleDeleteDirector = () => navigate('/admin/delete-director');

    const handleShowActor = () => navigate('/admin/show-actor');
    const handleAddActor = () => navigate('/admin/add-actor');
    const handleModifyActor = () => navigate('/admin/modify-actor');
    const handleDeleteActor = () => navigate('/admin/delete-actor');

    const handleShowUsers = () => navigate('/admin/users');
    const handleDeleteUser = () => navigate('/admin/delete-user');

    return (
        <div className="admin-page">
            <NavBarAdmin />
            <div className="admin-container">
                <h1>Administration Panel</h1>

                <div className="admin-section">
                    <h2>Manage Content</h2>
                    <div className="admin-buttons">
                        <button onClick={handleAddContent}>Add Content</button>
                        <button onClick={handleModifyContent}>Modify Content</button>
                        <button onClick={handleDeleteContent}>Delete Content</button>
                    </div>
                </div>

                <div className="admin-section">
                    <h2>Manage Directors</h2>
                    <div className="admin-buttons">
                        <button onClick={handleShowDirector}>Show Directors</button>
                        <button onClick={handleAddDirector}>Add Director</button>
                        <button onClick={handleModifyDirector}>Modify Director</button>
                        <button onClick={handleDeleteDirector}>Delete Director</button>
                    </div>
                </div>

                <div className="admin-section">
                    <h2>Manage Actors</h2>
                    <div className="admin-buttons">
                        <button onClick={handleShowActor}>Show Actors</button>
                        <button onClick={handleAddActor}>Add Actor</button>
                        <button onClick={handleModifyActor}>Modify Actor</button>
                        <button onClick={handleDeleteActor}>Delete Actor</button>
                    </div>
                </div>

                <div className="admin-section">
                    <h2>Users</h2>
                    <div className="admin-buttons">
                        <button onClick={handleShowUsers}>Show Users</button>
                        <button onClick={handleDeleteUser}>Delete User</button> {/* New button */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AdminPage;
