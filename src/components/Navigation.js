import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact="true" to="/" className={(navData) => navData.isActive ? "nav-active" : ""}>Accueil</NavLink>
            <NavLink exact="true" to="/about" className={(navData) => navData.isActive ? "nav-active" : ""}>About</NavLink>
            <NavLink exact="true" to="/helloWorld" className={(navData) => navData.isActive ? "nav-active" : ""}>Hello World</NavLink>
        </div>
    );
};

export default Navigation;
