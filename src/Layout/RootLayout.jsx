import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Main from '../Components/Main';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthContext';

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
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    className: '',
                    duration: 2000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>
        
    );
};

export default RootLayout;