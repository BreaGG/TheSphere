import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import LogoSphere from '../../assets/img/SPHERE.svg';
import './navbar.css';

function Navbar({ setSearchTerm }) {
    const [searchInput, setSearchInput] = useState('');
    const { user } = useContext(UserContext);

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(searchInput);
        setSearchInput('');
    };

    return (
        <nav>
            <NavLink to="/feed">
                <img src={LogoSphere} alt="Logo Sphere" />
            </NavLink>
            <NavLink className="navButton" to="/feed">
                FOR YOU
            </NavLink>
            <NavLink className="navButton" to="/feed">
                DESIGN
            </NavLink>
            <NavLink className="navButton" to="/feed">
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
            <NavLink className="shareButton" to="/">
                SHARE YOUR WORK!
            </NavLink>
            {user ? (
                <NavLink to={`/users/${user.id}`}>
                    <img src={user.profilePic} alt="Profile" className="ProfilePic" />
                </NavLink>
            ) : (
                <NavLink to="/login">LOGIN</NavLink>
            )}
        </nav>
    );
}

export default Navbar;
