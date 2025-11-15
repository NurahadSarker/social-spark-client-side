import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { IoLocationSharp } from 'react-icons/io5';

const JoinedEventPage = () => {
    const [events, setEvents] = useState([]);
    const { user } = use(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);

            Promise.all([
                fetch(`https://social-spark-server-side.vercel.app/events?email=${user.email}`).then(res => res.json()),
                fetch(`https://social-spark-server-side.vercel.app/join-events?email=${user.email}`).then(res => res.json())
            ])
                .then(([eventsData, joinedData]) => {
                    const allEvents = [...eventsData, ...joinedData];
                    setEvents(allEvents);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [user?.email]);

    return (
        <div className='max-w-[400px] mx-auto md:max-w-[1200px] md:mx-auto py-20'>
            <h1 className='text-3xl md:text-5xl font-bold text-center text-[#29B467] mb-10'>Joined Event</h1>
            {loading && (
                <div className="flex justify-center my-20">
                    <span className="loading loading-spinner loading-lg text-green-500"></span>
                </div>
            )}
            {!loading && events.length === 0 && (
                <p className="text-center text-xl font-semibold text-gray-500">
                    No Joined Events Yet
                </p>
            )}
            {!loading && events.length > 0 && (
                <div className='md:grid md:grid-cols-4 gap-5'>
                    {
                        events.map(events =>
                            <div key={events._id} className='border border-[#29B467] bg-base-100 p-2 mb-5 md:mb-0'>
                                <div className='h-[200px] w-full bg-gray-400 flex items-center justify-center mb-2'>
                                    <img className='w-full h-full object-cover' src={events.thumbnailImage} alt="" />
                                </div>
                                <h1 className='line-clamp-1 font-bold text-[18px] mb-1'>{events.title}</h1>
                                <div className='mb-2 flex items-center gap-1 font-semibold'>
                                    <IoLocationSharp />
                                    <p>{events.location}</p>
                                </div>
                                <div className='flex items-center justify-between mb-3'>
                                    <div className='bg-green-200 text-[#29B467] px-2 rounded-md'>
                                        <p>{events.eventType}</p>
                                    </div>
                                    <p>{events.date}</p>
                                </div>
                                <div>
                                    <Link to={`/event-details/${events._id}`} className='btn bg-[#29B467] text-white text-center w-full'>
                                        Event Details
                                    </Link>
                                </div>
                            </div>)
                    }
                </div>
            )}
        </div>
    );
};

export default JoinedEventPage;
