import React from 'react'
import Navbar from "../component/navbar/Navbar"
import Footer from "../component/home/Footer"
function ContactPage() {
    return (
        <div className='w-full'>
            <Navbar />

            {/* 1st Div */}
            <div className=' flex mx-auto w-[80%] mt-12 p-5 items-center'>
                {/* Image Div */}
                <div>
                    <img src="\src\assets\images\c837a6_1e5ac650ac814a5d908f21bd78e529ae~mv2.webp"
                        alt=""
                        className='w-[400px] h-[500px] object-cover'
                    />
                </div>

                {/* Info Div */}
                <div className='tracking-widest mx-auto '>
                    <h1 className='text-7xl '>GET IN TOUCH</h1>
                    <div className='flex  gap-10'>
                        <div className=''>
                            <h3 className='text-2xl font-semibold mt-5'>Opening Hours</h3>
                            <div className='flex flex-col gap-1 mt-5'>
                                <p>Mon - Fri: 8am - 8pm</p>
                                <p>Saturday: 9am - 7pm</p>
                                <p>Sunday: 9am - 8pm</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold mt-5'>Address</h3>
                            <div className='flex flex-col gap-1 mt-5'>
                                <p>500 Terry Francine Street</p>
                                <p>San Francisco, CA 94158</p>
                                <p>123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='mt-7 underline text-xl font-semibold'>Vikas@gmail.com</h3>
                </div>
            </div>

            <div className='w-full h-[100vh] flex justify-center items-center mt-20'>
                {/* Form */}
                <div className='w-[50%]  h-full bg-section3 flex flex-col items-start justify-center tracking-widest gap-5'>
                    <div className='w-[80%] mx-auto'>
                        <h1 className='text-5xl '>LET'S STAY <br /> CONNECTED</h1>
                        <p className='text-xl w-[500px]'>If you have questions or special inquiries, you're welcome to contact me or fill out this form</p>

                        <form className=' mx-auto '>
                            <div className='  flex flex-wrap gap-10
                        w-[80%]'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="first_name">First name</label>
                                    <input
                                        type="text"
                                        className='outline-none bg-transparent border border-black py-2 px-5 hover:border-zinc-6s00'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="first_name">Last name</label>
                                    <input
                                        type="text"
                                        className='outline-none bg-transparent border border-black py-2 px-5 hover:border-zinc-6s00'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="first_name">Email</label>
                                    <input
                                        type="text"
                                        className='outline-none bg-transparent border border-black py-2 px-5 hover:border-zinc-6s00'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="first_name">Phone</label>
                                    <input
                                        type="text"
                                        className='outline-none bg-transparent border border-black py-2 px-5 hover:border-zinc-6s00'
                                    />
                                </div>
                            </div>

                            <div className='mt-5'>
                                <p>Leave me a message...</p>
                                <textarea
                                    name=""
                                    id=""
                                    className='bg-transparent border border-black h-[100px] w-[500px] outline-none px-3'
                                >

                                </textarea>
                            </div>

                            <div className='text-center mt-6'>
                                <button className='hover:border hover:border-black py-2 px-16 bg-customGray hover:bg-transparent duration-300'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
                {/* Image */}
                <div className='h-full w-[50%] bg-section5  overflow-x-auto'>
                    <img src="\src\assets\images\CombineBoxesNoBg.png"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactPage
