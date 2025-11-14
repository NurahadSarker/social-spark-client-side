import React from 'react';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';
import Image4 from '../assets/image4.jpg';
import Image5 from '../assets/image5.jpg';
import Marquee from 'react-fast-marquee';

const GallerySection = () => {
    return (
        <div className='max-w-[400px] mx-auto md:max-w-[1200px] md:mx-auto py-5 md:pt-20 md:pb-10'>
            <div className='flex flex-col items-center justify-center mb-10'>
                <h1 className='text-3xl md:text-5xl font-bold text-[#29B467] mb-2'>Our Gallery</h1>
            </div>
            <div>
                <Marquee>
                    <div className='w-[500px] h-[280px] mr-2'>
                        <div className='w-full h-full flex items-center justify-center border border-[#29B467] p-3'>
                            <img className='w-full h-full object-cover' src={Image1} alt="" />
                        </div>
                    </div>

                    <div className='w-[500px] h-[280px] mr-2'>
                        <div className='w-full h-full flex items-center justify-center border border-[#29B467] p-3'>
                            <img className='w-full h-full object-cover' src={Image2} alt="" />
                        </div>
                    </div>

                    <div className='w-[500px] h-[280px] mr-2'>
                        <div className='w-full h-full flex items-center justify-center border border-[#29B467] p-3'>
                            <img className='w-full h-full object-cover' src={Image3} alt="" />
                        </div>
                    </div>

                    <div className='w-[500px] h-[280px] mr-2'>
                        <div className='w-full h-full flex items-center justify-center border border-[#29B467] p-3'>
                            <img className='w-full h-full object-cover' src={Image4} alt="" />
                        </div>
                    </div>

                    <div className='w-[500px] h-[280px] mr-2'>
                        <div className='w-full h-full flex items-center justify-center border border-[#29B467] p-3'>
                            <img className='w-full h-full object-cover' src={Image5} alt="" />
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default GallerySection;