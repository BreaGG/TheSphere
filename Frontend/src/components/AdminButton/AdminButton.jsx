import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './AdminButton.css';

const AdminButton = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    if (!user || user.role !== 'admin') {
        return null;
    }

    const handleNavigate = () => {
        navigate('/admin-dashboard');
    };

    return (
        <button className="admin-button" onClick={handleNavigate}>
            Admin Dashboard
        </button>
    );
};

export default AdminButton;
