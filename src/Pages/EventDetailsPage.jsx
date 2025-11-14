import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';

const EventDetailsPage = () => {
    const { user } = use(AuthContext)
    const events = useLoaderData()
    // console.log(events)
    const navigate = useNavigate()

    

    const handleJoinBtn = (events) => {
        const joinData = {
            eventId: events._id,
            title: events.title,
            email: user.email,
            date: events.date,
            location: events.location,
            eventType: events.eventType,
            thumbnailImage: events.thumbnailImage,
            description: events.description
        };
        fetch('https://social-spark-server-side.vercel.app/join-events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(joinData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Join This Event Successfully')
                navigate('/joined-event')
            })
    }
    return (
        <div className='max-w-[400px] mx-auto md:max-w-[1200px] md:mx-auto py-20'>
            <h1 className='text-3xl md:text-5xl font-bold text-center text-[#29B467] mb-10'>More Info For Every Event</h1>
            <div>
                <div className='md:flex items-center gap-5 mb-5'>
                    <div className='md:h-[300px] md:w-[450px] bg-gray-100 p-2 border border-[#29B467] flex items-center justify-center'>
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
                    <h1 className='text-[18px] font-bold'>Description</h1>
                    <p>{events.eventDescription}</p>
                </div>
                <button onClick={() => handleJoinBtn(events)} className='btn bg-[#29B467] text-white'>Join Event</button>
            </div>
        </div>
    );
};

export default EventDetailsPage;