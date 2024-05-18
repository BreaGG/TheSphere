import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './PostGrid.css';

function PostGrid() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 8)))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="post-grid-container">
            {posts.map((post, index) => (
                <Link key={index} to={`/posts/${post.id}`} className={`Post${index + 1}`}>
                    <img src={post.media} alt="Post Media" className="post-image" />
                    <h1>{post.user.username}</h1>
                    <h2>{post.title}</h2>
                    <p>{post.description.length > 160 ? `${post.description.substring(0, 160)}...` : post.description}</p>
                </Link>
            ))}
            <div className="Blank1"></div>
            <div className="Blank2"></div>
        </div>
    );
}

export default PostGrid;
