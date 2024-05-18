import { Link, NavLink } from 'react-router-dom';
import LogoSphere from '../../assets/img/SPHERE.svg';
import './footer.css';

function Footer() {

    return (
        <footer>
            <div>
                <h1>ABOUT</h1>
                <Link to="/contact">CONTACT</Link>
                <Link to="/contact">FAQ</Link>
                <Link to="/contact">ABOUT US</Link>
            </div>
            <div>
                <h1>PRIVACITY</h1>
                <Link to="/contact">CONTACT</Link>
                <Link to="/contact">FAQ</Link>
                <Link to="/contact">ABOUT US</Link>
            </div>
            <div>
                <h1>COMMUNITY</h1>
                <Link to="/contact">CONTACT</Link>
                <Link to="/contact">FAQ</Link>
                <Link to="/contact">ABOUT US</Link>
            </div>
            <div>
                <h1>HELP</h1>
                <Link to="/contact">CONTACT</Link>
                <Link to="/contact">FAQ</Link>
                <Link to="/contact">ABOUT US</Link>
            </div>
            <div>
                <h1>SOCIALS</h1>
                <Link to="/contact">CONTACT</Link>
                <Link to="/contact">FAQ</Link>
                <Link to="/contact">ABOUT US</Link>
            </div>
        </footer>
    );
}

export default Footer;
