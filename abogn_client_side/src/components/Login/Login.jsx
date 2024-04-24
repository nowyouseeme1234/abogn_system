import React, { useState } from 'react'
import "../../style.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [error, setError] = useState(null);
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values).then(result => {
            if (result.data.loginStatus)
                {
                navigate('/dashboard')
                console.log(result.data)
    }
            else{
                setError(result.data.Error)
            }
        }).catch(err => console.error(err))
    }



    return (
        <div className='flex justify-center items-center loginPage h-full'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2 className=' text-center font-bold font-[poppins] text-xl'>Login Page</h2>
                <div className='text-red-500 font-[poppins] text-center'>
                    {error && error}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='my-3'>
                        <label htmlFor="email"><strong className='font-[poppins] ml-8'>Email:</strong></label>
                        <input type="email" name="email" autoComplete='off' placeholder="Enter Email..." className='text-black rounded p-1 m-1 font-[poppins]' onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong className='font-[poppins]'>Password:</strong></label>
                        <input type="password" name="password" placeholder="Enter Password..." className='text-black rounded p-1 m-1' onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    </div>
                    <button type='submit' className=' w-full rounded mb-2 bg-green-600 text-center font-bold p-1 hover:shadow-lg hover:shadow-green-700 hover:duration-300 hover:border-lime-500 hover:border'>Log in</button>

                </form>
            </div>
        </div>
    )
}

export default Login