import React, { use, useEffect, useState } from 'react';
import ManageEventTable from '../Components/ManageEventTable';
import { AuthContext } from '../Provider/AuthContext';

const ManageEventPage = () => {
    const [events, setEvents] = useState([])
    const { user } = use(AuthContext)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/events?email=${user.email}`)
                .then(res => res.json())
                .then(data => setEvents(data))
        }
    }, [user?.email])
    return (
        <div className='max-w-[1200px] mx-auto py-20'>
            <h1 className='text-5xl font-bold text-[#29B467] mb-3'>Manage Event</h1>
            <ManageEventTable events={events}></ManageEventTable>
        </div>
    );
};

export default ManageEventPage;