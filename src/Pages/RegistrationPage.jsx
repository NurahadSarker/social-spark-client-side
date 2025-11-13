import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const RegistrationPage = () => {
    const { createUser, setUser, signInWithGoogle, updateUser } = use(AuthContext)
    const [error, setError] = useState("")
    const [passValidation, setPassValidation] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        // console.log(e.target)
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (password.length < 6) {
            setPassValidation("Password must include an uppercase, lowercase, and be at least 6 characters long")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setPassValidation("Password must include an uppercase, lowercase, and be at least 6 characters long");
            return;
        } else if (!/[a-z]/.test(password)) {
            setPassValidation("Password must include an uppercase, lowercase, and be at least 6 characters long");
            return;
        }
        else {
            setPassValidation("")
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo, email: email })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo, email: email })
                        const newUser = {
                            name: result.user.displayName,
                            email: result.user.email,
                            image: result.user.photoURL
                        }
                        console.log("Google user:", newUser);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        }).then(res => res.json())
                            .then(data => {
                                console.log('Data after save users', data)
                            })
                        alert('Registration successful!!')
                        navigate(location.state || "/");
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            })
    }
    const handleShowPasswordBtn = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }
                console.log("Google user:", newUser);
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                }).then(res => res.json())
                    .then(data => {
                        console.log('Data after save users', data)
                    })
                alert('Register with gmail Successfully!!')
                navigate(`/`)
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen py-20">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <h1 className='text-center text-[20px] font-bold mb-2 text-[#29B467]'>Register Your Account</h1>
                        <div className='border-b border-gray-400 mb-2'></div>
                        {/* name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />

                        {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        {/* password */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input name='password' type={showPassword ? 'text' : 'password'} className="input" placeholder="Password" required />
                            <button onClick={handleShowPasswordBtn} className='top-3 right-7 text-[18px] absolute hover:cursor-pointer'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                        </div>

                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        {
                            passValidation && <p className='text-red-500'>{passValidation}</p>
                        }

                        <button type='submit' className="btn btn-neutral mt-4 text-white bg-[#29B467] border-0">Register</button>

                        <h1 className='py-1 text-[18px] font-semibold text-center'>Or</h1>

                        {/* login-with-google */}
                        <button onClick={handleSignInWithGoogle} type='button' className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                        </button>

                        <div className='flex justify-center mt-2'>
                            <div className='flex items-center gap-1 font-semibold'>
                                <p>If you have an account</p>
                                <Link to={`/auth/login`} className="link link-hover underline text-[#29B467]">Login</Link>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;