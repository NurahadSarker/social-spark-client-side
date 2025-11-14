import React from "react";

const AboutUsPage = () => {
  return (
    <div className="max-w-[400px] mx-auto md:max-w-[1200px] md:mx-auto py-10 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#29B467] mb-10">
        About Us
      </h1>

      <div className="items-center">
        <div>
          <h2 className="text-xl md:text-3xl text-center font-semibold mb-4 text-[#29B467]">
            Together for a Better Tomorrow
          </h2>
          <p className="text-base-content mb-4 text-justify">
            SocialSpark is a community-driven platform where volunteers unite to
            bring positive change to society and the environment. We believe
            that small acts of kindness and effort can collectively make a big
            difference in the world around us.
          </p>
          <p className="text-base-content text-justify">
            Our goal is to connect people, raise awareness, and spread the
            spirit of volunteerism. We organize various activities such as
            cleanup drives, plantation programs, donation campaigns, and other
            community welfare initiatives to make the world a better place.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#29B467]">
          Our Mission & Vision
        </h3>
        <p className="text-base-content max-w-3xl mx-auto">
          “To build a conscious and active community where everyone takes
          responsibility to care for society and the environment — creating a
          sustainable and compassionate world for future generations.”
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
