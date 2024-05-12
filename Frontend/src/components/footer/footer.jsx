import { Link, NavLink } from 'react-router-dom';
import LogoSphere from '../../assets/img/SPHERE.svg';
import './footer.css';

function Footer() {

    return (
        <footer>
            <div>
                <h1>ABOUT</h1>
                <Link to="/">CONTACT</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">ABOUT US</Link>
            </div>
            <div>
                <h1>PRIVACITY</h1>
                <Link to="/">CONTACT</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">ABOUT US</Link>
            </div>
            <div>
                <h1>COMMUNITY</h1>
                <Link to="/">CONTACT</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">ABOUT US</Link>
            </div>
            <div>
                <h1>HELP</h1>
                <Link to="/">CONTACT</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">ABOUT US</Link>
            </div>
            <div>
                <h1>SOCIALS</h1>
                <Link to="/">CONTACT</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">ABOUT US</Link>
            </div>
        </footer>
    );
}

export default Footer;
