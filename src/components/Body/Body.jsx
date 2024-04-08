import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import HyundaiLogo from '../../assets/images/hyundai_electric_200_150.png';
import MakelLogo from '../../assets/images/makel-removebg_200_150.png';
import ScameLogo from '../../assets/images/scame-removebg_200_150.png';


const itemList = [
  {
    id: 1,
    title: 'Hyundai',
    imgSrc: HyundaiLogo
  },
  {
    id: 2,
    title: 'Scame',
    imgSrc: ScameLogo
  },
  {
    id: 3,
    title: 'Makel',
    imgSrc: MakelLogo
  },
]
const Body = () => {

  const items = itemList.map(itemList =>
    <div key={itemList.id} className=' size-52 bg-gray-300 rounded-3xl'>
            <h1 className='text-black font-bold text-left p-2'>
              {itemList.title}
            </h1>
            <img src={itemList.imgSrc} alt="Hyundai logo" className='px-7 h-[6.5rem] text-center '/>
            <h4 className='text-primary font-bold text-sm text-end mr-7 mt-5'>
              IN-STOCK:
            </h4>
            <h4 className='text-red-500 font-bold text-sm text-end mr-7'>
              OUT-STOCK:
            </h4>
          </div>
    );

  return (
    <div className='flex justify-center w-[80%]'>
      <div className='bg-secondary text-center w-screen h-[36rem] rounded-[4rem]'>

        {/* show route */}
        <div className='flex gap-2 pt-20 pl-5'>
          <IoIosArrowBack className='font-bold text-white mt-[5px]' />
          <h1 className='font-[poppins] text-white font-bold tracking-wider text-lg'>Overview</h1>
        </div>

        {/* info topright */}
        <div className=' float-right p-3 absolute right-32 top-20 text-end'>
          <h1 className='font-[poppins] font-bold text-xl'>
            TOTAL:
          </h1>
          <h2 className='font-[poppins] font-bold text-white'>
            <span className='text-primary'>IN-</span>STOCK:
          </h2>
          <h2 className='font-[poppins] font-bold text-white'>
          <span className='text-red-500'>OUT-</span>STOCK:
          </h2>
        </div>

        {/* main part */}
        <div className='flex justify-around items-stretch gap-8 mt-20'>
          {items}
        </div>

      </div>
    </div>

  )
}

export default Body