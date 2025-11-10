import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/social-spark-logo.png';

const Navbar = () => {
    const navLinks = <>
        <li className='btn1'><NavLink to={'/'}>Home</NavLink></li>
        <li className='btn1'><NavLink to={'/up-coming-event'}>Up Coming Events</NavLink></li>
        <li className='btn1'><NavLink>About Us</NavLink></li>
        <li className='btn1'><NavLink>Blog</NavLink></li>
        <li className='btn1'><NavLink>Contact</NavLink></li>
    </>
    const eventLinks = <>
        <li className='btn1'><NavLink to={'/create-event'}>Create Event</NavLink></li>
        <li className='btn1'><NavLink to={'/manage-event'}>Manage Events</NavLink></li>
        <li className='btn1'><NavLink to={'/joined-even'}>Joined Events</NavLink></li>
    </>
    return (
        <>
            <div className="bg-base-100 shadow-sm">
                <div className="navbar max-w-[1200px] mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                        <div>
                            <Link to={'/'}><img className='w-25' src={logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end mr-3">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {eventLinks}
                            </ul>
                        </div>
                        <Link to={'/auth/login'} className="button2">Login</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;