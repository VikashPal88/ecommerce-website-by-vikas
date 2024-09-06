import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

function Footer() {
    return (
        <div className='w-full h-[60vh] '>
            <div className=' w-[80%] mx-auto flex justify-center mt-20 gap-20'>
                {/* SECTION 1 */}
                <div className=' w-[40%] text-center flex justify-start items-start p-5 '>
                    <h1 className='text-2xl border-2 border-black py-2 px-8  font-semibold tracking-widest '>FRAIS</h1>
                </div>


                {/* 2 SECTION */}
                <div className='  w-[30%] p-5 '>
                    {/* SHOP SECTION */}
                    <div className='tracking-wider'>
                        <h1 className='text-3xl tracking-wider'>SHOP</h1>
                        <div className='flex flex-col gap-1 mt-3 font-light text-sm cur'>
                            <p>CANDLES</p>
                            <p>SOAPS</p>
                            <p>SALE</p>
                            <p>GIFT CARD</p>
                        </div>
                    </div>
                    {/* HELP SECTION */}
                    <div className='tracking-wider mt-10 '>
                        <h1 className='text-3xl  tracking-wider'>HELP</h1>
                        <div className='flex flex-col gap-1 mt-3 font-light text-sm cur'>
                            <p>TERMS & CONDITIONS</p>
                            <p>PRIVACY POLICY </p>
                            <p>SHIPPING & RETURNS</p>
                        </div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className='  w-[30%] p-5 '>
                    {/* FRAIS SECTION */}
                    <div className='tracking-wider '>
                        <h1 className='text-3xl  tracking-wider'>FRAIS</h1>
                        <div className='flex flex-col gap-1 mt-3 font-light text-sm cur'>
                            <p>OUR STORY</p>
                            <p>CONTACT US</p>
                            <p>FAQ</p>
                        </div>
                    </div>

                    {/* CONTACT SECTION */}
                    <div className='tracking-wider mt-14'>
                        <h1 className='text-3xl  tracking-wider'>CONTACT US</h1>
                        <div className='flex flex-col gap-1 mt-3 font-light text-sm cur'>
                            <p>123-456-7890</p>
                            <p>INFO@MYSITE.COM</p>
                        </div>
                        <div className=' w-full flex justify-start mt-12 text-2xl gap-3'>
                            <RiFacebookFill className='cur' />
                            <SiInstagram className='cur' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-customGray text-white text-center mt-4 py-2 tracking-wider font-light'>
                <p>© 2024 by Vikas. Powered and secured by Vikash Pal</p>
            </div>
        </div>

    )
}

export default Footer
