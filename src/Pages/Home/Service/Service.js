import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Teeth from '../../../assets/images/whitening.png';
import Treatment from '../../../assets/images/treatment.png';
import ServiceInfo from './ServiceInfo';


const Service = () => {
    const serviceData = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            icon: Fluoride,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam blanditiis illum sapiente! Ea, vero?"
        },
        {
            id: 2,
            title: 'Cavity Filling',
            icon: Cavity,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam blanditiis illum sapiente! Ea, vero?"
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            icon: Teeth,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam blanditiis illum sapiente! Ea, vero?"
        }
    ]

    return (
        <div className='my-[106px]'>
            <div className='title text-center my-20'>
                <h3 className='text-xl font-semibold text-[#19D3AE]'>Our Service</h3>
                <h1 className='text-4xl'>Service We Provide</h1>
            </div>

            <div className='grid grid-sm-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-0 '>
                {
                    serviceData.map(service => <ServiceInfo key={service.id} service={service}></ServiceInfo>)
                }
            </div>

            <div className="hero-content mt-20 flex-col lg:flex-row mx-auto">
                <div className='lg:w-1/2'>
                    <img src={Treatment} alt='' className="max-w-sm mx-auto rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Service;