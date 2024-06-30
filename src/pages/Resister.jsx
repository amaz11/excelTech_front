import React, { useState } from 'react'
import logo from '../assets/logo.png'
import backgroundImage from '../assets/background.svg'
import { useRegisterUserMutation } from '../feature/authApi';
import { toast } from 'react-toastify';

const Register = () => {
    const [registerUser] = useRegisterUserMutation();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUser(formData).unwrap();
            toast.success(res.message)

        } catch (error) {
            toast.error(error.data.message)
        }
    };

    return (
        <div className="flex justify-center bg-gray-100 min-h-screen text-gray-900">
            <div className="flex flex-1 justify-center bg-white shadow m-0 sm:m-10 sm:rounded-lg max-w-screen-xl">
                <div className="p-6 sm:p-12 lg:w-1/2 xl:w-5/12">
                    <div>
                        <img src={logo} className="w-mx-auto" />
                    </div>
                    <div className="flex flex-col items-center mt-12">
                        <form onSubmit={handleSubmit} className="flex-1 mt-8 w-full">
                            <div className="mx-auto max-w-xs">
                                <input
                                    className="border-gray-200 focus:border-gray-400 bg-gray-100 focus:bg-white px-8 py-4 border rounded-lg w-full font-medium text-sm placeholder-gray-500 focus:outline-none"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="border-gray-200 focus:border-gray-400 bg-gray-100 focus:bg-white mt-5 px-8 py-4 border rounded-lg w-full font-medium text-sm placeholder-gray-500 focus:outline-none"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="border-gray-200 focus:border-gray-400 bg-gray-100 focus:bg-white mt-5 px-8 py-4 border rounded-lg w-full font-medium text-sm placeholder-gray-500 focus:outline-none"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button className="flex justify-center items-center bg-green-400 hover:bg-green-700 focus:shadow-outline mt-5 py-4 rounded-lg w-full font-semibold text-white-500 tracking-wide transition-all duration-300 ease-in-out focus:outline-none">
                                    <svg className="-ml-2 w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy={7} r={4} />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-">
                                        Sign In
                                    </span>
                                </button>
                                <Link to={'/login'} className="mt-6 text-center text-gray-600 text-xs">
                                    Have an Acconut,
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:flex flex-1 hidden bg-green-100 text-center">
                    <div className="bg-contain bg-no-repeat bg-center m-12 xl:m-16 w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register