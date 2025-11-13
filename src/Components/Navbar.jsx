import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/social-spark-logo.png';
import userIcon from '../assets/user-icon.png'
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOutUser } = use(AuthContext)
    const handleLogOut = () => {
        logOutUser().then(() => {
            toast.success('Log Out successfully')
        }).catch((err) => {
            toast.error(err)
        })
    }
    const navLinks = <>
        <li className='btn1'><NavLink to={'/'}>Home</NavLink></li>
        <li className='btn1'><NavLink to={'/up-coming-event'}>Up Coming Events</NavLink></li>
        <li className='btn1'><NavLink to="/about-us">About</NavLink></li>
    </>
    const eventLinks = <>
        <li className='btn1'><NavLink to={'/create-event'}>Create Event</NavLink></li>
        <li className='btn1'><NavLink to={'/manage-event'}>Manage Events</NavLink></li>
        <li className='btn1'><NavLink to={'/joined-event'}>Joined Events</NavLink></li>
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
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
                                    title={user ? user.displayName : "Please Login"}
                                    alt="Tailwind CSS Navbar component"
                                    src={`${user ? user.photoURL : userIcon}`} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {eventLinks}
                            </ul>
                        </div>
                        <div>
                            {
                                user ? (
                                    <Link onClick={handleLogOut} className="button2">Log Out</Link>
                                ) : (<Link to={`/auth/login`} className="button2">Log In</Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;