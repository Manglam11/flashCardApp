import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import registerSvg from '../../assets/register-svg.svg'; // Make sure to have this SVG in your assets
import { ToastContainer, toast } from 'react-toastify'
import { doCreateUserWithEmailAndPassword, doUpdateProfile } from '../../utils/auth.js'


const Register = () => {
    const { initializeUser } = useAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrenth] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistering, setIsRegistering] = useState(false)
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        // Basic email regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isStrongPassword = (password) => {
        // Password should be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        const result = passwordRegex.test(password);
        console.log('Password strength check:', password, result);
        return result;
    };

    const checkPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]+/)) strength++;
        if (password.match(/[A-Z]+/)) strength++;
        if (password.match(/[0-9]+/)) strength++;
        if (password.match(/[$@#&!]+/)) strength++;

        switch (strength) {
            case 0:
            case 1:
                return 'Very Weak';
            case 2:
                return 'Weak';
            case 3:
                return 'Medium';
            case 4:
                return 'Strong';
            case 5:
                return 'Very Strong';
            default:
                return '';
        }
    }

    useEffect(() => {
        setPasswordStrenth(checkPasswordStrength(password))
    }, [password])

    const getPasswordStrengthColor = () => {
        switch (passwordStrength) {
            case 'Very Weak':
                return 'red';
            case 'Weak':
                return 'orange';
            case 'Medium':
                return 'yellow';
            case 'Strong':
                return 'lime';
            case 'Very Strong':
                return 'green';
            default:
                return 'transparent';
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.")
            return;
        }
        if (!isStrongPassword(password)) {
            console.log('Password failed strength check:', password);
            setErrorMessage("Please enter a strong password.")
            return;
        }
        setIsRegistering(true)
        try {
            setErrorMessage('')
            const userCredential = await doCreateUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            await doUpdateProfile(user, {
                displayName: `${firstName}`,
            });
            console.log("User after registration:", user); // Add this line
            await user.reload()
            toast.success("Registration Successfull!", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
            initializeUser(user);
            navigate('/');

        } catch (error) {
            console.error("Registration failed!", error)
            setErrorMessage(error.message || "an error occured during registration..")
            toast.error("Registration Failed!", {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
        }
        finally {
            setIsRegistering(false)

        }
    }

    const inputClass = "peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-primary focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0";

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
                    <div className="mb-9 md:mb-0 md:w-8/12 lg:w-6/12 h-[600px]">
                        <img src={registerSvg} className="w-full h-full object-contain" alt="Register background" />
                    </div>

                    {/* Right column container with form */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Create an Account</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                            <div className="flex space-x-4">
                                {/* First Name input */}
                                <div className="flex-1">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className={inputClass}
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                {/* Last Name input */}
                                <div className="flex-1">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className={inputClass}
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>
                            {/* Email input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={inputClass}
                                    required
                                    aria-required="true"
                                />
                            </div>
                            {/* Password input */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={inputClass}
                                    required
                                    aria-required="true"
                                />
                                {password && (
                                    <div className="mt-1">
                                        <div className="text-sm">Password strength: {passwordStrength}</div>
                                        <div
                                            className="h-2 w-full mt-1 rounded-full"
                                            style={{ backgroundColor: getPasswordStrengthColor() }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={isRegistering}
                                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            >
                                {isRegistering ? "Registering..." : "Create Account"}
                            </button>
                        </form>
                        <div className="mt-6 text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Login here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >





    );
};

export default Register;