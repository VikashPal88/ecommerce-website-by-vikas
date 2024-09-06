import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
function Section3() {

    const data = [
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
        {
            img: "/src/assets/images/candle.webp",
            title: "Lavender",
            discount: "85$",
            price: '80$'
        },
    ]

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



    const CustomLeftArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className='custom-arrow custom-left-arrow'
            style={{
                position: 'absolute',
                left: 'opx', // Moves the arrow outside of the carousel
                top: '40%',
                transform: 'translateY(-50%)',
                width: '50px', // Width of the arrow
                height: '50px', // Height of the arrow
                backgroundColor: '#f0f0f0',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '50%', // Makes the arrow round
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '10',
            }}
        >
            <AiOutlineLeft className='text-3xl' />
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className='custom-arrow custom-right-arrow'
            style={{
                position: 'absolute',
                right: '0px', // Moves the arrow outside of the carousel
                top: '40%',
                transform: 'translateY(-50%)',
                width: '50px', // Width of the arrow
                height: '50px', // Height of the arrow
                backgroundColor: '#f0f0f0',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '50%', // Makes the arrow round
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '10',
            }}
        >
            <AiOutlineRight className='text-3xl' />
        </button>
    );




    return (
        <div className='bg-section3 w-full h-[100vh] flex flex-col'>
            <h1 className='text-4xl tracking-widest  text-center m-10 bg-section3'>MOST POPULAR</h1>


            <section className='w-full'>
                <div className='w-[90%] mx-auto '>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        transitionDuration={500}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}


                    >
                        {data.map((d, i) => (
                            <div key={i} className='px-4'>
                                <div className='relative'>
                                    <p className='absolute text-white bg-customGray px-3 tracking-widest py-1 top-2 left-2'>SALE</p>
                                    <img src={d.img} alt="img" />
                                </div>
                                <div className='flex flex-col gap-2 mt-10'>
                                    <h3 className='text-lg font-light'>{d.title}</h3>
                                    <p><span className='line-through font-light'>{d.discount}</span><span className='px-2'>{d.price}</span></p>
                                </div>
                                <button className='mt-2 border border-black w-full py-2 text-gray-600 hover:bg-customGreeen hover:text-white hover:border-none duration-500'>Add to Cart</button>
                            </div>
                        ))}
                    </Carousel>
                </div>

            </section>
        </div>
    )
}

export default Section3
