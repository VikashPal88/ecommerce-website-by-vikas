import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsGift } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { HiX } from "react-icons/hi";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("hello")
    };

    return (
      <div className="bg-bgColor ">
        <div className="" style={{ backgroundColor: "rgb(94, 94, 74 )" }}>
          <p className="text-white text-xs py-1 text-center tracking-widest">
            FREE SHIPPING ON ORDERS OVER $50
          </p>
        </div>

        {/* PC Navabr */}
        <div className="md:block hidden">
          <nav className=" flex justify-around mt-1  items-center box-border py-3 ">
            <div className="md:flex gap-8">
              <h3 className="cur">
                <Link to="/shop">SHOP</Link>{" "}
              </h3>
              <h3 className="cur">OUR STORY</h3>
              <h3 className="cur">BLOG</h3>
              <h3 className="cur">SALE</h3>
              <h3 className="cur">
                <Link to="/contact">CONTACT</Link>
              </h3>
            </div>

            <div className="flex  items-center text-2xl font-bold gap-5">
                <Link to="/">
                  <img
                    src="src\assets\images\NegativeSaiSagarLogo.png"
                    alt="img"
                    className="w-14 "
                  />
                </Link>
                <h1 className='text-zinc-700'>SAI SAGAR</h1>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center relative">
                <CiSearch className="cursor-pointer absolute left-1" />
                <input
                  type="text"
                  className="hover:border-2 border-black border-b outline-none py-1 pl-5"
                />
                <MdOutlineCancel className="absolute right-1 cursor-pointer" />
              </div>
              <div className="flex items-center gap-5 text-2xl">
                <IoPersonCircleSharp className="cursor-pointer " />
                <p className="cur text-lg text-customGray">
                  <Link to="/login">Log In</Link>
                </p>
                <BsGift className="cur " />
                <MdOutlineShoppingCart className="cur" />
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile navbar */}
        <div className="relative ">
          <div className=" bg-bgColor py-4 md:hidden w-[90%] mx-auto ">
            <div className="flex justify-between items-center border-green-300">
              <div className="flex items-center gap-3">
                <Link to="/">
                  <img
                    src="src\assets\images\NegativeSaiSagarLogo.png"
                    alt="img"
                    className="w-14 "
                  />
                </Link>
                <h1 className='font-bold text-xl text-zinc-700'>
                    SAI SAGAR
                  </h1>
              </div>
              <div className="flex text-2xl gap-4">
                <BsGift className="cur" />
                <MdOutlineShoppingCart className="cur" />
                {isMenuOpen ? (
                  <HiX className="cur text-4xl" onClick={toggleMenu} />
                ) : (
                  <IoMenu className="cur text-4xl" onClick={toggleMenu} />
                )}
              </div>
            </div>
          </div>

          {/* Side Menu (overlay) */}
          <div
            className={`fixed top-0 left-0 h-full bg-section3 w-screen z-50 transform ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="">
              {/* Log In section */}
              <div className="flex justify-end relative ">
                <HiX
                  className="text-4xl absolute top-16 right-8 "
                  onClick={toggleMenu}
                />
              </div>
              ()
              <div className="flex pl-20 text-2xl  flex-col justify-center relative  mt-16 gap-8">
                <div className="flex items-center">
                  <IoPersonCircleSharp className="text-4xl gap-5" />
                  <p className="cur ml-2">
                    <Link to="/login">Log In</Link>
                  </p>
                </div>
                <div className="flex justify-center items-center text-black w-[80%] mt-5">
                  <CiSearch className="absolute left-20 text-2xl" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none pl-8  bg-transparent hover:border-2 text-xl border-b-2 border-black py-3"
                  />
                </div>

                <h3 className="cur ">
                  <Link to="/shop">SHOP</Link>
                </h3>
                <h3 className="cur ">OUR STORY</h3>
                <h3 className="cur ">BLOG</h3>
                <h3 className="cur">SALE</h3>
                <h3 className="cur ">
                  <Link to="/contact">CONTACT</Link>
                </h3>
              </div>
            </div>
          </div>

          {/* Overlay background */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={toggleMenu}
            ></div>
          )}
        </div>
      </div>
    );
}

export default Navbar
