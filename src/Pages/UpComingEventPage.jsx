import React from 'react';
import { Link } from 'react-router';

const UpComingEventPage = () => {
    return (
        <div className='max-w-[1200px] mx-auto py-20'>
            <h1 className='text-5xl font-bold text-center text-[#29B467] mb-10'>Up Coming Event</h1>
            <div className='grid grid-cols-4 gap-5'>
                <div className='border border-[#29B467] bg-gray-100 p-2'>
                    <div className='h-[200px] w-full bg-gray-400 flex items-center justify-center'><h1>Image</h1></div>
                    <h1>Event title</h1>
                    <p>Location</p>
                    <div className='flex items-center justify-between'>
                        <p>Event type</p>
                        <p>Date</p>
                    </div>
                    <Link to={'/event-details'} className='btn bg-[#29B467] text-white'>Event Details</Link>
                </div>

                <div className='border border-[#29B467] bg-gray-100 p-2'>
                    <div className='h-[200px] w-full bg-gray-400 flex items-center justify-center'><h1>Image</h1></div>
                    <h1>Event title</h1>
                    <p>Location</p>
                    <div className='flex items-center justify-between'>
                        <p>Event type</p>
                        <p>Date</p>
                    </div>
                    <button className='btn bg-[#29B467] text-white'>Event Details</button>
                </div>

                <div className='border border-[#29B467] bg-gray-100 p-2'>
                    <div className='h-[200px] w-full bg-gray-400 flex items-center justify-center'><h1>Image</h1></div>
                    <h1>Event title</h1>
                    <p>Location</p>
                    <div className='flex items-center justify-between'>
                        <p>Event type</p>
                        <p>Date</p>
                    </div>
                    <button className='btn bg-[#29B467] text-white'>Event Details</button>
                </div>

                <div className='border border-[#29B467] bg-gray-100 p-2'>
                    <div className='h-[200px] w-full bg-gray-400 flex items-center justify-center'><h1>Image</h1></div>
                    <h1>Event title</h1>
                    <p>Location</p>
                    <div className='flex items-center justify-between'>
                        <p>Event type</p>
                        <p>Date</p>
                    </div>
                    <button className='btn bg-[#29B467] text-white'>Event Details</button>
                </div>

                <div className='border border-[#29B467] bg-gray-100 p-2'>
                    <div className='h-[200px] w-full bg-gray-400 flex items-center justify-center'><h1>Image</h1></div>
                    <h1>Event title</h1>
                    <p>Location</p>
                    <div className='flex items-center justify-between'>
                        <p>Event type</p>
                        <p>Date</p>
                    </div>
                    <button className='btn bg-[#29B467] text-white'>Event Details</button>
                </div>
            </div>
        </div>
    );
};

export default UpComingEventPage;