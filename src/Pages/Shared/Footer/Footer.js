import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <section style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <footer className="footer p-10 bg-light text-neutral-content text-neutral">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Our Health</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                </div>
            </footer>
            <div className='text-center mb-5'>
                <p className='text-xl'>Copyright @ 2022 All Right Reserved by Square Company LTD</p>
            </div>
        </section>
    );
};

export default Footer;