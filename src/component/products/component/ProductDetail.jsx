import React, { useState } from 'react'
import Navbar from '../../navbar/Navbar'
import { useParams, Link } from "react-router-dom"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Footer from "../../home/Footer"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import productsData from "../../../../data.json"

function ProductDetail() {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);
    const [activeIndex, setActiveIndex] = useState(null);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const handleQuantityChange = (type) => {
        if (type === "plus") {
            setQuantity((prevQuantity) => prevQuantity + 1);
        } else if (type === "minus") {
            setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
        }
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) {
            setQuantity(value);
        } else {
            setQuantity(1);
        }
    }

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    console.log("data", productsData)


    return (
        <div className='w-full'>
            <Navbar />

            {/* Product Info Section */}
            <div className='w-[60%] h-full mx-auto mt-12 tracking-wide'>
                {/* Navigation Div */}
                <div className='flex justify-between items-center text-lg'>
                    <div className='flex gap-1'>
                        <p><Link to="/">Home</Link></p>
                        <p>/</p>
                        <p> <Link to="/shop">All Products</Link></p>
                        <p>/</p>
                        <p className='text-zinc-600'>Pearl Powder</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <IoIosArrowBack />
                        <p>Prev</p>
                        <p>|</p>
                        <p>Next</p>
                        <IoIosArrowForward />
                    </div>
                </div>

                {/* Product Detail  Section*/}
                <div className='flex gap-8 w-full mt-12'>
                    <div className='w-[60%] '>
                        <img
                            src="\src\assets\images\candle.webp"
                            alt="img"
                            className='w-full h-[700px] object-cover'
                        />
                        <p className='mt-8 tracking-wider'>I'm a product description. This is a great place to "sell" your product and grab buyers' attention. Describe your product clearly and concisely. Use unique keywords. Write your own description instead of using manufacturers' copy.</p>
                    </div>
                    <div className='tracking-wider  w-[40%]'>
                        <h1 className='text-3xl font-light'>Pearl Powder</h1>
                        <p className='text-sm text-zinc-500 mt-1'>SKU: 001</p>
                        <h3 className='mt-4 text-xl text-zinc-700'>$85.00</h3>

                        {/*  Quantity Section*/}
                        <div className='mt-5'>

                            <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                            <div className="flex items-center border border-gray-600 justify-center  w-24">
                                <button
                                    type="button"
                                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                    onClick={() => handleQuantityChange("minus")}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    id="Quantity"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    className="h-10 w-10 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none outline-none "
                                />

                                <button
                                    type="button"
                                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                    onClick={() => handleQuantityChange("plus")}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Button Section */}
                        <div className='w-full text-center mt-7'>
                            <button className='bg-customGray text-white duration-500 hover:border border-black w-full py-2 hover:bg-white hover:text-black'>Add to Cart</button>
                            <button className='text-black  duration-300 border border-black w-full py-2 mt-4 hover:text-zinc-500'>Buy Now</button>
                        </div>

                        {/*Accordion  */}
                        <div className='mt-8'>
                            {/* Product Info */}
                            <div className='border-b border-black pb-5'>
                                <div className=' flex justify-between items-center  text-lg text-zinc-600'>
                                    <h1 className=' cur' onClick={() => handleAccordionClick(0)}>PRODUCT INFO</h1>
                                    {activeIndex === 0 ? <FaMinus onClick={() => handleAccordionClick(0)} className='cur' /> : <FaPlus onClick={() => handleAccordionClick(0)} className='cur' />}


                                </div>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out  ${activeIndex === 0 ? 'max-h-96' : 'max-h-0'
                                    }`}>
                                    <p className="mt-5 font-light text-sm">I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p>
                                </div>

                            </div>

                            {/*  RETURN & REFUND POLICY*/}
                            <div className='border-b border-black pb-5 mt-5'>
                                <div className=' flex justify-between items-center  text-lg text-zinc-600'>
                                    <h1 className=' cur' onClick={() => handleAccordionClick(1)}>RETURN & REFUND POLICY</h1>
                                    {activeIndex === 1 ? <FaMinus onClick={() => handleAccordionClick(1)} className='cur' /> : <FaPlus onClick={() => handleAccordionClick(1)} className='cur' />}


                                </div>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${activeIndex === 1 ? 'max-h-96' : 'max-h-0'
                                    }`}>
                                    <p className="mt-5 font-light text-sm">I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
                                </div>

                            </div>

                            {/* SHIPPING INFO */}
                            <div className='mt-5'>
                                <div className=' flex justify-between items-center  text-lg text-zinc-600'>
                                    <h1 className=' cur' onClick={() => handleAccordionClick(2)}>SHIPPING INFO</h1>
                                    {activeIndex === 2 ? <FaMinus onClick={() => handleAccordionClick(2)} className='cur' /> : <FaPlus onClick={() => handleAccordionClick(2)} className='cur' />}


                                </div>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${activeIndex === 2 ? 'max-h-96' : 'max-h-0'
                                    }`}>
                                    <p className="mt-5 font-light text-sm">I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div className='mt-8 w-[80%] mx-auto '>

                <h1 className='text-2xl py-14 px-3 '>You Might Also Like</h1>

                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {productsData.products.map((d, i) => (
                        <div key={i} className='px-4'>
                            <div className='relative'>
                                <img src={`/src/assets/images/candle.webp`} alt="img"
                                    className='w-full h-[400px] object-cover' />
                            </div>
                            <div className='flex flex-col gap-2 mt-10'>
                                <h3 className='text-lg font-light'>{d.title}</h3>
                                <p>${d.price}.00</p>
                            </div>

                        </div>
                    ))}
                </Carousel>
            </div >

            <Footer />


        </div >
    )
}

export default ProductDetail
