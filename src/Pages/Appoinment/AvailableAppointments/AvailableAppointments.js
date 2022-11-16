import React, { useState } from 'react';
import { format } from 'date-fns';
import AppiontmentOptions from '../AppointmentOptions/AppiontmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appiontmentOtions, setAppiontmentOtions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: ()=> fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())

    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppiontmentOtions(data))
    // }, [])

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <section className='my-16'>
            <div>
                <p className='text-center font-bold text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointmentOptions.map(option => <AppiontmentOptions
                        setTreatment={setTreatment}
                        key={option._id} option={option}
                    >
                    </AppiontmentOptions>)
                }
            </div>
            {
                treatment  &&
                <BookingModal treatment={treatment} selectedDate={selectedDate}  setTreatment={setTreatment}  refetch={ refetch} ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointments;