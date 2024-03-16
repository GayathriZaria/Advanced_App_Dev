import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault()
        navigate('/dashboard')
    }
    return (
        <>
            <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
                <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-blue-100' onSubmit={handleLogin}>
                    <input type="email" name="" id="" placeholder='Email' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="password" name="" id="" placeholder='Password' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <button type="submit" className='w-[80%] bg-gradient-to-tr from-blue-600 to-blue-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-blue-500/40'>Login</button>
                    <p>Don't have an account ? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/register')}> Register ! </span></p>
                </form>
            </div>
        </>
    )
}

export default Login