import React from 'react';
import Banner from '../Banner/Banner';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;