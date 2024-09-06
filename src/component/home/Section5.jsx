import React from 'react'

function Section5() {

    const data = [
        {
            image: "/src/assets/images/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.webp",
            title: "Re-Using Candles",
            description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
        },
        {
            image: "/src/assets/images/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.webp",
            title: "How to Pick the Right Scent",
            description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your"
        },
        {
            image: "/src/assets/images/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.webp",
            title: "5 Ways to Take Care of Your Candles",
            description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your"
        }
    ]

    return (
        <div className='w-full  h-[130vh] bg-section5 '>
            <h1 className='text-center text-4xl tracking-widest py-16'>THE FRAIS BLOG</h1>
            <div className='w-[70%] mx-auto flex gap-10 justify-center '>
                {data.map((d, i) => (
                    <div key={i} className='h-[550px] w-[300px] p-5 '>
                        <img
                            src={d.image}
                            alt=""
                            className='object-cover'
                        />
                        <div className='hover:text-gray-500 duration-300 '>
                            <h2 className='text-2xl font-semibold mt-4 cur tracking-wide'>{d.title}</h2>
                            <p className='mt-4 cur text-sm tracking-wider'>{d.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-16'>
                <button className='bg-customGray text-white text-sm hover:text-black hover:bg-white py-2 px-8 duration-500 '>Learn More</button>
            </div>
        </div>
    )
}

export default Section5


