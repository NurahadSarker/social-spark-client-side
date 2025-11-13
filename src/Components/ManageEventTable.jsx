import React from 'react';
import { Link } from 'react-router';

const ManageEventTable = ({events}) => {

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
                        <tr>
                        <td>{events.title}</td>
                        <td>{events.date}</td>
                        <td>{events.location}</td>
                        <td>{events.eventType}</td>
                        <td>
                            <Link to={'/update-event'} className='btn bg-[#29B467] text-white mr-2'>Update</Link>
                            <button className='btn bg-red-500 text-white'>Delete</button>
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageEventTable;