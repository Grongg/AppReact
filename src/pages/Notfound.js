import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Notfound = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>Error, Page Not Found</h1>
        </div>
    );
};

export default Notfound;