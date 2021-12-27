import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const HelloWorld = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>Hello World</h1>
        </div>
    );
};

export default HelloWorld;