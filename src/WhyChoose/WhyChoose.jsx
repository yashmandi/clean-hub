import React from 'react'
import { FaBus } from 'react-icons/fa'

function WhyChoose() {
    return (
        <div>
            <div className="py-14 md:py-28 bg-gray-50">
                <div className="container">
                    {/* heading  */}
                    <h1 className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>
                        Why choose us
                    </h1>
                    {/* card section */}
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
                            {/* card 1  */}
                            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi pariatur nulla reprehenderit distinctio.
                                </p>
                                <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
                                <FaBus className='text-5xl text-primary'></FaBus>
                            </div>
                            {/* card 2  */}
                            <div className='text-center flex justify-center items-center flex-col gap-1 px-3'>
                                <FaBus className='text-5xl text-teal-600 ml-1' />
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>...</p>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                            </div>
                            {/* card 3  */}
                            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi pariatur nulla reprehenderit distinctio.
                                </p>
                                <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
                                <FaBus className='text-5xl text-primary'></FaBus>
                            </div>
                            {/* card 4 */}
                            <div className='text-center flex justify-center items-center flex-col gap-1 px-3'>
                                <FaBus className='text-5xl text-teal-600 ml-1' />
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>...</p>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose