import React, { use, useEffect, useState } from 'react';
import ManageEventTable from '../Components/ManageEventTable';
import { AuthContext } from '../Provider/AuthContext';

const ManageEventPage = () => {
    const [events, setEvents] = useState([])
    const { user } = use(AuthContext)
    
    useEffect(() => {
    if (user?.email) {
        Promise.all([
            fetch(`http://localhost:5000/events?email=${user.email}`).then(res => res.json()),
            fetch(`http://localhost:5000/join-events?email=${user.email}`).then(res => res.json())
        ])
            .then(([ownEvents, joinedEvents]) => {
                const ownEventsWithSource = ownEvents.map(e => ({ ...e, source: 'events' }));
                const joinedEventsWithSource = joinedEvents.map(e => ({ ...e, source: 'join-events' }));

                const allEvents = [...ownEventsWithSource, ...joinedEventsWithSource];
                setEvents(allEvents);
            })
            .catch(err => console.error('Error loading events:', err));
    }
}, [user?.email]);

    return (
        <div className='max-w-[1200px] mx-auto py-20'>
            <h1 className='text-5xl font-bold text-[#29B467] mb-3'>Manage Event</h1>
            <ManageEventTable events={events}></ManageEventTable>
        </div>
    );
};

export default ManageEventPage;