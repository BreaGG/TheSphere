import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RandomUsers({ refreshTrigger }) {
    const [randomUsers, setRandomUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/users/random')
            .then(response => response.json())
            .then(data => {
                // Evitar que salga el admin en los featured
                const filteredUsers = data.filter(user => user.email !== 'admin@thesphere.com');
                setRandomUsers(filteredUsers);
            })
            .catch(error => console.error('Error fetching random users:', error));
    }, [refreshTrigger]);

    return (
        <div className='userContainer'>
            <h2>FEATURED USERS</h2>
            {randomUsers.map(user => (
                <Link to={`/users/${user.id}`} key={user.id} className='user-link'>
                    <div className='user'>
                        <img src={user.profilePic} className='ProfilePic' alt="Profile Pic" />
                        <div className='userInfo'>
                            <h3>{user.username}</h3>
                            <p>{user.country}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default RandomUsers;
