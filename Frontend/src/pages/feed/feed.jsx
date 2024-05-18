import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './feed.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import PostGrid from '../../components/postGrid/postGrid';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const handleShowMore = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayedPosts = filteredPosts.slice(0, visiblePosts);

    return (
        <section className='Feed'>
            <Navbar setSearchTerm={setSearchTerm} />
            <div className="post-grid">
                <div className="left-container">
                    {displayedPosts
                        .filter((post, index) => index % 3 === 0)
                        .map(post => {
                            const lastSpaceIndex = post.title.lastIndexOf(' ');
                            const titlePart1 = post.title.slice(0, lastSpaceIndex);
                            const titlePart2 = post.title.slice(lastSpaceIndex + 1);

                            return (
                                <Link key={post.id} to={`/posts/${post.id}`} className="post-link">
                                    <div className="post">
                                        <h1>
                                            {titlePart1} <br />
                                            <span>{titlePart2}</span>
                                        </h1>
                                        <h3>Author: {post.user.username}</h3>
                                        <img src={post.media} alt="Post Media" />
                                        <p>{post.description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                </div>

                <div className="right-container">
                    {displayedPosts
                        .filter((post, index) => index % 3 !== 0)
                        .map(post => (
                            <Link key={post.id} to={`/posts/${post.id}`} className="post-link">
                                <div className="post">
                                    <h3>Author: {post.user.username}</h3>
                                    <img src={post.media} alt="Post Media" />
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
            {visiblePosts < filteredPosts.length && (
                <button className='loadMoreButton' onClick={handleShowMore}>
                    LOAD MORE
                </button>
            )}
            <PostGrid/>
            <Footer />
        </section>
    );
}

export default Feed;
