import React, { useEffect, useState } from 'react';

function RandomUsers() {
    const [randomUsers, setRandomUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/users/random')
            .then(response => response.json())
            .then(data => setRandomUsers(data))
            .catch(error => console.error('Error fetching random users:', error));
    }, []);

    return (
        <div className='asideUser'>
            <h2>FEATURED USERS</h2>
            {randomUsers.map(user => (
                <div className='user' key={user.id}>
                    <img src={user.profilePic} alt="Profile Pic" />
                    <div className='userInfo'>
                        <h3>{user.username}</h3>
                        <p>{user.country}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RandomUsers;
