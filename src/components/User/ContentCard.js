import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContentCard({ id, title, synopsis }) {
    const navigate = useNavigate();

    const handleWatch = () => {
        navigate(`/user/content/${id}`);
    };

    const truncatedDescription = synopsis?.length > 100
        ? `${synopsis.substring(0, 100)}...`
        : synopsis || 'No description available';

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{truncatedDescription}</p>
            <button onClick={handleWatch}>Watch</button>
        </div>
    );
}

export default ContentCard;
