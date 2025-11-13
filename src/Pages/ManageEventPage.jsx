import React, { useEffect, useState } from 'react';
import ManageEventTable from '../Components/ManageEventTable';

const ManageEventPage = () => {
    const [events, setEvents] = useState([])
    
        useEffect(() => {
            fetch('http://localhost:5000/events')
                .then(res => res.json())
                .then(data => setEvents(data))
        }, [])
    return (
        <div className='max-w-[1200px] mx-auto py-20'>
            <h1 className='text-5xl font-bold text-[#29B467] mb-3'>Manage Event</h1>
            <ManageEventTable events={events}></ManageEventTable>
        </div>
    );
};

export default ManageEventPage;