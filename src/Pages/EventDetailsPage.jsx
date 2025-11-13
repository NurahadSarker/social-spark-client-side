import React from 'react';
import { useLoaderData } from 'react-router';

const EventDetailsPage = () => {
    const events = useLoaderData()
    console.log(events)
    return (
        <div className='max-w-[1200px] mx-auto py-20'>
            <h1 className='text-5xl font-bold text-center text-[#29B467] mb-10'>More Info For Every Event</h1>
            <div>
                <div className='flex items-center gap-5 mb-5'>
                    <div className='h-[300px] w-[450px] bg-gray-100 p-2 border border-[#29B467] flex items-center justify-center'>
                        <img className='w-full h-full object-cover' src={events.thumbnailImage} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[32px] font-bold mb-2'>{events.title}</h1>
                        <p className='text-[22px] font-semibold mb-2'>{events.location}</p>
                        <p className='text-[22px] font-semibold mb-2'>{events.eventType}</p>
                        <p className='text-[22px] font-semibold mb-2'>{events.date}</p>
                    </div>
                </div>
                <div className='text-justify mb-5'>
                    <h1 className='text-[18px]'>Description</h1>
                    <p>{events.eventDescription}</p>
                </div>
                <button className='btn bg-[#29B467] text-white'>Join Event</button>
            </div>
        </div>
    );
};

export default EventDetailsPage;