import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import "./UserDetails.css";
import RandomUsers from '../randomUsers/RandomUsers';

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
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
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <Navbar />
            <div className="user-details">
                <div className='banner'>
                    <img src={user.headerPic} alt="Header Pic" />
                </div>
                <article>
                    <div className='UserBody'>
                        <img src={user.profilePic} className='ProfilePic' alt="Profile Pic" />
                        <h1>{user.username}</h1>
                        <h3>{user.country}</h3>
                        <p>{user.bio}</p>
                        <h2>PROJECTS</h2>
                        <ul className="post-list">
                            {user.posts.map(post => (
                                <Link to={`/posts/${post.id}`} key={post.id}>
                                    <div className='project'>
                                        <h3>{post.title}</h3>
                                        <img src={post.media} alt="Post Media" />
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <RandomUsers />
                </article>
            </div>
            <Footer />
        </section>
    );
}

export default UserDetails;
