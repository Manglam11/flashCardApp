import React from 'react';

import loginbg from '../../assets/login-bg.svg'


const Login = () => {
    return (
        <section className="h-screen">
            <div className="container h-full px-6 py-24">
                <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* Left column with background image */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src={loginbg}
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>

                    {/* Right column with form */}
                    <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
                        <form>
                            {/* Email input */}
                            <div className="relative mb-6">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer block w-full rounded bg-transparent px-3 py-1 leading-[2.15] outline-none transition-all duration-200 ease-linear border-0 focus:placeholder-opacity-100 peer-focus:text-primary dark:text-white dark:placeholder-gray-300"
                                    placeholder="Email address"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-3 top-0 pt-1.5 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-neutral-400"
                                >
                                    Email address
                                </label>
                            </div>

                            {/* Password input */}
                            <div className="relative mb-6">
                                <input
                                    type="password"
                                    id="password"
                                    className="peer block w-full rounded bg-transparent px-3 py-1 leading-[2.15] outline-none transition-all duration-200 ease-linear border-0 focus:placeholder-opacity-100 peer-focus:text-primary dark:text-white dark:placeholder-gray-300"
                                    placeholder="Password"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-3 top-0 pt-1.5 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-neutral-400"
                                >
                                    Password
                                </label>
                            </div>

                            {/* Remember me checkbox */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="form-checkbox rounded text-primary focus:ring-0"
                                    />
                                    <label htmlFor="remember" className="ml-2">
                                        Remember me
                                    </label>
                                </div>

                                <a href="#!" className="text-primary dark:text-primary-400">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                className="block w-full rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-dark focus:outline-none focus:ring-0"
                            >
                                Sign in
                            </button>

                            {/* Divider */}
                            <div className="my-4 flex items-center before:flex-1 before:border-t before:border-neutral-300 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold">OR</p>
                            </div>

                            {/* Social login buttons */}
                            <a
                                href="#!"
                                className="mb-3 flex items-center justify-center w-full rounded bg-blue-600 px-7 py-3 text-white text-sm font-medium uppercase transition duration-150 ease-in-out hover:bg-blue-700"
                            >
                                <span className="mr-2">
                                    {/* Facebook SVG icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                        />
                                    </svg>
                                </span>
                                Continue with Facebook
                            </a>
                            <a
                                href="#!"
                                className="flex items-center justify-center w-full rounded bg-blue-400 px-7 py-3 text-white text-sm font-medium uppercase transition duration-150 ease-in-out hover:bg-blue-500"
                            >
                                <span className="mr-2">
                                    {/* Twitter/X SVG icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                        />
                                    </svg>
                                </span>
                                Continue with X
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
