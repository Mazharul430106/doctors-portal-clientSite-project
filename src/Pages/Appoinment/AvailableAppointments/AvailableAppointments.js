import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppiontmentOptions from '../AppointmentOptions/AppiontmentOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appiontmentOtions, setAppiontmentOtions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setAppiontmentOtions(data))
    }, [])

    return (
        <section className='my-16'>
            <div>
                <p className='text-center font-bold text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appiontmentOtions.map(option => <AppiontmentOptions
                        setTreatment={setTreatment}
                        key={option._id} option={option}
                    >
                    </AppiontmentOptions>)
                }
            </div>
            {
                treatment  &&
                <BookingModal treatment={treatment}></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointments;