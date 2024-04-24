import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const itemList = [
  {
    id: 1,
    title: 'Socket',
  },
  {
    id: 2,
    title: 'Scatola',
  },
  {
    id: 3,
    title: 'Switch',
  },
]
const Makel = () => {
  return (
    <div >
      <div className='flex justify-start items-center gap-2'>
      <IoIosArrowBack className='text-lg font-bold'/>
        <h1 className='text-3xl font-[poppins] font-extrabold '>Makel</h1>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Makel