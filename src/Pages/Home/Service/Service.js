import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Teeth from '../../../assets/images/whitening.png';
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
        <div>
            <div className='title text-center my-5'>
                <h3>Our Service</h3>
                <h1>Service We Provide</h1>
            </div>

            <div className='grid grid-sm-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    serviceData.map(service=> <ServiceInfo key={service.id} service={service}></ServiceInfo>)
                }
            </div>

        </div>
    );
};

export default Service;