import React from 'react';
import logo from '../../assets/images/abogne_main_logo-removebg.png'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaClipboardList } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { FaShapes, FaGear } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className=' bg-primary'>
            {/* left navbar  */}
            <div className=' float-left bg-primary h-screen'>
                <a href=""> <img src={logo} alt="logo" className='container p-3' /></a>
                {/* menu list  */}
                <h1 className=' font-[poppins] font-bold text-white p-3 text-xl tracking-wider'>
                    Main
                </h1>
                <ul>
                    <li>
                        <a href="">
                            <span className=' flex gap-2 container py-2 bg-secondary ml-2'>
                                <TfiMenuAlt className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Overview</h2>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className=' flex gap-2 container py-2'>
                                <FaShapes className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Products</h2>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className=' flex gap-2 container py-2'>
                                <FaClipboardList className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Orders</h2>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className=' flex gap-2 container py-2 '>
                                <ImStatsDots className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Reports</h2>
                            </span>
                        </a>
                    </li>
                </ul>
                {/* supporting list  */}
                <h1 className=' font-[poppins] font-bold text-white p-3 text-xl tracking-wide'>
                    Supporting
                </h1>
                <ul>
                    <li>
                        <a href="">
                            <span className=' flex gap-2 container py-2'>
                                <FaGear className=' text-white' />
                                <h2 className=' text-white font-[poppins] font-semibold mt-[-4px] tracking-wider'>Settings</h2>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar