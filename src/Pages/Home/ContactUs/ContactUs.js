import React from 'react';
import appoinment from '../../../assets/images/appointment.png';
const ContactUs = () => {
    return (
        <section className='py-20' style={{
            background: `url(${appoinment})`
        }}>
            <div className='title text-center text-white mb-5'>
                <h3 className='text-[#19D3AE] font-semibold'>Contact Us</h3>
                <h2 className='text-4xl'>Stay Connected With Us</h2>
            </div>
            <div className='w-[450px] mx-auto'>
                <form >
                    <input type="email" placeholder="Email Address" className=" mb-2 input input-bordered input-success w-full " />
                    <input type="text" placeholder="Subject" className="mb-2 input input-bordered input-success w-full" />
                    <textarea className="textarea textarea-success w-full mb-2 " placeholder="Your Message"></textarea>
                    <input type="submit" className='mb-2 w-full btn btn-primary bg-[#19D3AE] text-white' value="submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;