import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import GallerySection from './GallerySection';
import NewsletterSection from './NewsletterSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <GallerySection></GallerySection>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default HomePage;