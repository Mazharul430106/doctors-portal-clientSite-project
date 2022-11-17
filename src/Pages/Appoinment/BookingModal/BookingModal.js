import { format } from 'date-fns/esm';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name:treatmentName, slots } = treatment;
    // console.log(treatment);
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        // console.log(slot,name,phone, email);

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            phone,
            email
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){   
                    toast.success('Booking Successfully')
                    setTreatment(null);
                    refetch();
                }else{
                    toast.error(data.message)
                }
            })
            .catch(error=> console.log(error))


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className=" bg-secondary btn-primary text-white btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{treatmentName}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" placeholder="Type here" defaultValue={date} disabled className="input w-full mb-3 input-bordered" />
                        <select name='slot' className="select select-bordered w-full mb-3">
                            {
                                slots.map((slot, index) => <option key={index}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Name" defaultValue={user?.displayName} disabled className="input w-full mb-3 input-bordered" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email" className="input w-full mb-3 input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full mb-3 input-bordered" />
                        <input type="submit" value='Submit' className="input border-0 w-full bg-secondary font-semibold text-xl text-white mb-3 input-bordered" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;