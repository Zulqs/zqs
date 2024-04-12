"use client";
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`container ${isSticky ? 'sticky -top-1 z-50 translate-y-3 transition-transform duration-700 ease-in-out transform' : '-translate-y-0 transition-transform duration-200 ease-out transform'}`}>
            <div className='flex flex-row justify-between border-y-4 border-blck bg-[#f5f5f5]'>
                <p className='text-2xl py-4'>zqs / landing</p>
                <div className='flex flex-row'>
                    <p className='text-2xl py-4'>Personal Website</p>
                    <div className='mx-4 border-l-4 border-blck'></div>
                    <button className='text-2xl py-4'>light</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar