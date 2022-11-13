import React from 'react';
import chare from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chare} alt='' className="max-w-sm lg:w-full rounded-lg shadow-2xl" />
                <div className='my-5'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect = {setSelectedDate}
                    ></DayPicker>
                  
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;