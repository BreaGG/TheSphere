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
                navigate('/feed');
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
            <div className='topNav'>
                <Link to="/"><img src={LogoSphere} alt="" /></Link>
                <Link className='sphereButton' to="/">SING IN</Link>
            </div>
            <article>
                <p className='p'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.- Steve Jobs</p>
                <form onSubmit={handleSubmit}>
                    <h1>JOIN THE <span>SPHERE</span></h1>
                    <label>
                        EMAIL:
                        <br />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='EXAMPLE@EMAIL.COM'
                        />
                    </label>
                    <label>
                        USERNAME:
                        <br />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder='Username'
                        />
                    </label>
                    <label>
                        PASSWORD:
                        <br />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='**********'
                        />
                    </label>
                    <label>
                        COUNTRY:
                        <br />
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            placeholder='Country'
                        />
                    </label>
                    {error && <p className="error">{error}</p>}
                    <br />
                    <button className='joinButton' type="submit">JOIN NOW!</button>
                    <Link className='text-b' to="/login">ALREADY HAVE AN ACCOUNT? LOG IN!</Link>
                    <div className="social-buttons">
                        <button className="social-button facebook">Sign up with Facebook</button>
                        <button className="social-button google">Sign up with Google</button>
                        <button className="social-button twitter">Sign up with Twitter</button>
                    </div>
                </form>
                
                <p className='bottom-margin'> Software is a great combination between artistry and engineering. When you finally get done and get to appreciate what you have done it is like a part of yourself that you've put together. I think a lot of the people here feel that way. - Bill gates</p>
            </article>
        </section>
    );
}

export default Register;
