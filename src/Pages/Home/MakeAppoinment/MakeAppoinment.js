import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appoinment from '../../../assets/images/appointment.png';
import ButtonPrimary from '../../../Componentes/ButtonPrimary';

const MakeAppoinment = () => {
    return (

        <section style={{
            background: `url(${appoinment})`
        }}>
            <div className="hero">
                <div className=" flex justify-between items-center flex-col lg:flex-row">
                    <div className='lg:w-1/2 flex'>
                        <img src={doctor} alt='' className=" -mt-32 hidden lg:block rounded-lg shadow-2xl mx-auto" />
                    </div>
                    <div className='lg:w-1/2 mx-5 my-10'>
                        <h2 className='text-lg font-semibold text-[#19D3AE]'>Appointment</h2>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary>Getting Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;