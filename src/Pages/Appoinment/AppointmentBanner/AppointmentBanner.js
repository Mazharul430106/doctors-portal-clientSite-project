import React from 'react';
import chare from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero flex px-5 lg:px-0">
            <div className="w-full flex justify-between flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2'>
                    <img src={chare} alt='' className=" lg:w-full rounded-lg shadow-2xl" />
                </div>
                <div className='my-5 lg:w-1/2 flex justify-center items-center'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;