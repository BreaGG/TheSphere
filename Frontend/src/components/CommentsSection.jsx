import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

function CommentsSection({ postId, initialComments }) {
    const { user: loggedInUser } = useContext(UserContext);
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        setComments(initialComments);
    }, [initialComments]);

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
            setComments([...comments, data]);
            setNewComment('');
        })
        .catch(error => console.error('Error posting comment:', error));
    };

    return (
        <div className="commentsContainer">
            {comments.map(comment => (
                <div className="comentario" key={comment.id}>
                    <img src={comment.user.profilePic} className='ProfilePic' alt="" />
                    <div>
                        <p><span>{comment.user.username}</span> - {comment.content}</p>
                    </div>
                </div>
            ))}
            <form onSubmit={handleSubmitComment}>
                <textarea 
                    value={newComment} 
                    onChange={handleCommentChange} 
                    placeholder="Write a comment..." 
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CommentsSection;
