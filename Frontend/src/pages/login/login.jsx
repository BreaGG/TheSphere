import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import LogoSphere from '../../assets/img/SPHERE.svg';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        setUsername('');
        setPassword('');
    };

    return (
        <section className='Login'>
            <div>
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
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                    <Link to="/feed"><button className='joinButton' type="submit">JOIN NOW!</button></Link>
                    <Link className='text-b' to="/register">DON'T HAVE AN ACCOUNT? SING IN!</Link>
                </form>
                
                <p className='bottom-margin'> Software is a great combination between artistry and engineering. When you finally get done and get to appreciate what you have done it is like a part of yourself that you've put together. I think a lot of the people here feel that way. - Bill gates</p>
            </article>
        </section>
    );
}

export default Login;
