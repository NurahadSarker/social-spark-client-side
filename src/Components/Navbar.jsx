import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-wo-text.png';
import userIcon from '../assets/user-icon.png'
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOutUser } = use(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
    const handleLogOut = () => {
        logOutUser().then(() => {
            toast.success('Log Out successfully')
        }).catch((err) => {
            toast.error(err)
        })
    }

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
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
                                className=" menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Link to={'/'}><img className='w-[45px]' src={logo} alt="" /></Link>
                            <h1 className='leading-7 text-[26px] font-bold'>Social<br />Spark</h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"}
                            className="toggle mr-2" /> */}
                        <label className="toggle text-base-content mr-2">
                            <input onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"} className="theme-controller mr-2" />

                            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                        </label>
                        <div className="dropdown dropdown-end mr-2">
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
                                className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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