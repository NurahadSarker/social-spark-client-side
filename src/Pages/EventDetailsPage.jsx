import React from 'react';

const EventDetailsPage = () => {
    return (
        <div className='max-w-[1200px] mx-auto py-20'>
            <h1 className='text-5xl font-bold text-center text-[#29B467] mb-10'>More Info For Every Event</h1>
            <div className='flex items-center gap-5 mb-5'>
                <div className='h-[300px] w-[450px] bg-gray-400 flex items-center justify-center'>
                    <h1>Image</h1>
                </div>
                <div>
                    <h1>Event Title</h1>
                    <p>Location</p>
                    <p>Event type</p>
                    <p>Event date</p>
                </div>
            </div>
            <div className='text-justify mb-5'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam consectetur reprehenderit consequuntur minus non odit quidem vero iure rerum id cum at modi, itaque sed commodi blanditiis error distinctio? Ad, quasi? Aliquid eius ipsa doloremque iste quod accusamus quisquam natus enim, dicta vel ducimus consectetur ex magnam iusto sed maxime molestias alias, sunt nemo. Magni quaerat pariatur non, fugit quisquam reiciendis ipsum cupiditate, laudantium labore odit in quidem corporis corrupti, mollitia autem molestiae voluptate culpa dolore deserunt perferendis! Error reiciendis enim quae neque in quasi natus, culpa vel unde eveniet cupiditate praesentium ipsum libero corrupti quo, facere soluta dignissimos architecto. Velit, ad et molestiae recusandae nam optio, autem, veniam veritatis voluptates sequi ratione doloribus quidem quis. Aperiam recusandae labore, quidem ab perferendis corrupti odit consequuntur natus veritatis explicabo eveniet officiis inventore fuga debitis asperiores quod porro modi pariatur enim fugiat vitae assumenda quaerat! Neque autem, quibusdam et vitae nesciunt suscipit!</p>
            </div>
            <button className='btn bg-[#29B467] text-white'>Join Event</button>
        </div>
    );
};

export default EventDetailsPage;