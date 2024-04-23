import React from 'react'
import Apple from '../../assets/png/apple.png'
import kiwi from '../../assets/png/apple.png'
import lemon from '../../assets/png/apple.png'
import leaf from '../../assets/png/apple.png'
import tomato from '../../assets/png/apple.png'
import PrimaryButton from '../Shared/PrimaryButton'


function Banner() {
    return (
        <div>
            <div className='container'>
                <div>
                    <h1 className='container py-14 relative'>
                        <div>
                            <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
                                Taste the healthy difference
                            </h1>
                            <div className='space-y-10'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                                    <p>
                                        {" "}
                                        We know that time is the greatest value in the modern world. Our healthy meal plan delivery service, <span className=' font-bold'>flavora</span> in Pune is the answer for those who want to eat healthy meals.
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                                <p>
                                    {" "}
                                    We know that time is the greatest value in the modern world. Our healthy meal plan delivery service, <span className=' font-bold'>flavora</span> in Pune is the answer for those who want to eat healthy meals.
                                </p>
                            </div>
                        </div>
                    </h1>
                    {/* button section */}
                    <div className='flex justify-center mt-10 sm:mt-14'>
                        <PrimaryButton />
                    </div>
                </div>

                {/* bg Fruits pngs */}
                <div className='absolute top-5 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                    <img src="" className='max-w-[160px]' />
                </div>
            </div>
        </div>
    )
}

export default Banner
