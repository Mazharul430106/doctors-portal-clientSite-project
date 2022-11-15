import React from 'react';

const AppiontmentOptions = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card mx-auto bg-base-100 shadow-xl my-10 w-96 lg:w-full">
            <div className="card-body text-center">
                <h2 className="text-2xl text-center text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn bg-secondary text-white btn-primary ">Book Appiontment</label>
                </div>
            </div>
        </div>
    );
};

export default AppiontmentOptions;