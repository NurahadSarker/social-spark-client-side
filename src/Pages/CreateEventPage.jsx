import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const CreateEventPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const handleCreateEvent = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const eventDescription = e.target.description.value
        const email = e.target.email.value;
        const eventType = e.target.eventType.value;
        const thumbnailImage = e.target.thumbnailImage.value;
        const location = e.target.location.value;
        const date = startDate.toISOString().split('T')[0];
        console.log(title, eventDescription, email, eventType, thumbnailImage, location, date)

        const newEvent = {
            title: title,
            eventDescription: eventDescription,
            email: email,
            eventType: eventType,
            thumbnailImage: thumbnailImage,
            location: location,
            date: date
        }
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Events Create Successfully')
            e.target.reset()
            navigate('/up-coming-event')
        })
        
    }
    return (
        <div className="min-h-screen py-20">
            <div className=" bg-base-100 w-full max-w-[900px] mx-auto shrink-0">
                <form onSubmit={handleCreateEvent} className="card-body">
                    <fieldset className="fieldset">
                        <h1 className='text-5xl font-bold text-[#29B467] mb-2'>Create Event</h1>

                        {/* title */}
                        <label className="label">Title</label>
                        <input name='title' type="text" className="input w-full" placeholder="Write your Event Title" required />

                        {/*description*/}
                        <label className="label">Description</label>
                        <textarea
                            className="textarea w-full"
                            placeholder="Write your Event Description..."
                            name='description'></textarea>

                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Write your email" required />

                        {/*event type*/}
                        <label className="label">Event Type</label>
                        <select name='eventType' defaultValue="Select event type" className="select w-full">
                            <option disabled={true}>Select event type</option>
                            <option>Cleanup</option>
                            <option>Plantation</option>
                            <option>Donation</option>
                        </select>

                        {/*thumbnail image url */}
                        <label className="label">Thumbnail Image URL</label>
                        <input name='thumbnailImage' type="text" className="input w-full" placeholder="Thumbnail Image URL" required />

                        {/* location */}
                        <label className="label">Location</label>
                        <input name='location' type="text" className="input w-full" placeholder="Write your location" required />

                        {/* date */}
                        <div>
                            <label className="label flex">Date</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="input input-bordered w-full cursor-pointer"
                                minDate={new Date()}
                                placeholderText="Select Event Date"
                                wrapperClassName="w-full"
                            />
                        </div>

                        <button type='submit' className="btn btn-neutral mt-4 text-white bg-[#29B467] border-0">Create Event</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default CreateEventPage;