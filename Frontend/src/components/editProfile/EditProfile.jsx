import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './EditProfile.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

function EditProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user: loggedInUser, updateUser } = useContext(UserContext);
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        country: '',
        bio: '',
        profilePic: '',
        headerPic: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/users/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                return response.json();
            })
            .then(data => {
                setUserData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8080/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update user');
                }
                return response.json();
            })
            .then(data => {
                updateUser(data);
                navigate(`/users/${id}`);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <Navbar/>
            <div className="edit-profile">
                <h1>UPDATE YOUR <span>PROFILE</span></h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Country:
                        <input
                            type="text"
                            name="country"
                            value={userData.country}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Bio:
                        <textarea
                            name="bio"
                            value={userData.bio}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Profile Picture URL:
                        <input
                            type="text"
                            name="profilePic"
                            value={userData.profilePic}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Header Picture URL:
                        <input
                            type="text"
                            name="headerPic"
                            value={userData.headerPic}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
            <Footer/>
        </section>
        
    );
}

export default EditProfile;
