import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError('Please fill out all fields');
            return;
        }
        try {
            if (formData.email === 'admin@gmail.com' && formData.password === 'Admin123$') {
                navigate('/admin');
            } else if (formData.email === 'gayathri@gmail.com' && formData.password === '12345678') {
                navigate('/dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
                <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-blue-100' onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit" className='w-[80%] bg-gradient-to-tr from-blue-600 to-blue-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-blue-500/40'>Login</button>
                    {error && <p className="text-red-500">{error}</p>}
                    <p>Don't have an account ? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/register')}> Register ! </span></p>
                </form>
            </div>
        </>
    )
}

export default Login;
