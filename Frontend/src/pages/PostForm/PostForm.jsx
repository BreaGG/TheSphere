import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import './PostForm.css'; 

function PostForm() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [postData, setPostData] = useState({
        title: '',
        technologies: '',
        subTitle: '',
        description: '',
        subTitle2: '',
        description2: '',
        subTitle3: '',
        description3: '',
        media: '',
        category: 'DESIGN',
        user: user
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const [fieldSets, setFieldSets] = useState(1);
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData(prevPostData => ({
            ...prevPostData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAddFields = () => {
        setFieldSets(prevFieldSets => prevFieldSets + 1);
    };

    const uploadImageToCloudinary = async () => {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', 'TheSphere');
        formData.append('folder', 'TheSphere/Posts'); 

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in to submit a post.');
            return;
        }

        setLoading(true); 

        try {
            let mediaUrl = '';

            if (imageFile) {
                mediaUrl = await uploadImageToCloudinary();
            }

            const postDataWithMediaUrl = { ...postData, media: mediaUrl };

            const response = await fetch('http://localhost:8080/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postDataWithMediaUrl),
            });

            if (response.ok) {
                const newPost = await response.json();
                navigate(`/posts/${newPost.id}`);
            } else {
                setError('Failed to submit post');
            }
        } catch (error) {
            setError('An error occurred while submitting the post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <div className='edit-profile'>
                <form onSubmit={handleSubmit}>
                    <h1>SHARE YOUR <span>WORK</span></h1>
                    <label>
                        Title:
                        <input type="text" name="title" value={postData.title} onChange={handleChange} required />
                    </label>
                    <label>
                        Technologies:
                        <input type="text" name="technologies" value={postData.technologies} onChange={handleChange} required />
                    </label>
                    <label>
                        Subtitle:
                        <input type="text" name="subTitle" value={postData.subTitle} onChange={handleChange} required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={postData.description} onChange={handleChange} required />
                    </label>
                    {fieldSets >= 2 && (
                        <>
                            <label>
                                Subtitle 2:
                                <input type="text" name="subTitle2" value={postData.subTitle2} onChange={handleChange} />
                            </label>
                            <label>
                                Description 2:
                                <textarea name="description2" value={postData.description2} onChange={handleChange} />
                            </label>
                        </>
                    )}
                    {fieldSets >= 3 && (
                        <>
                            <label>
                                Subtitle 3:
                                <input type="text" name="subTitle3" value={postData.subTitle3} onChange={handleChange} />
                            </label>
                            <label>
                                Description 3:
                                <textarea name="description3" value={postData.description3} onChange={handleChange} />
                            </label>
                        </>
                    )}
                    <label>
                        Media:
                        <input type="file" accept="image/*" onChange={handleFileChange} required />
                    </label>
                    <label>
                        Category:
                        <select name="category" value={postData.category} onChange={handleChange} required>
                            <option value="DESIGN">DESIGN</option>
                            <option value="DEVELOPMENT">DEVELOPMENT</option>
                        </select>
                    </label>
                    {error && <p className="error">{error}</p>}
                    {loading && <p className="loading">Uploading and submitting your post...</p>}
                    {fieldSets < 3 && (
                        <button type="button" onClick={handleAddFields}>Add More Fields</button>
                    )}
                    <button type="submit" disabled={loading}>Submit Post</button>
                </form>
            </div>
        </section>
    );
}

export default PostForm;
