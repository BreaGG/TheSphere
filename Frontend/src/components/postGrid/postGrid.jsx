import React, { useEffect, useState } from 'react';
import './postGrid.css'; // Asegúrate de importar el archivo CSS correspondiente

function PostGrid() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className='post-grid-container'>
            {posts.map((post, index) => (
                <div key={index} className='post-grid-item'>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}
            {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className='post-grid-placeholder'></div>
            ))}
        </div>
    );
}

export default PostGrid;
