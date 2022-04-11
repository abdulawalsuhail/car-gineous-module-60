import React from 'react';
import Baner from '../baner/Baner';
import Experts from '../Experts/Experts';
import Services from '../services/Services';

const Home = () => {
    return (
        <>
            <Baner />
            <Services />
            <Experts />
        </>
    );
};

export default Home;