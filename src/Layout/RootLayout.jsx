import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Main from '../Components/Main';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen poppins'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet>
                    <Main></Main>
                </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;