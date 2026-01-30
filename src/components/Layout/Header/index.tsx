"use client"
import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { headerData } from './Navigation/menuData';
import HeaderLinks from './Navigation/headerLinks';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Sidebar from './Sidebar';
import MobileHeaderLink from './Navigation/mobileheaderLinks';


const Header: React.FC = () => {
    const [sticky, setSticky] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false); 


    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const langDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   
    return (
        <>
            <header
                className={`fixed h-24 px-4 top-5 left-[2.5%] py-1 z-50 w-[95%] flex navbar items-center transition-all duration-500 rounded-3xl 
        ${sticky ? "bg-[#004aad] backdrop-blur-lg shadow-lg w-[90%]" : "bg-white/10 backdrop-blur-sm"}
      `}
            >
                <div className="container mx-auto lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1400px] md:max-w-(--breakpoint-md) flex justify-between items-center lg:gap-4 xl:gap-4 2xl:gap-8 py-6">
                    <div className='text-black'>
                        <Logo />
                    </div>
                    <nav className='hidden xl:flex grow items-center justify-center text-black space-x-2 xl:space-x-4 2xl:space-x-6 text-sm xl:text-base'>
                        {headerData.map((item, index) => (
                            <HeaderLinks key={index} item={item} />
                        ))}
                    </nav>

                    <div className='nav-right gap-2 xl:gap-3 2xl:gap-4 hidden xl:flex items-center'>
                        <Link href="/cart" className="relative text-white hover:text-gray-200 transition-colors">
                            <Icon icon="mdi:cart-outline" width="24" height="24" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                        </Link>
                        <Link href="/login" className='text-[#004aad] bg-white h-[45px] xl:h-[50px] rounded-full font-chakrapetch font-semibold flex gap-2 ps-3 xl:ps-4 pe-2 py-2 w-auto justify-center items-center tracking-wider group text-sm xl:text-base'>
                           Login
                            <Icon icon="tabler:arrow-right" width="20" height="20" className='bg-[#004aad] text-white rounded-full h-full w-[30px] xl:w-[35px] p-1 xl:p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>

                        <button
                            onClick={() => setIsOpenSidebar(true)}
                            className="block p-2 cursor-pointer group"
                            aria-label="Toggle mobile menu"
                        >
                            <span className="block w-6 h-0.5 bg-white"></span>

                            <span
                                className="block w-4 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"
                            ></span>

                            <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
                        </button>
                    </div>

                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="xl:hidden block p-2 cursor-pointer group"
                        aria-label="Toggle mobile menu"
                    >
                        <span className="block w-6 h-0.5 bg-white"></span>

                        <span
                            className="block w-4 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"
                        ></span>

                        <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
                    </button>
                </div>

            </header>

            <div
                ref={mobileMenuRef}
                className={`xl:hidden fixed top-0 right-0 h-screen w-full sm:w-[50%] lg:w-[40%] shadow-2xl bg-dark-blur backdrop-blur-lg p-10 z-50 transform transition-transform overflow-y-scroll duration-500 ease-in-out ${navbarOpen ? "-translate-x-0" : "translate-x-[110%]"
                    }`}
            >
                <div className="text-white flex justify-between items-center w-full">
                    <Logo />
                    <button onClick={() => setNavbarOpen(false)} aria-label="Close mobile menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col items-start py-4">
                    {headerData.map((item, index) => (
                        <MobileHeaderLink key={index} item={item} />
                    ))}
                </nav>

                {/* Mobile Header Buttons */}
                <div className="flex items-center gap-4 py-4 border-t border-gray-600">
                    <Link href="/cart" className="relative text-white hover:text-gray-200 transition-colors">
                        <Icon icon="mdi:cart-outline" width="24" height="24" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </Link>
                    <Link href="/login" onClick={() => setNavbarOpen(false)} className='text-[#004aad] bg-white h-[40px] rounded-full font-chakrapetch font-semibold flex gap-2 ps-3 pe-2 py-1 w-auto justify-center items-center tracking-wider group text-sm'>
                       Login
                        <Icon icon="tabler:arrow-right" width="20" height="20" className='bg-[#004aad] text-white rounded-full h-full w-[28px] p-1 group-hover:-rotate-45 transition duration-300' />
                    </Link>
                </div>

                {/* Search */}
                <h3 className="font-chakrapetch pb-3">Search Now!</h3>
                <form className="search-box relative flex">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="bg-white ps-3 h-[45px]"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-0 h-full border-l border-border cursor-pointer"
                    >
                        <Icon icon="ei:search" width="50" height="30" />
                    </button>
                </form>

                {/* Contact Info */}
                <h3 className="font-chakrapetch pb-3 pt-8">Contact Info</h3>
                <div className="space-y-3">
                    <div>
                        <span className="text-pera-light font-chakrapetch">Phone</span> <br />
                        <Link
                            href="/contact"
                            className="text-white font-unbounded font-normal"
                        >
                            +971506787900
                        </Link>
                    </div>
                    <div>
                        <span className="text-pera-light font-chakrapetch">Email</span> <br />
                        <Link
                            href="/contact"
                            className="text-white font-unbounded font-normal"
                        >
                            info@seawindsolution.ae
                        </Link>
                    </div>
                
                </div>

                {/* Socials */}
                <h3 className="font-chakrapetch pb-3 pt-8">Follow Us</h3>
                <div className="social-icons flex gap-3">
                    <Link href="https://www.facebook.com/">
                        <Icon
                            icon="gg:facebook"
                            width="30"
                            height="30"
                            className="text-white p-1 rounded-sm cursor-pointer bg-blue-600 transition duration-500 hover:-translate-y-1"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/">
                        <Icon
                            icon="mdi:instagram"
                            width="30"
                            height="30"
                            className="text-white p-1 rounded-sm cursor-pointer bg-pink-500 hover:text-white transition duration-500 hover:-translate-y-1"
                        />
                    </Link>
                    <Link href="https://www.youtube.com/">
                        <Icon
                            icon="mdi:youtube"
                            width="30"
                            height="30"
                            className="text-white p-1 rounded-sm cursor-pointer bg-red-500 transition duration-500 hover:-translate-y-1"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/">
                        <Icon
                            icon="basil:linkedin-solid"
                            width="30"
                            height="30"
                            className="text-white p-1 rounded-sm cursor-pointer bg-blue-400 transition duration-500 hover:-translate-y-1"
                        />
                    </Link>
                </div>
            </div>

            <Sidebar
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
            />
            

        </>
    );
};

export default Header;