import React from 'react';
import quates from '../../../assets/icons/quote.svg';
import Pepole1 from '../../../assets/images/people1.png';
import Pepole2 from '../../../assets/images/people2.png';
import Pepole3 from '../../../assets/images/people3.png';
import TestimonialInfo from './TestimonialInfo';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winshon Herry',
            location: 'california',
            image: Pepole1,
        },
        {
            _id: 2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Elena Tusi',
            location: 'NewYork',
            image: Pepole2,
        },
        {
            _id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Albart Mera',
            location: 'Washinton Dc',
            image: Pepole3,
        }
    ]

    return (
        <section>
            <div className='flex justify-between mt-10 px-5 lg:px-0'>
                <div>
                    <h3 className='text-lg text-[#19D3AE]'>Testimonial</h3>
                    <h2 className='text-4xl font-semibold'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quates} className='w-24 lg:w-48' alt="" />    
                </figure>        
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-0'>
                {
                    reviews.map(review=> <TestimonialInfo key={review._id} reviewData={review}></TestimonialInfo>)
                }
            </div>

        </section>
    );
};

export default Testimonial;