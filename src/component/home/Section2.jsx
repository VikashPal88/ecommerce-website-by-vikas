import React from 'react'

function Section2() {
    return (
        <div className='w-full'>
            <h1 className='md:text-4xl text-3xl font-bold md:font-normal tracking-widest  text-center m-10'>SHOP OUR FAVORITES</h1>
            <div className='w-[100%] '>
                <div className='md:flex md:flex-row mx-auto flex flex-col-reverse  md:w-[70%] p-8 '>
                    <div className='md:w-1/2 w-full flex flex-col md:items-start gap-10  items-center mt-16 md:mt-0 '>
                        <h1 className='text-3xl tracking-widest leading-tight text-center '>
                            NATURE’S ESSENCE <br />
                            SCENTED CANDLES
                        </h1>

                        <p className='leading-7 tracking-widest '>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>

                        <button className='bg-white px-6 py-2 border border-black hover:bg-customGray hover:text-white hover:border-none duration-500'>Shop Candles</button>
                    </div>
                    <div className='md:1/2 '>
                        <img src="src\assets\images\84770f_cb0fb3c6238146209f8c82ddcdeef77af000.webp"
                            alt="img"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>

            <div className='md:w-[70%] md:mx-auto md:mt-10 md:p-16 p-7 md:flex mt-16 w-[100%]'>
                <div className='relative'>
                    <div className='h-[500px] w-[350px] bg-customGray ' />
                    <img
                        src="\src\assets\images\pexels-meruyert-gonullu-7500302.webp" alt="img"
                        className='h-[500px] w-[350px] object-cover absolute md:bottom-9 md:left-7 bottom-9 left-7'
                    />
                </div>

                <div className='md:w-1/2 flex flex-col items-start gap-10 justify-center md:px-16 mt-16  w-full h-full '>
                    <h1 className='md:text-3xl text-2xl tracking-widest leading-tight text-center md:text-start  w-full'>

                        PROBIOTIC <br />
                        CLEANSING BARS
                    </h1>

                    <p className='leading-7 tracking-widest w-full'>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you
                    </p>

                    <div className='flex justify-center w-full '>
                        <button className='bg-white px-6 py-2 border border-black hover:bg-customGray hover:text-white hover:border-none duration-500 '>Shop Soap</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Section2
