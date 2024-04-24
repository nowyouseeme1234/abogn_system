import React from 'react';
import logo from '../../assets/images/abogne_main_logo-removebg.png'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaClipboardList } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { FaShapes, FaGear } from "react-icons/fa6";
import { Link, Outlet, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Dashboard = () => {
    const location = useLocation();
    return (
        <div className='bg-primary sm:h-screen overflow-hidden'>
            <SearchBar />
            {/* left navbar  */}
            <div className=" float-left">
                <Link to={'/homepage'}> <img src={logo} alt="logo" className='container p-3' /></Link>
                {/* menu list  */}
                <h1 className=' font-[poppins] font-bold text-white p-3 text-xl tracking-wider'>
                    Main
                </h1>
                <ul>
                    <li>
                        <Link to={'/dashboard'}>
                            <span className={` flex gap-2 container py-2 ${location.pathname === '/dashboard' ? 'bg-secondary': ''} ${location.pathname === '/dashboard' ? 'ml-2': ''}`}>
                                <TfiMenuAlt className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Overview</h2>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/products'}>
                            <span className={` flex gap-2 container py-2 ${location.pathname === '/dashboard/products' ? 'bg-secondary': ''} ${location.pathname === '/dashboard/products' ? 'ml-2': ''}`}>
                                <FaShapes className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Products</h2>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/orders'}>
                            <span className={` flex gap-2 container py-2 ${location.pathname === '/dashboard/orders' ? 'bg-secondary': ''} ${location.pathname === '/dashboard/orders' ? 'ml-2': ''}`}>
                                <FaClipboardList className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Orders</h2>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/reports'}>
                            <span className={` flex gap-2 container py-2 ${location.pathname === '/dashboard/reports' ? 'bg-secondary': ''} ${location.pathname === '/dashboard/reports' ? 'ml-2': ''}`}>
                                <ImStatsDots className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Reports</h2>
                            </span>
                        </Link>
                    </li>
                </ul>
                {/* supporting list  */}
                <h1 className=' font-[poppins] font-bold text-white p-3 text-xl tracking-wide'>
                    Supporting
                </h1>
                <ul>
                    <li>
                        <Link to={'/dashboard/settings'}>
                            <span className={` flex gap-2 container py-2 ${location.pathname === '/dashboard/settings' ? 'bg-secondary': ''} ${location.pathname === '/dashboard/settings' ? 'ml-2': ''}`}>
                                <FaGear className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Settings</h2>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* the outlets  */}
            <div>
                <h1 className='text-center font-bold text-2xl py-4 text-green-400'>Inventory Managment System</h1>
                <div>
                    <Outlet />
                </div>
            </div>
            {/* <Overview /> */}
        </div>
    )
}

export default Dashboard