import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    // console.log(treatment);
    const date = format(selectedDate, 'PP');

    const handleBooking = event =>{ 
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        console.log(slot,name,phone, email);

        const booking = {
            appointmentDate : date,
            patient : name,
            slot,
            phone,
            email
        }
        console.log(booking)
        setTreatment(null);

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className=" bg-secondary btn-primary text-white btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" placeholder="Type here" defaultValue={date} disabled className="input w-full mb-3 input-bordered" />
                        <select name='slot' className="select select-bordered w-full mb-3">
                            {
                                slots.map((slot, index)=> <option key={index}>{slot}</option> )
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input w-full mb-3 input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full mb-3 input-bordered" />
                        <input name='email' type="text" placeholder="Email" className="input w-full mb-3 input-bordered" />
                        <input type="submit" value='Submit' className="input border-0 w-full bg-secondary font-semibold text-xl text-white mb-3 input-bordered" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;