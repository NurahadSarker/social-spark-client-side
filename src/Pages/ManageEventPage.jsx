import React from 'react';
import { Link } from 'react-router';

const ManageEventPage = () => {
    return (
        <div className='max-w-[1200px] mx-auto py-20'>
            <h1 className='text-5xl font-bold text-[#29B467] mb-3'>Manage Event</h1>
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
                        <tr>
                            <td>Road Cleaning</td>
                            <td>11/11/2025</td>
                            <td>Mirpur 10, Dhaka</td>
                            <td>Cleanup</td>
                            <td>
                                <Link to={'/update-event'} className='btn bg-[#29B467] text-white mr-2'>Update</Link>
                                <button className='btn bg-red-500 text-white'>Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>Road Cleaning</td>
                            <td>11/11/2025</td>
                            <td>Mirpur 10, Dhaka</td>
                            <td>Cleanup</td>
                            <td>
                                <Link to={'/update-event'} className='btn bg-[#29B467] text-white mr-2'>Update</Link>
                                <button className='btn bg-red-500 text-white'>Delete</button>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Road Cleaning</td>
                            <td>11/11/2025</td>
                            <td>Mirpur 10, Dhaka</td>
                            <td>Cleanup</td>
                            <td>
                                <Link to={'/update-event'} className='btn bg-[#29B467] text-white mr-2'>Update</Link>
                                <button className='btn bg-red-500 text-white'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEventPage;