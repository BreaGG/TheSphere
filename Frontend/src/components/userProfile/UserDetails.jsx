import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

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
            <div>
                <h1>User Details</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>
            <Footer/>
        </section>
        
    );
}

export default UserDetails;
