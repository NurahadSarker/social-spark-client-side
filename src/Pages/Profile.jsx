import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import userIcon from '../assets/user-icon.png'

const Profile = () => {
    const {user} = use(AuthContext)
    return (
        <div className="bg-base-100 max-w-4xl mx-auto my-15 shadow-lg p-10 rounded-2xl border border-[#29B467]">
            <h1 className="text-[32px] font-bold mb-5">My Profile</h1>
            <div className="flex items-center gap-5 pb-7">
                <div className="w-30 bg-base-300 rounded-full h-30 shadow-md flex items-center justify-center border border-[#29B467]">
                    <img className="w-full h-full rounded-full" src={user?.photoURL || userIcon} alt="Image" />
                </div>
                <div>
                    <h1 className="mb-2 text-[24px] font-bold">{user.displayName}</h1>
                    <p className="mb-2 text-[18px] font-semibold">{user.email}</p>
                </div>
            </div>
        </div>

    );
};

export default Profile;