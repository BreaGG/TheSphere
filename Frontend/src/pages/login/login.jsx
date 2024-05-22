import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import LogoSphere from '../../assets/img/SPHERE.svg';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const user = await response.json();
                login(user);
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'An error occurred while logging in');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred while logging in');
        }
    };

    return (
        <section className='Login'>
            {/* <div className='topNav'>
                <Link to="/"><img src={LogoSphere} alt="" /></Link>
                <Link className='sphereButton' to="/">SIGN IN</Link>
            </div> */}
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
                    <br />
                    {error && <p className="error">{error}</p>}
                    <button className='joinButton' type="submit">JOIN NOW!</button>
                    <Link className='text-b' to="/register">DON'T HAVE AN ACCOUNT? SIGN IN!</Link>
                </form>
                <p className='bottom-margin'>Software is a great combination between artistry and engineering. When you finally get done and get to appreciate what you have done it is like a part of yourself that you've put together. I think a lot of the people here feel that way. - Bill Gates</p>
            </article>
        </section>
    );
}

export default Login;
