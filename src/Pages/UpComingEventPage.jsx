import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';


const UpComingEventPage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <Card events={events}></Card>
    );
};

export default UpComingEventPage;