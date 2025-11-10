import React from 'react';
import Image1 from '../assets/image1.jpg';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen relative mb-25">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Image1})`, filter: 'brightness(45%)' }}
            ></div>
            <div className="relative hero-content text-white text-center z-10">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="mb-5 text-4xl font-bold">“Connect, Create & <br /> Contribute — Together for a Better Tomorrow.”</h1>
                    <p className="mb-5">
                        Join hands to organize and participate in social development events across Bangladesh.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;