import React, { useState } from 'react'
import Navbar from '../../navbar/Navbar'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import productsData from '../../../../data.json';
import Footer from '../../home/Footer';
function AllProducts() {

    const [selectedCategory, setSelectedCategory] = useState("All Products")


    const categories = [
        'All Products',
        'CANDLES',
        'MOST POPULAR',
        'SALE',
        'SOAPS'
    ];




    return (
        <div className='w-full '>
            <Navbar />
            <div className='flex gap-1 text-sm  w-[90%] mx-auto mt-16 tracking-wider items-center text-gray-700'>
                <p className='cur'><Link to="/">Home</Link></p>
                <MdArrowForwardIos className='text-xl text-gray-600' />
                <p>All Products</p>
            </div>

            {/* Category and Product Container */}
            <div className='flex w-[90%]  mx-auto mt-12 tracking-wider gap-8'>
                {/* Category Div */}
                <div className=' w-[15%]'>
                    <h2 className='text-2xl border-b border-gray-400 pb-4 '>Browse by</h2>
                    <div className='mt-3 flex flex-col gap-2 font-light'>
                        {categories.map((category, index) => (
                            <h4
                                key={index}
                                className={`hover:text-gray-500 hover:underline cursor-pointer ${selectedCategory === category ? 'underline' : ''
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </h4>
                        ))}
                    </div>
                </div>

                {/* Products Div */}
                <div className=' w-[85%]'>
                    <h1 className='text-5xl font-semibold '>All Products</h1>
                    <p className='mt-5 text-zinc-700 w-[800px]'>This is your category description. It’s a great place to tell customers what this category is about, connect with your audience and draw attention to your products.</p>

                    {/* Sorting Div */}
                    <div className='flex justify-between items-center mt-12'>
                        <h1>18 Products</h1>
                        <div className='flex items-center cur hover:text-zinc-700'>
                            <p>Sort by: Recommended</p>
                            <MdKeyboardArrowDown className='text-2xl' />
                        </div>
                    </div>

                    {/* Product Card */}
                    <div className='mt-8 tracking-widest grid grid-cols-3 gap-6'>
                        {productsData && productsData.products.map((product, index) => (
                            <div
                                key={index}
                                className=' w-[350px] h-[570px] relative mt-8 cur'
                                onClick={() => handleProduct(213123)}
                            >
                                <Link to={`/product/${product.id}`}>
                                    <img
                                        src="\src\assets\images\candle.webp"
                                        alt="img"
                                        className='w-full h-[450px] object-cover'
                                    />

                                    <h3 className='mt-6'>Pearl Powder</h3>
                                    <h3 className='mt-2 text-zinc-600'>$85.00</h3>
                                    <div className='text-center mt-3 border border-black absolute bottom-0 w-full hover:bg-customGray hover:text-white duration-300 hover:border-none'>
                                        <button className='py-1'>Add to Cart</button>
                                    </div>
                                </Link>


                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Footer */}\
            <Footer />
        </div >
    )
}

export default AllProducts
