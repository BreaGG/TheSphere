import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import LogoSphere from '../../assets/img/SPHERE.svg';
import './navbar.css';

function Navbar({ setSearchTerm }) {
    const [searchInput, setSearchInput] = useState('');
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(searchInput);
        navigate('/');
    };

    return (
        <nav>
            <NavLink to="/">
                <img src={LogoSphere} alt="Logo Sphere" />
            </NavLink>
            <NavLink className="navButton" to="/">
                FOR YOU
            </NavLink>
            <NavLink className="navButton" to="/feedDesign">
                DESIGN
            </NavLink>
            <NavLink className="navButton" to="/feedDev">
                DEVS
            </NavLink>
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleChange}
                    />
                </form>
            </div>
            <NavLink className="shareButton" to="/create-post">
                SHARE YOUR WORK
            </NavLink>
            {user ? (
                <NavLink to={`/users/${user.id}`}>
                    <img src={user.profilePic} alt="Profile" className="ProfilePic" />
                </NavLink>
            ) : (
                <NavLink className="sphereButton" to="/login">LOGIN</NavLink>
            )}
        </nav>
    );
}

export default Navbar;
