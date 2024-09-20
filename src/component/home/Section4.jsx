import React from 'react'

function Section4() {
    return (
        <div className='w-full  mt-20 '>
            <div className='text-center'>
                <h1 className='text-center md:text-4xl tracking-widest text-3xl '>NATURALLY SIMPLE</h1>
                <p className='text-center md:w-[40%] px-5 md:px-0 mx-auto mt-8 tracking-wider leading-6  font-normal'>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <button className='border border-black mx-auto text-center px-6 py-2 mt-8 hover:bg-customGray hover:text-white hover:border-none duration-500'>Our Story</button>
            </div>

            <div className='mx-auto md:w-[60%] w-[90%] md:mt-20 relative mt-20 '>

                <img src="\src\assets\images\ruslan-bardash-K8iJtsWwAoE-unsplash1_edited.webp"
                    alt=""
                    className=' w-full h-full object-cover bg-red-800'
                />
                <img src="\src\assets\images\pexels-vlada-karpovich-6755866.webp"
                    alt="img"
                    className='absolute md:top-[90%]  left-[50%] transform -translate-x-[50%] -translate-y-[50%] md:w-[500px] md:h-[500px] w-[300px] h-[300px]'
                />

            </div>
            <div className='md:w-full md:h-[50vh]  h-[25vh]' />
        </div>
    )
}

export default Section4
