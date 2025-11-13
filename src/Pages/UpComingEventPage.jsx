import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const UpComingEventPage = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/events?search=${searchTerm}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [searchTerm]);

    return (
        <div className="max-w-[1200px] mx-auto py-10">
            <h1 className='text-5xl font-bold text-center text-[#29B467] mb-10'>Up Coming Event</h1>
            <div className="text-center mb-2">
                <input 
                    type="text" 
                    placeholder="Search event by title..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="border border-gray-400 px-4 py-2 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>

            <Card events={events}></Card>
        </div>
    );
};

export default UpComingEventPage;
