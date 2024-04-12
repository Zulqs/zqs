import React from 'react'

const navbar = () => {
    return (
        <div className='container flex flex-row justify-between border-y-4 border-blck'>
            <p className='text-2xl py-4'>zqs / landing</p>
            <div className='flex flex-row'>
                <p className='text-2xl py-4'>Personal Website</p>
                <div className='mx-4 border-l-4 border-blck'></div>
                <button className='text-2xl py-4'>light</button>
            </div>
        </div>
    )
}

export default navbar