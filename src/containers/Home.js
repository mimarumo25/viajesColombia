import React from 'react';
import Navbar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='mt-5 d-flex justify-content-center'>
                <h1>Viajes Colombia</h1>
            </div>
        </div>
    );
}

export default Home;
