import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsGift } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-bgColor h-full w-full ' >
            <div className='' style={{ backgroundColor: "rgb(94, 94, 74 )" }}>
                <p className='text-white text-lg py-3 text-center tracking-widest'>FREE SHIPPING ON ORDERS OVER $50</p>
            </div>

            <nav className='flex justify-around mt-12  items-center box-border py-3'>
                <div className='flex gap-8'>
                    <h3 className='cur'><Link to="/shop">SHOP</Link> </h3>
                    <h3 className='cur'>OUR STORY</h3>
                    <h3 className='cur'>BLOG</h3>
                    <h3 className='cur'>SALE</h3>
                    <h3 className='cur'><Link to="/contact">CONTACT</Link></h3>
                </div>

                <div>
                    <div className='border-2 border-black'>
                        <h2 className='py-1 px-7 text-2xl font-bold tracking-widest cur'><Link to="/">FRAIS</Link></h2>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='flex items-center relative'>
                        <CiSearch className='cursor-pointer absolute left-1' />
                        <input type="text"
                            className='hover:border-2 border-black border-b outline-none py-1 pl-5'
                        />
                        <MdOutlineCancel
                            className='absolute right-1 cursor-pointer'
                        />
                    </div>
                    <div className='flex items-center gap-5 text-2xl'>
                        <IoPersonCircleSharp className='cursor-pointer ' />
                        <p className='cur text-lg text-customGray' ><Link to="/login">Log In</Link></p>
                        <BsGift className='cur ' />
                        <MdOutlineShoppingCart className='cur' />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
