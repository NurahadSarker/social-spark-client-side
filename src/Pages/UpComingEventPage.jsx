import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const UpComingEventPage = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`https://social-spark-server-side.vercel.app/events?search=${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                const today = new Date();
                const upcomingEvents = data.filter(event => new Date(event.date) >= today);

                setEvents(upcomingEvents);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [searchTerm]);

    return (
        <div className="max-w-[400px] mx-auto md:max-w-[1200px] md:mx-auto py-10">
            <h1 className='text-3xl md:text-5xl font-bold text-center text-[#29B467] mb-10'>
                Up Coming Event
            </h1>

            <div className="text-center mb-2">
                <input
                    type="text"
                    placeholder="Search event by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-400 px-4 py-2 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>
            {loading && (
                <div className="flex justify-center my-20">
                    <span className="loading loading-spinner loading-lg text-green-500"></span>
                </div>
            )}
            {!loading && events.length === 0 && (
                <p className="text-center text-xl font-semibold text-gray-500 mt-10">
                    No Events Yet
                </p>
            )}
            {!loading && events.length > 0 && <Card events={events}></Card>}
        </div>
    );
};

export default UpComingEventPage;
