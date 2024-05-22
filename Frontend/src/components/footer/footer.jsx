import { Link} from 'react-router-dom';
import './footer.css';

function Footer() {

    return (
        <footer>
            <div>
                <h1>ABOUT</h1>
                <Link to="/contact">CONTACT</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/about">ABOUT US</Link>
            </div>
            <div>
                <h1>PRIVACITY</h1>
                <Link to="/contact">RULES</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">SETTINGS</Link>
            </div>
            <div>
                <h1>COMMUNITY</h1>
                <Link to="/code-of-conduct">CODE OF CONDUCT</Link>
                <Link to="/faq">FAQ</Link>
            </div>
            <div>
                <h1>HELP</h1>
                <Link to="/contact">BASICS</Link>
                <Link to="/contact">ACCOUNT</Link>
                <Link to="/contact">LEGAL</Link>
            </div>
            <div>
                <h1>SOCIALS</h1>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</Link>
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</Link>
            </div>
        </footer>
    );
}

export default Footer;
