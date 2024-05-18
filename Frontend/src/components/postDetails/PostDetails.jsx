import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetails.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post details:', error));
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <Navbar/>
            <div className="post-details">
                <div className='banner'>
                    <h1>{post.title}</h1>
                    <img src={post.media} alt="Post Media" />
                </div>
                <article>
                    <div className='PostBody'>
                        <h1>{post.title}</h1>
                        <h3>{post.technologies}</h3>
                        <h2>{post.subTitle}</h2>
                        <p>{post.description}</p>
                        <h2>{post.subTitle2}</h2>
                        <p>{post.description2}</p>
                        <h2>{post.subTitle3}</h2>
                        <p>{post.description3}</p>
                        <img src={post.media} alt="Post Media" />
                    </div>
                    <div className='asideUser'>
                        <div className='user'>
                            <img src={post.user.profilePic} alt="Profile Pic" />
                            <div className='userInfo'>
                                <h3>{post.user.username}</h3>
                                <p>{post.technologies}</p>
                            </div>
                        </div>
                        {/* Enlace al UserDetails con el ID del post */}
                        <Link to={`/users/${post.user.id}`}>
                            <button>REACH OUT!</button>
                        </Link>
                    </div>
                </article>
            </div>
            <Footer/>
        </section>
    );
}

export default PostDetails;
