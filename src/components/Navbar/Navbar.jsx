import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../assets/flashCard-Logo.jpg'

const Navbar = () => {
    const { currentUser, userLoggedIn, logout } = useAuth();
    console.log("Current user in Navbar:", currentUser); // Add this line

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
                        <>
                            <span className="text-lg font-medium text-gray-900 dark:text-white mr-4">
                                {currentUser.displayName?.toUpperCase()}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-lg font-medium rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-gray-800 dark:text-white hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-700"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
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
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    `text-lg font-medium rounded-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 ${isActive
                                        ? "text-blue-800 dark:text-blue-400"
                                        : "text-gray-800 dark:text-white"
                                    } hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-700`
                                }
                            >
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
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
            </div>
        </nav>
    );
};

export default Navbar;