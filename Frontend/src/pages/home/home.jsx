import './home.css'
import logo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <section className='Home'>
            <div>
                <div className='top'>
                    <div className='column-i'>
                        <p>
                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
                        <br /> <span>- Steve Jobs</span>
                        </p>
                    </div>
                    <div>
                    <div className='list'>
                        <p>ART</p>
                        <p>CODE</p>
                        <p>INNOVATION</p>
                        <p>DESING</p>
                    </div>
                    <img src={logo} alt="" />
                    <h2>WHERE CREATIVITY COLLIDES</h2>
                    </div>
                    <div className='column-d'>
                        <p>
                        Software is 
                        a great combination between artistry and engineering. When you finally
                        get done 
                        and get to appreciate
                        what you have done it is like a part of yourself that you've put together. I think a lot
                        of the people here feel that way. 
                        <br /><span>- Bill gates</span>
                        </p>
                        
                    </div>
                    {/* <div className='list'>
                        <p>ART</p>
                        <p>CODE</p>
                        <p>INNOVATION</p>
                        <p>DESING</p>
                    </div>
                    <img src={logo} alt="" />
                    <h2>WHERE CREATIVITY COLLIDES</h2> */}
                </div>
                <div className='bottom'>
                    <p>
                    Join The Sphere and unlock the power of art and code to express yourself, 
                    connect with others, and explore the world in a whole new light. With our community of passionate creatives, 
                    you'll embark on a journey of creativity, growth, and meaningful connections. Whether you're an experienced pro or 
                    just starting out, there's a place for you in The Sphere. Start capturing your story today.
                    </p>
                    <Link className='joinButton' to="/register">JOIN NOW!</Link>
                    {/* <a className='joinButton' href="">JOIN NOW!</a> */}
                    <Link className='text-a' to="/login">ALREDY HAVE AN ACCOUNT? LOG IN!</Link>
                </div>
            </div>
        </section>
    )
}

export default Home
