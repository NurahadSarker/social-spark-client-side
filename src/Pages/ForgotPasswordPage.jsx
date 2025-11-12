import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { useLocation } from 'react-router';

const ForgotPasswordPage = () => {
    const { forgotPassword } = use(AuthContext);
    const location = useLocation();
    const transferEmail = location.state?.email || '';
    const [email, setEmail] = useState(transferEmail);
    const [message, setMessage] = useState("");

    const handleForgotPassword = (e) => {
        e.preventDefault();

        setMessage("")

        if (!email) {
            setMessage("Please enter your email address");
            return
        }

        forgotPassword(email)
            .then(() => {
                alert("Please check your email");
                e.target.reset();
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    setMessage("No user found with this email");
                }
                else if (error.code === "auth/invalid-email") {
                    setMessage("Please provide valid email")

                }
                else {
                    alert(error.message);
                }
            })
    };
    return (
        <form onSubmit={handleForgotPassword} className='flex items-center justify-center my-20'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  shadow-md">

                <label className="label">Email</label>
                <input
                    type="email"
                    name='email'
                    className="input outline-0 "
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />

                <button type='submit' className="btn btn-neutral mt-4 bg-[#29B467] text-white border-0">Reset Password</button>
            </fieldset>
            <p className='text-red-500'><small>{message}</small></p>
        </form>
    );
};

export default ForgotPasswordPage;