import React from 'react';
import { Link } from 'react-router';
import { IoLocationSharp } from "react-icons/io5";

const Card = ({ events }) => {
    return (
        <div className='max-w-[1200px] mx-auto py-10'>
            <div className='grid grid-cols-4 gap-5'>
                {
                    events.map(events =>
                        <div key={events._id} className='border border-[#29B467] bg-gray-100 p-2'>
                            <div className='h-[200px] w-full bg-gray-400 flex items-center justify-center mb-2'>
                                <img className='w-full h-full object-cover' src={events.thumbnailImage} alt="" />
                            </div>
                            <h1 className='line-clamp-1 font-bold text-[18px] mb-1'>{events.title}</h1>
                            <div className='mb-2 flex items-center gap-1 font-semibold'>
                                <IoLocationSharp />
                                <p>{events.location}</p>
                            </div>
                            <div className='flex items-center justify-between mb-3'>
                                <div className='bg-green-200 text-[#29B467] px-2 rounded-md'>
                                    <p>{events.eventType}</p>
                                </div>
                                <p>{events.date}</p>
                            </div>
                            <div>
                                <Link to={`/event-details/${events._id}`} className='btn bg-[#29B467] text-white text-center w-full'>Event Details</Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Card;