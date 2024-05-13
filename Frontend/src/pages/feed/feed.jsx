import React, { useState, useEffect } from 'react';
import './feed.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(3);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const handleShowMore = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
    };

    return (
        <section className='Feed'>
            <Navbar />
            <div className="post-grid">
                <div className="left-container">
                    {posts.slice(0, visiblePosts).filter((post, index) => index % 3 === 0).map(post => (
                        <div key={post.id} className="post">
                            <h2>{post.title}</h2>
                            <h3>Author: {post.user.username}</h3>
                            <img src={post.media} alt="Post Media" />
                            <p>Description: {post.description}</p>
                        </div>
                    ))}
                </div>
                <div className="right-container">
                    {posts.slice(0, visiblePosts).filter((post, index) => index % 3 !== 0).map(post => (
                        <div key={post.id} className="post">
                            <h3>Author: {post.user.username}</h3>
                            <img src={post.media} alt="Post Media" />
                            <h2>{post.title}</h2>
                            <p>Description: {post.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {visiblePosts < posts.length && (
                <button className='loadMoreButton' onClick={handleShowMore}>LOAD MORE</button>
            )}
            <Footer />
        </section>
    );
}

export default Feed;
