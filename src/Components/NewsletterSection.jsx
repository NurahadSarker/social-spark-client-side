import React from 'react';

const NewsletterSection = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-[400px] mx-auto md:max-w-[1200px] md:mx-auto py-10 md:py-20'>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#29B467] mb-2 text-center'>Subscribe to our Newsletter</h1>
                </div>

                <div className='flex items-center justify-center'>
                    <div className="join">
                        <div className='mr-3'>
                            <label className="input validator join-item rounded-sm w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px]">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="Enter Your Email" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn btn-neutral button2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;