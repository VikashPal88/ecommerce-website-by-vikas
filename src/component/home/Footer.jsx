import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

function Footer() {
    return (
        <div className='w-full flex flex-col items-center md:flex-none'>
            <div className=' md:w-[80%] mx-auto md:flex md:flex-row md:justify-center md:items-start md:mt-20 mt-8 md:gap-20 flex flex-col items-center '>
                {/* SECTION 1 */}
                <div className=' md:w-[40%] text-center flex justify-start items-start md:flex-none p-5 '>
                    <h1 className='text-2xl border-2 border-black py-2 px-8  font-semibold tracking-widest '>FRAIS</h1>
                </div>


                {/* 2 SECTION */}
                <div className='  md:w-[30%] p-5 '>
                    {/* SHOP SECTION */}
                    <div className='tracking-wider flex flex-col items-center md:flex-none'>
                        <h1 className='md:text-3xl text-2xl tracking-wider'>SHOP</h1>
                        <div className='flex flex-col items-center gap-1 mt-3 font-light md:text-sm text-lg cur md:items-start'>
                            <p>CANDLES</p>
                            <p>SOAPS</p>
                            <p>SALE</p>
                            <p>GIFT CARD</p>
                        </div>
                    </div>

                    {/* HELP SECTION */}
                    <div className='tracking-wider mt-10 flex flex-col items-center md:flex-none w-full  '>
                        <h1 className='md:text-3xl text-2xl tracking-wider'>HELP</h1>
                        <div className='flex flex-col gap-1 mt-3 font-light md:text-sm text-lg cur  items-center md:items-start '>
                            <p>TERMS & CONDITIONS</p>
                            <p>PRIVACY POLICY </p>
                            <p>SHIPPING & RETURNS</p>
                        </div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className='  md:w-[30%] p-5 '>
                    {/* FRAIS SECTION */}
                    <div className='tracking-wider flex flex-col items-center md:flex-none  '>
                        <h1 className='md:text-3xl text-2xl  tracking-wider'>FRAIS</h1>
                        <div className='flex flex-col gap-1 mt-3 font-light md:text-sm text-lg cur  items-center md:items-start'>
                            <p>OUR STORY</p>
                            <p>CONTACT US</p>
                            <p>FAQ</p>
                        </div>
                    </div>

                    {/* CONTACT SECTION */}
                    <div className='tracking-wider mt-14 flex flex-col items-center md:flex-none'>
                        <h1 className='md:text-3xl text-2xl  tracking-wider'>CONTACT US</h1>
                        <div className='flex flex-col gap-1 mt-3 font-light md:text-sm text-lg cur  items-center md:items-start'>
                            <p>123-456-7890</p>
                            <p>INFO@MYSITE.COM</p>
                        </div>
                        <div className=' w-full flex md:justify-start justify-center mt-12 text-2xl gap-3'>
                            <RiFacebookFill className='cur' />
                            <SiInstagram className='cur' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-customGray text-white text-center mt-4 py-2 tracking-wider font-light flex flex-wrap '>
                <p>© 2024 by Vikas. Powered and secured by Vikash Pal</p>
            </div>
        </div>

    )
}

export default Footer
