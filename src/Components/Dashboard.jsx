import React, { use, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import userIcon from '../assets/user-icon.png'
import { FaCalendarPlus, FaChartPie, FaListAlt, FaUserCheck } from 'react-icons/fa';
import { FiHome } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

const Dashboard = () => {
    const { user } = use(AuthContext)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.querySelector("html").setAttribute("data-theme", savedTheme);
    }, []);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-[#29B467] font-semibold"
            : "text-base-content";

    return (
        <div className="drawer lg:drawer-open poppins">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300 flex justify-between">
                    <div className='flex items-center'>
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div>
                            <Link to={'/'} className='text-[22px] font-bold'>Social Spark</Link>
                        </div>
                    </div>

                    {/*profile*/}
                    <div>
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
                                className="menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-md border border-[#29B467]">
                                <li className='btn1'><Link to={'profile'} className='text-[16px]'>Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow mt-3">
                        <li className='mb-3'>
                            <NavLink to="/" className={navLinkClass} data-tip="Homepage">
                                <FiHome size={20} />
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </NavLink>
                        </li>

                        <li className='mb-3'>
                            <NavLink to="create-event" className={navLinkClass} data-tip="Create Event">
                                <FaCalendarPlus size={20} />
                                <span className="is-drawer-close:hidden">Create Event</span>
                            </NavLink>
                        </li>

                        <li className='mb-3'>
                            <NavLink to="manage-event" className={navLinkClass} data-tip="Manage Events">
                                <FaListAlt size={20} />
                                <span className="is-drawer-close:hidden">Manage Events</span>
                            </NavLink>
                        </li>

                        <li className='mb-3'>
                            <NavLink to="joined-event" className={navLinkClass} data-tip="Joined Events">
                                <FaUserCheck size={20} />
                                <span className="is-drawer-close:hidden">Joined Events</span>
                            </NavLink>
                        </li>

                        <li className='mb-3'>
                            <NavLink to="/dashboard" end className={navLinkClass} data-tip="Dashboard">
                                <FaChartPie size={20} />
                                <span className="is-drawer-close:hidden">Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;