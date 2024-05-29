import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './PostDetails.css';
import { UserContext } from '../../contexts/UserContext';
import CommentsSection from '../CommentsSection/CommentsSection';
import { darcula, solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { darkula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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
                        <ReactMarkdown
                            children={post.description}
                            components={{
                                code({node, inline, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            children={String(children).replace(/\n$/, '')}
                                            style={dracula}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        />
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        />
                        {post.subTitle2 && <h2>{post.subTitle2}</h2>}
                        {post.description2 && <ReactMarkdown children={post.description2} components={{
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={dracula}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}/>}
                        {post.subTitle3 && <h2>{post.subTitle3}</h2>}
                        {post.description3 && <ReactMarkdown children={post.description3} components={{
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={dracula}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}/>}
                        <img src={post.media} alt="Post Media" />
                    </div>
                    <div className='asideUser'>
                        {post.user && (
                            <div className='userContainer'>
                                <div className='user'>
                                    <img src={post.user.profilePic} className='ProfilePic' alt="Profile Pic" />
                                    <div className='userInfo'>
                                        <h3>{post.user.username}</h3>
                                        <p>{post.category} <br /> {post.user.country}</p>
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
                                    <Link to={`/users/${comment.user.id}`}>
                                        <img src={comment.user.profilePic} className='ProfilePic' alt={comment.user.username} />
                                    </Link>
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
        </section>
    );
}

export default PostDetails;
