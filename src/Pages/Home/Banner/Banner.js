import React from 'react';
import './Banner.css';
import Chare from '../../../assets/images/chair.png';
import Clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';
import ButtonPrimary from '../../../Componentes/ButtonPrimary';

const Banner = () => {
    return (
        <div>
            <div className="hero flex justify-between py-10 pb-20 mx-5 lg:mx-0">
                <div className=" flex lg:justify-between items-center gap-20  flex-col lg:flex-row-reverse">
                    
                    <img src={Chare} alt='' className=" w-full rounded-lg shadow-2xl lg:w-1/2 ml-auto" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                </div>
            </div>

            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-0'>
                <div className="card md:card-side p-5 shadow-xl bg-gradient-to-r from-secondary to-primary">
                    <figure><img src={Clock} alt="Movie" /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Open Hours</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                    </div>
                </div>
                
                <div className="card md:card-side p-5 shadow-xl  bg-accent text-white ">
                    <figure><img src={Marker} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Visit Our Location</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                    </div>
                </div>
                <div className="card md:card-side p-5 shadow-xl bg-gradient-to-r from-secondary to-primary">
                    <figure><img src={Phone} alt="Movie" /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Contact us Now</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;