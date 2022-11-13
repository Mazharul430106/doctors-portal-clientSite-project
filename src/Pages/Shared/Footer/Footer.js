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
                    <Link className="link link-hover">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Weekly Checkup</Link>
                    <Link className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">Our Health</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <Link className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </footer>
            <div className='text-center mb-5'>
                <p className='text-xl'>Copyright @ 2022 All Right Reserved by Square Company LTD</p>
            </div>
        </section>
    );
};

export default Footer;