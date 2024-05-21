import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './CommentsSection.css'

function CommentsSection({ postId, refreshComments }) {
    const { user: loggedInUser } = useContext(UserContext);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmitComment = (event) => {
        event.preventDefault();

        if (!loggedInUser || !loggedInUser.id) {
            console.error('User is not logged in or does not have an id');
            return;
        }

        const commentData = {
            content: newComment,
            user: { id: loggedInUser.id },
            post: { id: parseInt(postId) }
        };

        fetch('http://localhost:8080/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
        .then(response => response.json())
        .then(data => {
            setNewComment('');
            refreshComments(); 
        })
        .catch(error => console.error('Error posting comment:', error));
    };

    return (
        <div>
            <form onSubmit={handleSubmitComment} className="comment-form">
                <div className="comment-form-header">
                    {loggedInUser && loggedInUser.profilePic && (
                        <img src={loggedInUser.profilePic} className='ProfilePic' alt="Profile Pic" />
                    )}
                    <input 
                        value={newComment} 
                        onChange={handleCommentChange} 
                        placeholder="Your comment" 
                        required
                    />
                    <button type="submit">POST</button>
                </div>
                
            </form>
        </div>
    );
}

export default CommentsSection;
