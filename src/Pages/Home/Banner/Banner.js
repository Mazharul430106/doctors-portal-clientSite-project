import React from 'react';
import './Banner.css';
import Chare from '../../../assets/images/chair.png';
import Clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';

const Banner = () => {
    return (
        <div>
            <div className="hero flex justify-between py-10 pb-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chare} alt='' className=" rounded-lg shadow-2xl w-1/2" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card card-side p-5 shadow-xl bg-gradient-to-r from-secondary to-primary">
                    <figure><img src={Clock} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                    </div>
                </div>
                
                <div className="card card-side p-5 shadow-xl  bg-accent text-white ">
                    <figure><img src={Marker} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                    </div>
                </div>
                <div className="card card-side p-5 shadow-xl bg-gradient-to-r from-secondary to-primary">
                    <figure><img src={Phone} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;