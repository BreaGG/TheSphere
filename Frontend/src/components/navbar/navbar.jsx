import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoSphere from '../../assets/img/SPHERE.svg';
import './navbar.css';

function Navbar({ setSearchTerm }) {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Submit:', searchInput); console log para depurar y ver si recogia bien el valor
        setSearchTerm(searchInput);
        setSearchInput('');
    };

    return (
        <nav>
            <NavLink to="/feed">
                <img src={LogoSphere} alt="" />
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
            <NavLink to="/">profilepic</NavLink>
        </nav>
    );
}

export default Navbar;
