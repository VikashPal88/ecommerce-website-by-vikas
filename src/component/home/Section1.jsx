import React from 'react'

function Section1() {
    return (
        <div>
            <div className='relative p-12'>
                {/* Image Section */}
                <img
                    src=".\src\assets\images\pexels-vlada-karpovich-6755753-122.webp" alt="img"
                    className='w-[1016px] h-[700px]'
                />

                {/* Text on Top of Image */}
                <div className='absolute top-1/4 right-60'>
                    <h2 className='text-2xl font-medium  tracking-wider '>
                        HANDCRAFTED ORGANIC SOAPS & CANDLES
                    </h2>
                    <h1 className='text-7xl font-light mt-2 leading-tight tracking-wide'>
                        JUST LIKE NATURE <br />
                        INTENDED
                    </h1>
                    <div className='mt-4'>
                        <button className='px-6 py-2 bg-customGreeen text-white hover:bg-customWhite hover:text-black hover:border border-black duration-500'>
                            Shop Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section1
