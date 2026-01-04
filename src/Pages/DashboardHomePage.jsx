import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { FaCalendarAlt, FaUserCheck, FaClock, FaHistory } from "react-icons/fa";
import {
    BarChart, Bar,
    PieChart, Pie, Cell,
    LineChart, Line,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const DashboardHomePage = () => {
    const { user } = use(AuthContext);

    const [myEvents, setMyEvents] = useState([]);
    const [joinedEvents, setJoinedEvents] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        // Created events
        fetch(`https://social-spark-server-side.vercel.app/events?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyEvents(data));

        // Joined events
        fetch(`https://social-spark-server-side.vercel.app/join-events?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJoinedEvents(data));

    }, [user]);

    const today = new Date();
    const upcomingEvents = myEvents.filter(event => new Date(event.date) >= today);
    const pastEvents = myEvents.filter(event => new Date(event.date) < today);

    // Chart data
    const chartData = [
        { name: 'Created Events', value: myEvents.length },
        { name: 'Joined Events', value: joinedEvents.length },
        { name: 'Upcoming Events', value: upcomingEvents.length },
        { name: 'Past Events', value: pastEvents.length },
    ];

    const COLORS = ['#29B467', '#FFBB28', '#FF8042', '#0088FE'];

    return (
        <div className="my-10 px-4">
            {/* Welcome Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-[#29B467]">
                    Welcome back, {user?.displayName}
                </h1>
                <p className="text-[20px] font-semibold text-gray-500">
                    Manage your events, track participation, and stay organized.
                </p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">

                <div className="bg-base-200 shadow rounded-xl p-6 flex items-center gap-4 border-2 border-[#29B467]">
                    <div>
                        <div className='flex items-center gap-3 mb-2'>
                            <FaCalendarAlt className="text-3xl" />
                            <div>
                                <h2 className="text-2xl font-bold">{myEvents.length}</h2>
                            </div>
                        </div>
                        <p className="text-gray-500 font-medium">My Created Events</p>
                    </div>
                </div>

                <div className="bg-base-200 shadow rounded-xl p-6 flex items-center gap-4 border-2 border-[#29B467]">
                    <div>
                        <div className='flex items-center gap-3 mb-2'>
                            <FaUserCheck className="text-3xl" />
                            <div>
                                <h2 className="text-2xl font-bold">{joinedEvents.length}</h2>
                            </div>
                        </div>
                        <p className="text-gray-500 font-medium">My Joined Events</p>
                    </div>
                </div>

                <div className="bg-base-200 shadow rounded-xl p-6 flex items-center gap-4 border-2 border-[#29B467]">
                    <div>
                        <div className='flex items-center gap-3 mb-2'>
                            <FaClock className="text-3xl" />
                            <div>
                                <h2 className="text-2xl font-bold">{upcomingEvents.length}</h2>
                            </div>
                        </div>
                        <p className="text-gray-500 font-medium">My Upcoming Events</p>
                    </div>
                </div>

                <div className="bg-base-200 shadow rounded-xl p-6 flex items-center gap-4 border-2 border-[#29B467]">
                    <div>
                        <div className='flex items-center gap-3 mb-2'>
                            <FaHistory className="text-3xl" />
                            <div>
                                <h2 className="text-2xl font-bold">{pastEvents.length}</h2>
                            </div>
                        </div>
                        <p className="text-gray-500 font-medium">My Past Events</p>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-base-200 p-6 shadow rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Events Overview</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#29B467" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardHomePage;
