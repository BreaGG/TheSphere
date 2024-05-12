import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoSphere from '../../assets/img/SPHERE.svg';
import './navbar.css';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías realizar alguna acción con el término de búsqueda, como enviarlo al backend
        console.log('Buscar:', searchTerm);
        // Limpia el campo de búsqueda después de enviar el formulario
        setSearchTerm('');
    };

    const handleKeyPress = (event) => {
        // Si la tecla presionada es Enter (código 13), envía el formulario
        if (event.key === 'Enter') {
        handleSubmit(event);
        }
    };

    return (
        <nav>
        <NavLink to="/feed"><img src={LogoSphere} alt="" /></NavLink>
        <NavLink className="navButton" to="/">FOR YOU</NavLink>
        <NavLink className="navButton" to="/">DESING</NavLink>
        <NavLink className="navButton" to="/">DEVS</NavLink>
        <div className="search-container">
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            </form>
        </div>
        <NavLink className="shareButton" to="/">SHARE YOUR WORK!</NavLink>
        <NavLink to="/">profilepic</NavLink>
        </nav>
    );
}

export default Navbar;
