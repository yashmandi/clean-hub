import React from 'react'
import apple from '../../assets/png/apple.png'
import kiwi from '../../assets/png/kiwi.png'
import lemon from '../../assets/png/lemon.png'
import leaf from '../../assets/png/leaf.png'
import tomato from '../../assets/png/tomato.png'
import PrimaryButton from '../Shared/PrimaryButton'

function Banner() {
    return (
        <div>
            <div className='container'>
                <div>
                    <h1 className='container py-14 relative'>
                        <div>
                            <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                                <img src={leaf} alt="" className='max-w-[160px]' />
                            </div>
                            <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
                                Taste the healthy difference
                            </h1>
                            <div className='absolute top-1/2 -translate-y-1/2 ml-[800px]'>
                                <img src={kiwi} alt="" className='max-w-[180px]' />
                            </div>
                            <div className='hidden sm:block absolute mr-[1080px] mt-[180px] right-0'>
                                <img src={apple} alt="" className='max-w-[200px]' />
                            </div>
                            <div className='space-y-10'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                                    <p>
                                        {" "}
                                        We know that time is the greatest value in the modern world. Our healthy meal plan delivery service, <span className=' font-bold'>flavora</span> in Pune is the answer for those who want to eat healthy meals.
                                    </p>
                                </div>
                            </div>
                            <div className='absolute ml-[800px]  mt-[80px] sm:left-0 opacity-50 sm:opacity-100'>
                                <img src={tomato} alt="" className='max-w-[180px]' />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                                <p>
                                    {" "}
                                    Experience Pune's culinary delight at your doorstep with Flavora! Order now for a taste sensation like no other.
                                </p>

                                <div
                                    data-aos="fade-left"
                                    className='absolute ml-[900px] mb-[800px] ml-[960px] '
                                >
                                    <img src={lemon} alt="" className='max-w-[200px]' />
                                </div>
                            </div>
                        </div>
                    </h1>
                    {/* button section */}
                    <div className='flex justify-center mt-10 sm:mt-14'>
                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
