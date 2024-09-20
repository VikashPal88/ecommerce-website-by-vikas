import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function BannerPage() {

    const data = [
        {
            img: "/src/assets/images/SaiSagar_banner1.png",
            title: "Lavender",
        },
        {
            img: "/src/assets/images/SaiSagar_Banner2.png",
            title: "Lavender",
        },
        {
            img: "/src/assets/images/5.png",
            title: "Lavender",
        },
        {
            img: "/src/assets/images/BG_DryStick.png",
            title: "Lavender",
        },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
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
        <div>
            <section className='w-full mt-2'>
                <div className='w-[90%] mx-auto '>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        transitionDuration={500}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        autoPlay={true} // enables auto-slide
                        autoPlaySpeed={3000} // controls the speed of auto-slide in milliseconds


                    >
                        {data.map((d, i) => (
                            <div key={i} className='w-full h-[80vh] '>
                                <img
                                    src={d.img}
                                    alt="img"
                                    className='w-full'
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

            </section>
        </div>
    )
}

export default BannerPage
