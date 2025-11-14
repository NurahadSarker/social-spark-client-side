import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ManageEventTable = ({ events: initialEvents }) => {
    const [events, setEvents] = useState(initialEvents || [])

    useEffect(() => {
        setEvents(initialEvents);
    }, [initialEvents]);
    const handleDelete = (id, source) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://social-spark-server-side.vercel.app/${source}/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setEvents(events.filter(event => event._id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

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
                                    <Link
                                        state={{ id: events._id, source: events.source }}
                                        to={'/update-event'}
                                        className='btn bg-[#29B467] text-white mr-2'
                                    >
                                        Update
                                    </Link>

                                    <button onClick={() => handleDelete(events._id, events.source)} className='btn bg-red-500 text-white'>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
            {events.length === 0 && (
                <p className="text-center text-xl font-semibold py-10 text-gray-500">
                    No Events Yet
                </p>
            )}
        </div>
    );
};

export default ManageEventTable;