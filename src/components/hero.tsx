import React from 'react';
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

const hero = () => {
    const iconStyle = {fontSize: "1.56em"}
    return (
        <div className='container'>
            <div className='mx-auto my-24 flex flex-col text-5xl w-[29.125rem]'>
                <p className='text-left py-1.5'><a className='font-bold'>Curiosity</a> Fueled</p>
                <p className='text-right py-1.5'>Future <a  className='font-bold'>Focused</a></p>
            </div>
            <div className='flex flex-col text-xl'>
                <p>&lt;aboutMe&gt;</p>
                <p className='ml-[4.125rem] mr-6 my-4'>
                    Enthusiastic learner with a passion for exploring new advancements in various fields, including IoT, 
                    software development, networking, electronics, AI, UI/UX design, and 3D design/modeling. My inquisitive 
                    nature drives me to continuously seek out and grasp new knowledge, allowing me to adapt quickly and excel in a dynamic environment.
                </p>
                <p>&lt;/aboutMe&gt;</p>
            </div>

            <div className='flex flex-col justify-between mt-[3.437rem]'>
                <div className='flex justify-end mb-3'>
                    <p className='text-xl'>
                        &lt;contact/&gt;
                    </p>
                </div>
                <div className='flex justify-between'>
                    <a href="#" className='group relative inline-block'>
                        <span className='absolute inset-0 border-2 border-dashed rounded-2xl border-blck dark:border-wht'></span>
                        <span className='block h-full py-2 px-8 font-extrabold text-2xl text-wht dark:text-blck bg-blck dark:bg-wht rounded-2xl tracking-widest transition-transform duration-300 ease-out group-hover:ease-in group-hover:-translate-x-1 group-hover:-translate-y-1'>
                            Let&apos;s Talk
                        </span>
                    </a>
                    <div className='flex flex-row w-52 justify-between text-blck dark:text-wht'>
                        <a href="#" className='group relative inline-block'>
                            <span className="absolute inset-0 border-2 border-dashed rounded-2xl border-blck dark:border-wht"></span>
                            <span className='block border-2 p-2.5 border-blck dark:border-wht rounded-2xl bg-wht dark:bg-blck transition-transform duration-300 ease-in-out group-hover:ease-in group-hover:-translate-x-1 group-hover:-translate-y-1'>
                                <FaLinkedin style={iconStyle}/>
                            </span>
                        </a>
                        <a href="#" className='group relative inline-block'>
                            <span className="absolute inset-0 border-2 border-dashed rounded-2xl border-blck dark:border-wht"></span>
                            <span className='block border-2 p-2.5 border-blck dark:border-wht rounded-2xl bg-wht dark:bg-blck transition-transform duration-300 ease-in-out group-hover:ease-in group-hover:-translate-x-1 group-hover:-translate-y-1'>
                                <FaGithub style={iconStyle}/>
                            </span>
                        </a>
                        <a href="#" className='group relative inline-block'>
                            <span className="absolute inset-0 border-2 border-dashed rounded-2xl border-blck dark:border-wht"></span>
                            <span className='block border-2 p-2.5 border-blck dark:border-wht rounded-2xl bg-wht dark:bg-blck transition-transform duration-300 ease-in-out group-hover:ease-in group-hover:-translate-x-1 group-hover:-translate-y-1'>
                                <FaInstagram style={iconStyle}/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero