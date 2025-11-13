import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import logo from '../assets/social-spark-logo.png'
import { Link } from 'react-router';

const Footer = () => {
    const {user} = use(AuthContext)
    return (
        <div className='bg-[#cbd9e9]'>
            <footer className="footer sm:footer-horizontal text-neutral-content pt-10 pb-3 mb-3 max-w-[1200px] mx-auto border-b border-gray-500">
                <nav>
                    <img className='w-[250px]' src={logo} alt="" />
                </nav>
                <nav>
                    <h6 className="footer-title text-gray-950">Services</h6>
                    <Link to={`/up-coming-event`} className="link link-hover text-gray-950">Up Coming Events</Link>
                    <Link to={`${user ? '/create-event' : '/auth/login'}`} className="link link-hover text-gray-950"><h1>Create Event</h1></Link>
                    <Link to={`${user ? '/manage-event' : '/auth/login'}`} className="link link-hover text-gray-950">Manage Event</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-gray-950">Company</h6>
                    <Link to={'/about-us'} className="link link-hover text-gray-950">About us</Link>
                    <Link className="link link-hover text-gray-950">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-gray-950">Social Link</h6>
                    <a className="link link-hover text-gray-950">Facebook</a>
                    <a className="link link-hover text-gray-950">Twitter</a>
                    <a className="link link-hover text-gray-950">LinkedIn</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-gray-950">Legal</h6>
                    <a className="link link-hover text-gray-950">Terms of use</a>
                    <a className="link link-hover text-gray-950">Privacy policy</a>
                    <a className="link link-hover text-gray-950">Cookie policy</a>
                </nav>
            </footer>
            <div className='text-center text-gray-950 mb-5'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;