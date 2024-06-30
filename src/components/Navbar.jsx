import React, { useEffect, useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const Navbar = ({ sideBarTogle, setsideBarTogle }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        socket.on('notification', (notification) => {
            setNotifications((prev) => [...prev, notification]);
        });

        return () => {
            socket.off('notification');
        };
    }, []);
    return (
        <div className="flex justify-between items-center shadow-sm px-4 py-3">
            <span>
                {sideBarTogle ? (
                    <RiBarChartHorizontalFill
                        className='cursor-pointer'
                        size={18}
                        onClick={() => setsideBarTogle(!sideBarTogle)}
                    />
                ) : (
                    <FaBars className='cursor-pointer' size={18} onClick={() => setsideBarTogle(!sideBarTogle)} />
                )}
            </span>
            <div className="flex items-center gap-3">

                <div className="relative group">
                    <div className="bg-gray-100 p-2 rounded-full">
                        <IoMdNotificationsOutline className='cursor-pointer' size={24} />
                    </div>
                    <div className="group-hover:top-[42px] -top-96 right-1 absolute flex flex-col bg-white shadow rounded-md w-32">
                        {notifications.map((notification, index) => <span key={index} className="hover:bg-slate-200 px-6 py-2 border-b cursor-pointer">
                            {notification.type === 'taskCreated' && `New task created: ${notification.task.title}`}
                            {notification.type === 'taskUpdated' && `Task updated: ${notification.task.title}`}
                        </span>)}
                    </div>
                </div>

                <div className="relative group">
                    <div className="bg-gray-100 p-2 rounded-full">
                        <BsPerson className='cursor-pointer' size={24} />
                    </div>
                    <div className="group-hover:top-[42px] -top-96 right-1 absolute flex flex-col bg-white shadow rounded-md w-32">
                        <span className="hover:bg-slate-200 px-6 py-2 border-b cursor-pointer">
                            Profile
                        </span>
                        <span className="hover:bg-slate-200 px-6 py-2 cursor-pointer">
                            Log-out
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar