import React from 'react';
import { Link } from 'react-router';
import Card from '../Components/Card';

const eventsPromise = fetch('http://localhost:5000/events')
.then(res => res.json())

const UpComingEventPage = () => {
    return (
        <Card eventsPromise={eventsPromise}></Card>
    );
};

export default UpComingEventPage;