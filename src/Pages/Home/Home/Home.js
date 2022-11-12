import React from 'react';
import Banner from '../Banner/Banner';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;