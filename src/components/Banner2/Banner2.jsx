import React from 'react'
import apple from '../../assets/png/apple.png'
import kiwi from '../../assets/png/kiwi.png'
import lemon from '../../assets/png/lemon.png'
import leaf from '../../assets/png/leaf.png'
import tomato from '../../assets/png/tomato.png'
import PrimaryButton from '../Shared/PrimaryButton'

function Banner2() {
    return (
        <div>
            <div className='container'>
                <div>
                    <h1 className='container py-14 relative'>
                        <div>
                            <div data-aos="fade-right" className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                                <img src={leaf} alt="" className='max-w-[160px]' />
                            </div>
                            <h1 data-aos="fade-up" data-aos-delay="300" className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
                                Flavora: Fueling Health, Flavoring Life
                            </h1>
                            <div data-aos="fade-right" className='absolute top-1/2 -translate-y-1/2 ml-[800px]'>
                                <img src={kiwi} alt="" className='max-w-[180px]' />
                            </div>
                            <div data-aos="fade-right" className='hidden sm:block absolute mr-[1080px] mt-[180px] right-0'>
                                <img src={apple} alt="" className='max-w-[200px]' />
                            </div>
                            <div className='space-y-10'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                                    <p data-aos="fade-up" data-aos-delay="300" >
                                        {" "}
                                        Embrace a healthier lifestyle with <span className=' font-bold'>Flavora's</span> meal delivery service! From busy professionals to fitness enthusiasts, our convenient and nutritious meals empower individuals in Pune to fuel their bodies with quality food, promoting sustained energy and productivity.
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className='absolute ml-[900px]  mt-[-220px] sm:left-0 opacity-50 sm:opacity-100'>
                                <img src={tomato} alt="" className='max-w-[180px]' />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                                <p data-aos="fade-up" data-aos-delay="300" >
                                    {" "}
                                    the <span className=' font-bold'>Flavora</span> community and prioritize your health effortlessly! With our meal plans, you'll not only enjoy delicious flavors but also maintain a balanced diet, supporting your overall well-being and vitality.
                                </p>

                                <div
                                    data-aos="fade-left"
                                    className='absolute ml-[700px] mb-[800px] ml-[960px] '
                                >
                                    <img src={lemon} alt="" className='max-w-[200px]' />
                                </div>
                            </div>
                        </div>
                    </h1>
                    {/* button section */}
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-offset="0" className='flex justify-center mt-10 sm:mt-14'>
                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2
