import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='w-full  md:h-[130vh] bg-section5 '>
            <h1 className='text-center text-4xl tracking-widest md:py-16 py-7'>THE FRAIS BLOG</h1>
            <div className='md:w-[70%] mx-auto gap-10 justify-center '>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    keyBoardControl={true}
                    transitionDuration={500}
                >
                    {data.map((d, i) => (
                        <div key={i} className='h-full w-full p-5'>
                            <img
                                src={d.image}
                                alt="img"
                                className='object-cover h-[400px] w-full'
                            />
                            <div className='hover:text-gray-500 duration-300  '>
                                <h1 className='md:text-2xl text-3xl font-semibold mt-4 cur tracking-wide'>{d.title}</h1>
                                <p className='mt-4 cur md:text-sm tracking-wider text-lg leading-7'>{d.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='text-center md:mt-16 mt-5 py-4'>
                <button className='bg-customGray text-white md:text-sm hover:text-black hover:bg-white md:py-2 px-8 duration-500 text-2xl py-3'>Learn More</button>
            </div>
        </div>
    )
}

export default Section5


