import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import "./UserDetails.css"
import RandomUsers from '../randomUsers/RandomUsers';

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user details:', error));
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <Navbar/>
            <div className="user-details">
                <div className='banner'>
                    <h1>{user.username}</h1>
                    <img src={user.headerPic} alt="Header Pic" />
                    </div>
                    <article>
                        <div className='UserBody'>
                            <h1>{user.username}</h1>
                            <h3>{user.email}</h3>
                            <h2>{user.country}</h2>
                            <p>{user.bio}</p>
                            <img src={user.profilePic} alt="Profile Pic" />
                        </div>
                        <RandomUsers/>
                    </article>
                </div>
            <Footer/>
        </section>
        
    );
}

export default UserDetails;
