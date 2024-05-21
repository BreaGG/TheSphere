import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetails.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { UserContext } from '../../contexts/UserContext';
import CommentsSection from '../CommentsSection/CommentsSection';

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const { user: loggedInUser } = useContext(UserContext);

    const fetchPostDetails = () => {
        fetch(`http://localhost:8080/api/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data.post);
                setComments(data.comments);
            })
            .catch(error => console.error('Error fetching post details:', error));
    };

    useEffect(() => {
        fetchPostDetails();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <Navbar />
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
                        {post.subTitle2 && <h2>{post.subTitle2}</h2>}
                        {post.description2 && <p>{post.description2}</p>}
                        {post.subTitle3 && <h2>{post.subTitle3}</h2>}
                        {post.description3 && <p>{post.description3}</p>}
                        <img src={post.media} alt="Post Media" />
                    </div>
                    <div className='asideUser'>
                        {post.user && (
                            <div className='userContainer'>
                                <div className='user'>
                                    <img src={post.user.profilePic} className='ProfilePic' alt="Profile Pic" />
                                    <div className='userInfo'>
                                        <h3>{post.user.username}</h3>
                                        <p>{post.user.country}</p>
                                    </div>
                                </div>
                                <Link to={`/users/${post.user.id}`}>
                                    <button>REACH OUT!</button>
                                </Link>
                            </div>
                        )}
                        <div className="commentsContainer">
                            {comments.map(comment => (
                                <div className="comentario" key={comment.id}>
                                    <img src={comment.user.profilePic} className='ProfilePic' alt="" />
                                    <div>
                                        <p><span>{comment.user.username}</span> - {comment.content}</p>
                                    </div>
                                </div>
                            ))}
                            <CommentsSection postId={id} refreshComments={fetchPostDetails} />
                        </div>
                    </div>
                </article>
            </div>
            <Footer />
        </section>
    );
}

export default PostDetails;
