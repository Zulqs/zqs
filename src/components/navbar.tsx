"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {    
        FaLightbulb,
        FaRegLightbulb    
} from 'react-icons/fa';

const Navbar = () => {
    const { resolvedTheme, theme, setTheme } = useTheme();
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
            <div className='flex flex-row justify-between border-y-4 border-blck bg-wht dark:border-wht dark:bg-blck'>
                <p className='text-2xl py-4'>zqs / landing</p>
                <div className='flex flex-row'>
                    <p className='text-2xl py-4'>Personal Website</p>
                    <div className='mx-4 border-l-4 border-blck dark:border-wht'></div>
                    <button 
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    className='text-2xl py-4'>
                        {theme === 'light' ? <FaLightbulb /> : <FaRegLightbulb />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar