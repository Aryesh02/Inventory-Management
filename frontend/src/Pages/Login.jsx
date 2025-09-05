import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import img1 from '../images/Logo-jiit.png'
import img2 from '../images/login page.webp'

function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null)

    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        if(!email) {
            alert("Please Enter E-Mail ID.")
            return
        }

        if(!password) {
            alert("Please Enter Password.")
            return
        }

        try {
            const response = await axios.post(`${apiUrl}/login`, {
                email,
                password
            })
            // console.log(response.data);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('name', response.data.user.name)
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
            alert("Please Try After Some Time.")
        }
    }

    return (
        <div className='mt-20'>
            <div className='flex flex-col lg:flex-row w-[95%] border border-black border-2xl bg-white mx-auto rounded'>
                {/* Left Side  */}
                <div className='flex flex-col w-1/2 justify-evenly lg:ml-12 mt-2 gap-y-2 ml-6'>
                    <img src={img1} alt="" className='w-[40px] h-[50px]'/>
                    <div>
                        <h1 className='font-bold lg:text-4xl text-2xl noto-sans-tcss'>Hello,</h1>
                        <h1 className='font-bold lg:text-4xl text-2xl noto-sans-tcss'> Welcome Back</h1>
                        <p className='font-semibold text-gray-400'>Where Innovation Meets Inventory</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <input type="email" ref={emailRef} placeholder='Enter E-Mail ID' className='border border-black border-2xl rounded bg-transparent w-[300px] lg:w-[50%] h-[40px] pl-2 py-1'/>
                        <br />
                        <br />
                        <input type="password" ref={passwordRef} placeholder='Enter Password' className='border border-black border-2xl rounded bg-transparent w-[300px] lg:w-[50%] h-[40px] pl-2 py-1' />
                        <br />
                        <br />
                        <button type='submit' onClick={handleSubmit} className='bg-purple-600 px-4 py-2 rounded-xl text-white text-lg cursor-pointer text-center'>Sign In</button>
                    </form>
                </div>

                {/* Right Side */}
                <div className='w-1/2 mx-auto p-2'>
                    <img src= {img2} alt="" className='rounded'/>
                </div>
            </div>
        </div>
    )
}

export default Login