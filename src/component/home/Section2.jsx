import React from 'react'

function Section2() {
    return (
        <div className='w-full'>
            <h1 className='text-4xl tracking-widest  text-center m-10'>SHOP OUR FAVORITES</h1>
            <div className='w-[100%] '>
                <div className='flex mx-auto  w-[70%] p-8'>
                    <div className='w-1/2 flex flex-col items-start gap-10'>
                        <h1 className='text-3xl tracking-widest leading-tight'>
                            NATURE’S ESSENCE <br />
                            SCENTED CANDLES
                        </h1>

                        <p className='leading-7 tracking-wider w-2/3'>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>

                        <button className='bg-white px-4 py-2 border border-black hover:bg-customGray hover:text-white hover:border-none duration-500'>Shop Candles</button>
                    </div>
                    <div className='w-1/2 '>
                        <img src="src\assets\images\84770f_cb0fb3c6238146209f8c82ddcdeef77af000.webp"
                            alt="img"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>


            </div>

            <div className='w-[70%] mx-auto mt-10 p-16 flex '>
                <div className='w-1/2 bg-customGray relative '>
                    <div className='h-[600px] w-[500px]' />
                    <img
                        src="\src\assets\images\pexels-meruyert-gonullu-7500302.webp" alt="img"
                        className='h-[600px] w-[500px] object-cover absolute bottom-9 left-7'
                    />
                </div>

                <div className='w-1/2 flex flex-col items-start gap-10 justify-center px-16'>
                    <h1 className='text-3xl tracking-widest leading-tight'>

                        PROBIOTIC <br />
                        CLEANSING BARS
                    </h1>

                    <p className='leading-7 tracking-wider '>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you
                    </p>

                    <button className='bg-white px-4 py-2 border border-black hover:bg-customGray hover:text-white hover:border-none duration-500'>Shop Soap</button>
                </div>
            </div>
        </div>

    )
}

export default Section2
