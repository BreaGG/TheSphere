import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './AdminDashboard.css';

function AdminDashboard() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            navigate('/');
        } else {
            fetchUsers();
            fetchPosts();
        }
    }, [user, navigate]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await fetch(`http://localhost:8080/api/users/${userId}`, {
                method: 'DELETE',
            });
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await fetch(`http://localhost:8080/api/posts/${postId}`, {
                method: 'DELETE',
            });
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <section>
                <h2>Users</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username} - {user.email}
                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Posts</h2>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            {post.title}
                            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default AdminDashboard;
