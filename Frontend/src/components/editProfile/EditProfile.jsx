import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [headerPicFile, setHeaderPicFile] = useState(null);
    const [loadingImage, setLoadingImage] = useState(false);

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

    const handleProfilePicChange = (e) => {
        setProfilePicFile(e.target.files[0]);
    };

    const handleHeaderPicChange = (e) => {
        setHeaderPicFile(e.target.files[0]);
    };

    const uploadImageToCloudinary = async (imageFile) => {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', 'TheSphere');
        formData.append('folder', 'TheSphere/Usuarios'); 

        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/dnc3btlfa/image/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data.secure_url;
        } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
            throw error;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!loggedInUser) {
            setError('You must be logged in to edit your profile.');
            return;
        }

        setLoadingImage(true);

        try {
            let profilePicUrl = userData.profilePic;
            let headerPicUrl = userData.headerPic;

            if (profilePicFile) {
                profilePicUrl = await uploadImageToCloudinary(profilePicFile);
            }

            if (headerPicFile) {
                headerPicUrl = await uploadImageToCloudinary(headerPicFile);
            }

            const updatedUserData = {
                ...userData,
                profilePic: profilePicUrl,
                headerPic: headerPicUrl
            };

            const response = await fetch(`http://localhost:8080/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserData),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                updateUser(updatedUser);
                navigate(`/users/${id}`);
            } else {
                setError('Failed to update user');
            }
        } catch (error) {
            setError('An error occurred while updating the profile');
        } finally {
            setLoadingImage(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
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
                        Profile Picture:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePicChange}
                        />
                    </label>
                    <label>
                        Header Picture:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleHeaderPicChange}
                        />
                    </label>
                    {error && <p className="error">{error}</p>}
                    {loadingImage && <p className="loading">Uploading images and updating your profile...</p>}
                    <button type="submit" disabled={loadingImage}>Save Changes</button>
                </form>
            </div>
        </section>
    );
}

export default EditProfile;
