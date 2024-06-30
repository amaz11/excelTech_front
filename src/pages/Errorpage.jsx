import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="px-4 text-center">
                <h1 className="mb-4 font-bold text-6xl text-red-500">404</h1>
                <h2 className="mb-2 font-semibold text-2xl text-gray-800">Page Not Found</h2>
                <p className="mb-6 text-gray-600">Sorry, the page you are looking for does not exist or has been moved.</p>
                <Link href="/" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white transition">
                    Go Back Home
                </Link>
            </div>
        </div>


    )
}

export default Errorpage