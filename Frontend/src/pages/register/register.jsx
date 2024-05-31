import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoSphere from '../../assets/img/SPHERE.svg';
import './../login/login.css';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newUser = {
            username,
            password,
            email,
            country,
        };

        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                setShowModal(true);
                setTimeout(() => {
                    navigate('/login');
                }, 3000); // Redirigir después de 3 segundos
            } else {
                setError('Error registering user');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            setError('An error occurred while registering');
        }
    };

    return (
        <section className='Login'>
            <article>
                <p className='p p-sides'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.- Steve Jobs</p>
                <form onSubmit={handleSubmit}>
                    <h1>JOIN THE <span>SPHERE</span></h1>
                    <label>
                        <h3>EMAIL:</h3>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='EXAMPLE@EMAIL.COM'
                        />
                    </label>
                    <label>
                        <h3>USERNAME:</h3>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder='Username'
                        />
                    </label>
                    <label>
                        <h3>PASSWORD:</h3>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='**********'
                        />
                    </label>
                    <label>
                        <h3>COUNTRY:</h3>
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            placeholder='Country'
                        />
                    </label>
                    <p className="picture">You will be able to add a picture before.</p>
                    {error && <p className="error">{error}</p>}
                    <br />
                    <button className='joinButton' type="submit"><p>JOIN NOW!</p></button>
                    <Link className='text-b' to="/login">ALREADY HAVE AN ACCOUNT? LOG IN!</Link>
                </form>
                
                <p className='bottom-margin p-sides'> Software is a great combination between artistry and engineering. When you finally get done and get to appreciate what you have done it is like a part of yourself that you've put together. I think a lot of the people here feel that way. - Bill Gates</p>
            </article>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Registered Successfully!</h2>
                        <p>Redirecting to login...</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Register;
