import React from 'react'
import { FaBus } from 'react-icons/fa'

function WhyChoose() {
    return (
        <div>
            <div className="py-14 md:py-28 bg-gray-50">
                <div className="container">
                    {/* heading  */}
                    <h1 data-aos="fade" className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>
                        Why choose us
                    </h1>
                    {/* card section */}
                    <div data-aos="fade" data-aos-delay="300">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
                            {/* card 1  */}
                            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <p className='text-dark/70 font-semibold'>Fresh Ingredients: Flavora uses only the freshest ingredients, ensuring quality and taste in every dish.

                                </p>
                                <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
                                <FaBus className='text-5xl text-primary'></FaBus>
                            </div>
                            {/* card 2  */}
                            <div className='text-center flex justify-center items-center flex-col gap-1 px-3'>
                                <FaBus className='text-5xl text-teal-600 ml-1' />
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>...</p>
                                <p className='text-dark/70 font-semibold'>Personalized Plans: Enjoy customized meal plans tailored to your dietary preferences and health goals.</p>
                            </div>
                            {/* card 3  */}
                            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <p className='text-dark/70 font-semibold'>Expert Team: Our chefs and nutritionists are dedicated to crafting delicious and nutritious meals for your well-being.
                                </p>
                                <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
                                <FaBus className='text-5xl text-primary'></FaBus>
                            </div>
                            {/* card 4 */}
                            <div className='text-center flex justify-center items-center flex-col gap-1 px-3'>
                                <FaBus className='text-5xl text-teal-600 ml-1' />
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>...</p>
                                <p className='text-dark/70 font-semibold'>Easy Delivery: Conveniently receive your meals at your doorstep in Pune, saving time and hassle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose