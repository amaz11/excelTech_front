import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const [sideBarTogle, setsideBarTogle] = useState(false);
    return (
        <>
            <div>
                <div
                    className={`fixed bg-white border-r top-0 left-0 w-[250px] h-full z-10 transition-all duration-700 ${sideBarTogle ? "ml-[-250px] " : ""
                        }`}
                >
                    <Sidebar
                        sideBarTogle={sideBarTogle}
                        setsideBarTogle={setsideBarTogle}
                    />
                </div>
                <div
                    className={`${sideBarTogle ? "ml-[0px]" : "ml-[0px] md:ml-[250px]"
                        } transition-all duration-700`}
                >
                    <Navbar sideBarTogle={sideBarTogle} setsideBarTogle={setsideBarTogle} />
                    <div className="px-4 pt-4">
                        <Outlet />
                    </div>
                    {sideBarTogle ? null : (
                        <div
                            className="block top-0 left-0 fixed md:hidden bg-black opacity-40 w-full h-full"
                            onClick={() => setsideBarTogle(!sideBarTogle)}
                        ></div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Dashboard
