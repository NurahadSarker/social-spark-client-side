import React from 'react';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';

const FeaturesSection = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-[1200px] mx-auto py-20'>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <h1 className='text-5xl font-bold text-[#29B467] mb-2'>Our Features</h1>
                    <div className='w-[320px] border border-[#326DB6]'></div>
                </div>
                {/*Features*/}
                <div>
                    <div className='flex items-center justify-center gap-10 mb-10'>
                        <div className='w-[500px] h-[280px]'>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img className='w-full h-full object-cover' src={Image2} alt="" />
                            </div>
                        </div>
                        <div className='w-[500px]'>
                            <h1 className='text-[22px] font-bold mb-3'>Create Event — Turn Your Ideas Into Action</h1>
                            <p className='text-justify'>Bring your vision to life through the Create Event feature. Whether it’s a tree plantation, blood donation drive, or community cleanup, you can easily organize your own event and invite others to join. Simply add details like the event title, description, location, and date — our platform takes care of the rest. Inspire others, lead by example, and make a difference in your community. With just a few clicks, transform your idea into a meaningful action that drives social change and connects people with a shared purpose.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-10 mb-10'>
                        <div className='w-[500px]'>
                            <h1 className='text-[22px] font-bold mb-3'>Join Event — Be Part of the Change</h1>
                            <p className='text-justify'>The Join Event feature connects you to social activities happening around you. From environmental campaigns to education support and charity work, you can browse upcoming events and participate in causes you care about. Each event page provides full details, allowing you to join instantly and collaborate with others. Together, we can make our communities stronger, cleaner, and more inclusive. Because every step you take toward helping others brings us all closer to a better tomorrow — and it starts right here, by joining an event.</p>
                        </div>
                        <div className='w-[500px] h-[280px]'>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img className='w-full h-full object-cover' src={Image3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-10'>
                        <div className='w-[500px] h-[280px]'>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img className='w-full h-full object-cover' src={Image1} alt="" />
                            </div>
                        </div>
                        <div className='w-[500px]'>
                            <h1 className='text-[22px] font-bold mb-3'>Manage Event — Organize with Confidence</h1>
                            <p className='text-justify'>With the Manage Event feature, you have full control over the events you’ve created. Update event details, manage participant lists, monitor engagement, or reschedule dates — all from one simple dashboard. This feature helps event organizers stay organized, efficient, and connected with participants. Whether you’re leading a small community effort or a large-scale campaign, managing everything becomes effortless. Focus more on impact and less on logistics — because true leadership means empowering others through well-managed, meaningful initiatives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;