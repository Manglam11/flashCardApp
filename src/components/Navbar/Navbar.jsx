import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'; // Adjust the import path as needed

import logo from '../../assets/flashCard-Logo.jpg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const { currentUser, userLoggedIn, logout } = useAuth(); // Assuming these are provided by your AuthContext

    const handleLogout = async () => {
        try {
            await logout();
            // Handle successful logout (e.g., redirect to home page)
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-full flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse ml-4">
                    <img src={logo} className="h-12 w-12 rounded-xl" alt="Flashcard Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flashcard App</span>
                </Link>
                <div className="flex items-center md:order-2">
                    {userLoggedIn ? (
                        <button
                            type="button"
                            className="flex text-lg bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `text-lg font-medium rounded-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 ${isActive
                                    ? "text-blue-800 dark:text-blue-400"
                                    : "text-gray-800 dark:text-white"
                                } hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-700`
                            }
                        >
                            Login
                        </NavLink>
                    )}
                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                    <ul className="flex flex-col font-medium text-lg p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/createflashcard"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }
                            >
                                Create Flashcard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myflashcard"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }
                            >
                                My Flashcards
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/study"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }
                            >
                                Study
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {isUserDropdownOpen && userLoggedIn && (
                    <div className="z-50 absolute right-0 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-lg text-gray-900 dark:text-white">{currentUser.displayName}</span>
                            <span className="block text-lg text-gray-500 truncate dark:text-gray-400">{currentUser.email}</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <Link to="/profile" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</Link>
                            </li>
                            <li>
                                <Link to="/settings" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav >
    );
};

export default Navbar