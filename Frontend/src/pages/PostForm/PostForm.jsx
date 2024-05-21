import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

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
        user: user // Asignamos el usuario loggeado al post
    });
    const [error, setError] = useState('');
    const [fieldSets, setFieldSets] = useState(1); // Estado para controlar los conjuntos de campos mostrados

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData(prevPostData => ({
            ...prevPostData,
            [name]: value
        }));
    };

    const handleAddFields = () => {
        setFieldSets(prevFieldSets => prevFieldSets + 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                const newPost = await response.json();
                navigate(`/posts/${newPost.id}`);
            } else {
                setError('Failed to submit post');
            }
        } catch (error) {
            setError('An error occurred while submitting the post');
        }
    };

    return (
        <section>
            <Navbar />
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
                        Media URL:
                        <input type="text" name="media" value={postData.media} onChange={handleChange} required />
                    </label>
                    {error && <p className="error">{error}</p>}
                    {fieldSets < 3 && (
                        <button type="button" onClick={handleAddFields}>Add More Fields</button>
                    )}
                    <button type="submit">Submit Post</button>
                </form>
            </div>
            <Footer />
        </section>
    );
}

export default PostForm;
