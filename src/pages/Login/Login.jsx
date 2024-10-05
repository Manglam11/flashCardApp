import React, { useState } from 'react';
import loginbg from '../../assets/login-bg.svg';
import { dosignInWithEmailAndPassword, doSignInWithGithub, doSignInWithGoogle } from '../../utils/auth'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setErrorMessage('')
            await dosignInWithEmailAndPassword(email, password, rememberMe);
            toast.success("Login Successfull!", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
            setTimeout(() => {
                navigate('/')
            }, (2000))
        } catch (error) {
            console.error("Login failed!", error)
            setErrorMessage(error.message || "an error occured during login..")
            toast.error("Login Failed!", {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
        }

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setErrorMessage('')
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        setErrorMessage('')
    }
    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked)
    }

    const handleGoogleSignIn = async () => {
        try {
            await doSignInWithGoogle();
            toast.success("Google Sign-in Successful!")
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } catch (error) {
            console.error("Google sign in failed!", error);
            toast.error(`Google Sign-in Failed: ${error.message}`);
        }
    }

    const handleGithubSignIn = async () => {
        try {
            await doSignInWithGithub();
            toast.success("GitHub Sign-in Successful!")
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } catch (error) {
            console.error("GitHub sign in failed!", error.message)
            toast.error("GitHub Sign-in Faild. Plese try again.")
        }
    }
    return (

        <section className="h-screen">
            <ToastContainer />
            {errorMessage && (
                <div className='text-red-500 text-sm mt-2'>
                    {errorMessage}
                </div>
            )}
            <div className="container h-full px-6 py-24">
                <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* Left column container with background */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img src={loginbg} className="w-full" alt="Login background" />
                    </div>

                    {/* Right column container with form */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={handleSubmit}>
                            {/* Email input */}
                            <div className={`relative mb-3 ${email && 'data-[twe-input-state-active]:placeholder-active'}`} data-twe-input-wrapper-init>
                                <label
                                    htmlFor="email"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    onChange={handleEmailChange}
                                    id="email"
                                    value={email}
                                    placeholder="Email address"
                                    className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-primary focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                />

                            </div>

                            {/* Password input */}
                            <div className={`relative mb-6 ${password && 'data-[twe-input-state-active]:placeholder-active'}`} data-twe-input-wrapper-init>
                                <label
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    onChange={handlePasswordChange}
                                    id="password"
                                    value={password}
                                    placeholder="Password"
                                    className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-primary focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                />

                            </div>

                            {/* Remember me checkbox */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        checked={rememberMe}
                                        onChange={handleRememberMeChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="rememberMe"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                {/* Forgot password link */}
                                <a
                                    href="#!"
                                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            {/* Submit button */}

                            <button
                                type="submit"
                                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            >
                                Sign in
                            </button>


                            {/* Divider */}
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>

                            {/* Social login buttons */}
                            <button
                                onClick={handleGoogleSignIn}
                                className="mb-3 flex w-full items-center justify-center rounded bg-red-600 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc2626] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(220,38,38,0.3),0_4px_18px_0_rgba(220,38,38,0.2)] focus:bg-red-700 focus:shadow-[0_8px_9px_-4px_rgba(220,38,38,0.3),0_4px_18px_0_rgba(220,38,38,0.2)] focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-[0_8px_9px_-4px_rgba(220,38,38,0.3),0_4px_18px_0_rgba(220,38,38,0.2)]"
                                type="button"
                            >
                                <FaGoogle className="mr-2 h-3.5 w-3.5" />
                                Continue with Google
                            </button>
                            <button
                                onClick={handleGithubSignIn}
                                className="mb-3 flex w-full items-center justify-center rounded bg-gray-800 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#1f2937] transition duration-150 ease-in-out hover:bg-gray-900 hover:shadow-[0_8px_9px_-4px_rgba(31,41,55,0.3),0_4px_18px_0_rgba(31,41,55,0.2)] focus:bg-gray-900 focus:shadow-[0_8px_9px_-4px_rgba(31,41,55,0.3),0_4px_18px_0_rgba(31,41,55,0.2)] focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-[0_8px_9px_-4px_rgba(31,41,55,0.3),0_4px_18px_0_rgba(31,41,55,0.2)]"
                                type="button"
                            >
                                <FaGithub className="mr-2 h-3.5 w-3.5" />
                                Continue with GitHub
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Login;