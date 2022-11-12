import React from 'react';

const TestimonialInfo = ({ reviewData }) => {
    const { name, image, location, review } = reviewData;
    return (
        <div className="card w-full text-primary-content shadow-xl my-16 ">
            <div className="card-body">
                <p>{review}</p>
                <div className='flex items-center gap-5 mt-6'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-[#19D3AE] ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>{name}</h1>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialInfo;