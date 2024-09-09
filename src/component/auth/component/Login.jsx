import React, { useState } from 'react'
import Navbar from '../../navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../home/Footer'
import { motion } from "framer-motion"

function Login() {

    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='w-full'>
            <Navbar />
            <div className='w-[90%] bg-section5 mx-auto m-10'>
                <img src="\src\assets\images\CombineBoxesNoBg.png" alt="" />
            </div>



            {/*  */}
            <div className="flex justify-center mx-auto overflow-hidden w-[80%]">
                {/* Image Side with Motion */}
                <motion.div
                    animate={{ x: isLogin ? "0%" : "100%" }}  // Move right when signing up
                    initial={false}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-1/2 bg-gray-200 flex items-center justify-center "
                >
                    <img
                        src="\src\assets\images\c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.webp"
                        alt="Side Image"
                        className="w-full h-[600px] object-cover"
                    />
                </motion.div>

                {/* Form Side with Framer Motion */}
                <motion.div
                    className="w-1/2 flex items-center justify-center bg-section5"
                    animate={{ x: isLogin ? "0%" : "-100%" }}  // Move left when signing up
                    initial={false}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {isLogin ? (
                        <div className="text-center space-y-6 w-full">
                            <h2 className="text-3xl font-semibold">Login</h2>
                            <form className="space-y-4 w-[60%] mx-auto">
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col gap-2 items-start'>
                                        <label htmlFor="">Enter Email</label>
                                        <input type="text"
                                            className='bg-transparent outline-none border border-black py-2 px-3 w-full'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 items-start '>
                                        <label htmlFor="">Enter Password</label>
                                        <input type="password"
                                            className='bg-transparent outline-none border border-black py-2 px-3 w-full'
                                        />
                                    </div>
                                </div>


                                <button className=" bg-customGray text-white p-2 rounded hover:bg-section3 hover:text-black border hover:border-black w-full ">
                                    Login
                                </button>


                            </form>
                            <p
                                className="text-sm text-gray-500 cursor-pointer"
                                onClick={toggleForm}
                            >
                                Don't have an account? <span className="text-blue-500">Sign up</span>
                            </p>
                        </div>
                    ) : (
                        <div className="text-center space-y-6 tracking-widest w-full">
                            <h2 className="text-4xl font-semibold">Sign Up</h2>
                            <form className="space-y-4 w-[60%] mx-auto">
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2 items-start'>
                                        <label htmlFor="">Enter Username</label>
                                        <input type="text"
                                            className='bg-transparent outline-none border border-black py-2 px-3 w-full'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 items-start'>
                                        <label htmlFor="">Enter Email</label>
                                        <input type="text"
                                            className='bg-transparent outline-none border border-black py-2 px-3 w-full'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 items-start '>
                                        <label htmlFor="">Enter Password</label>
                                        <input type="password"
                                            className='bg-transparent outline-none border border-black py-2 px-3 w-full'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 items-start '>
                                        <label htmlFor="">Enter Confirm Password</label>
                                        <input type="password"
                                            className='bg-transparent outline-none border border-black py-2 px-3 w-full'
                                        />
                                    </div>
                                </div>
                                <button className="w-full bg-customGray text-white p-2 rounded hover:bg-section3 border hover:border-black hover:text-black duration-300">
                                    Sign Up
                                </button>
                            </form>
                            <p
                                className="text-sm text-gray-500 cursor-pointer"
                                onClick={toggleForm}
                            >
                                Already have an account? <span className="text-blue-500">Login</span>
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}

export default Login


{/* <div className='w-[80%] flex items-center mx-auto  mt-20 tracking-widest  p-10 h-full bg-section5'>
                <div className='p-10 gap-10 w-[50%]  '>
                    <img src="\src\assets\images\84770f_cb0fb3c6238146209f8c82ddcdeef77af000.webp" alt="" />
                </div>
                <div className=' w-[50%]   '>
                    <div className='w-[60%]  mx-auto  '>
                        <h1 className='text-center text-5xl font-semibold '>Login</h1>
                        <form>
                            <div className=' gap-7 flex flex-col  mt-10'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="">Enter Email</label>
                                    <input type="text"
                                        className='bg-transparent outline-none border border-black py-2 px-3'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="">Enter Password</label>
                                    <input type="text"
                                        className='bg-transparent outline-none border border-black py-2 px-3'
                                    />
                                </div>
                                <div className='flex items-center gap-3'>
                                    <input
                                        id="Option1"
                                        class="size-4 rounded border-gray-300 cur"
                                        type="checkbox"
                                    />
                                    <label htmlFor="">Stay Logged In</label>
                                </div>
                            </div>

                            <p className='hover:underline mt-3'><Link className=' '>forget Password ?</Link></p>

                            <div className='text-center mt-7'>
                                <button className='border border-black py-2 px-10  bg-customGreeen hover:bg-section3 text-center hover:border-none text-white hover:text-black duration-300 ' type='submit'>Login</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div> */}