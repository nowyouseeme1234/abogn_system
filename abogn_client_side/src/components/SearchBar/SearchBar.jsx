import React from 'react'
import { FaSearch } from "react-icons/fa";const SearchBar = () => {
    return (
        <div className='fixed top-1 right-0 float-right flex m-3 bg-gray-200 rounded-full'>
            <input type="text" placeholder='Search Global...' className='bg-gray-200 font-[poppins] p-2 text-gray-800 outline-none rounded-full' />
            <FaSearch  className='text-center absolute right-4 top-[0.7rem] text-lg text-primary focus:bg-primary focus:text-white'/>

        </div>
    )
}

export default SearchBar