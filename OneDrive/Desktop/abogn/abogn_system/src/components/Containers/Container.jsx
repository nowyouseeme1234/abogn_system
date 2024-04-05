import React from 'react'

export default function Container() {
  return (
    <div>
    <div className='bg-secondary m-5 ml-10 flex h-box w-11/12 content-center items-center overflow-auto rounded-3xl ' >
      <div className=' bg-gray-400 h-40 w-64 mt-3 ml-8 rounded-3xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... '> 
        <div className='ml-4 mt-4  font-[poppins] text-lg  font-black'>socket</div>
        <div className=' ml-6  mt-2 font-medium flex justify-between '>
            <div className='text-primary '> In-Stock</div>
            <button className='text-white mr-7 bg-primary pl-2 pr-3 text-xl font-black rounded-sm ' > +</button>
        </div>
        <div className='ml-6 font-medium flex justify-between mt-4'>  
            <div className='text-red-500 '> Out-Stock</div><button className='text-black mr-7 pl-3 pr-3 bg-red-500  text-2xl font-black rounded-sm ' > -</button>
            </div>
       
        </div>
       
        <div className=' bg-gray-400 h-40 w-64 mt-3 ml-8 rounded-3xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... '></div>
        <div className=' bg-gray-400 h-40 w-64 mt-3 ml-8 rounded-3xl   transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...'></div>
    </div>
    </div>
  )
}
