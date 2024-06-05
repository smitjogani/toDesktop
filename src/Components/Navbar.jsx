import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoLogoElectron } from "react-icons/io5";


const Navbar = () => {

    let Links = [
        { name: 'Pricing', link: '#pricing' },
        { name: 'Docs', link: '#docs' },
        { name: 'Changelog', link: '#changelog' },
        { name: 'Blogs', link: '#blogs' },
        { name: 'Login', link: '#login' },
    ]

    let [open, setOpen] = useState(false);

    return (
        <>
            <nav className="w-full fixed top-0 z-[1000] bg-white shadow-lg left-0">
                <div className="md:flex items-center justify-between py-3 md:px-10 px-2">
                    <div className='font-bold text-md cursor-pointer flex items-center text-gray-800'>
                        <Link to="/" className='flex items-center gap-2'>
                            <img src="/asset0.png" alt="" srcset="" className='object-cover w-9 h-9' />
                            <span className='text-md font-medium'>ToDesktop</span>
                        </Link>
                    </div>
                    <div onClick={() => setOpen(!open)} className='absolute right-3 top-3 cursor-pointer md:hidden '>
                        {!open ? <IoMenu size={28} className='text-gray-600' /> : <IoMdClose size={28} className='text-gray-600' />}
                    </div>
                    <ul className={`md:flex md:items-center gap-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto  md:pl-0 pl-4 transition-all duration-500 ease-in ${open ? 'top-10' : 'top-[-500px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:my-0 my-7 text-sm'> <Link className='font-medium hover:text-[#3238f2] ' to={link.link}>{link.name}</Link></li>
                            ))
                        }
                    </ul>
                    <button className='dev-btn hidden text-[16px] md:flex md:ml-1 px-2 items-center justify-center gap-1 border border-gray-600 rounded-lg p-[4px] hover:border-black'>
                        <IoLogoElectron size={22} />
                        Electron Developers
                        <HiArrowRight />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar