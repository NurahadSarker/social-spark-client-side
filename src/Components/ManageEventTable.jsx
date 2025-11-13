import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const ManageEventTable = ({ events: initialEvents }) => {
    const [events, setEvents] = useState(initialEvents || [])

    useEffect(() => {
        setEvents(initialEvents);
    }, [initialEvents]);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            fetch(`http://localhost:5000/events/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setEvents(events.filter(event => event._id !== id));
                    }
                });
        }
    }
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Event Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        events.map(events =>
                            <tr key={events._id}>
                                <td>{events.title}</td>
                                <td>{events.date}</td>
                                <td>{events.location}</td>
                                <td>{events.eventType}</td>
                                <td>
                                    <Link state={{ id: events._id }} to={'/update-event'} className='btn bg-[#29B467] text-white mr-2'>Update</Link>
                                    <button onClick={() => handleDelete(events._id)} className='btn bg-red-500 text-white'>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageEventTable;