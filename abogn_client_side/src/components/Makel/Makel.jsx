import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useState, useEffect } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { useRef } from 'react';
import axios from 'axios';


const Makel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalStyle, setModalStyle] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [inStock, setInStock] = useState('');
  const [outStock, setOutStock] = useState('');
  const modalRef = useRef();
  let total = 0;
  let out = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/get_item');
        if(response.data.Status){
          setInStock(response.data.Value.in_stock)
          setOutStock(response.data.Value.out_stock)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  const openModal = (content, style) => {
    setIsModalOpen(true);
    setModalContent(content);
    setModalStyle(style);
  };

  const closeModal = () => {
    setIsModalOpen(false);

  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    total = inStock + quantity;
    axios.put('http://localhost:3000/auth/add_item', { total }).then(result => {
      if (result.data.Status) {
        closeModal()
      }
      else {
        console.log(result.data.Error)
      }
    }).catch(err => console.error(err))
  }
  const handleDeduct = (e) => {
    e.preventDefault();
    total = inStock - quantity;
    out = outStock + quantity
    axios.put('http://localhost:3000/auth/deduct_item', { out, total }).then(result => {
      if (result.data.Status) {
        closeModal()
      }
      else {
        console.log(result.data.Error)
      }
    }).catch(err => console.error(err))
  }
  return (
    <div onClick={handleOutsideClick}>

      <div className='flex justify-start items-center gap-2'>
        <IoIosArrowBack className='text-lg font-bold' />
        <h1 className='text-3xl font-[poppins] font-extrabold '>Makel</h1>
      </div>

      <div className='bg-secondary flex justify-center items-center rounded-3xl'>
        <div className='h-screen flex justify-start items-center'>
          <div className='w-40 h-28 bg-gray-200 rounded-xl flex'>

            <div>
              <h1 className='text-xl font-extrabold font-[poppins] p-2'>Socket</h1>
              <h3 className='text-green-800 text-end font-bold text-xs font-[poppins] mt-1'>IN-STOCK: <span className='text-black text-end'>{inStock}</span></h3>
              <h3 className='text-red-800 text-end font-bold text-xs font-[poppins]'>OUT-STOCK: <span className='text-black'>{outStock}</span></h3>
            </div>

            <div className='flex flex-col items-end justify-center ml-6 gap-3'>
              <button className=' p-3 bg-green-800 text-white rounded-md' onClick={() => openModal('Add', 'bg-green-800')}><IoMdAdd /></button>
              <button className=' p-3 bg-red-800 text-black rounded-md' onClick={() => openModal('Deduct', 'bg-red-600')}><RiSubtractFill /></button>
            </div>

          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow" ref={modalRef}>
            <button
              className="text-2xl text-red-800 rounded float-right -mt-5 -mr-5"
              onClick={closeModal}
            >
              <IoIosCloseCircle />
            </button>
            <h2 className="text-xl font-bold mb-3">Socket</h2>
            <p>45114 surface phone socket</p>
            <div className='flex justify-center items-center mt-4'>
              <input type='number' className='border-2 rounded-lg w-16' value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)) }} />
              <button className={`${modalStyle} text-sm text-white px-1 py-1 rounded ml-2`} onClick={modalContent==='Add'? handleAdd : handleDeduct}>{modalContent}</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Makel