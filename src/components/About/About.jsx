import React from 'react'
import BgPolygon from '../../assets/polygon.png'
import Vector from '../../assets/vector-wave.png'
import { FaUser } from 'react-icons/fa'


const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
}

function About({ handlePopup }) {
    return (
        <div>
            <div style={bgStyle} className='py-14'>
                <div>
                    <div className='container min-h-[500px] relative z-10' data-aos="fade" >
                        <h1 className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About us</h1>
                        {/* card section */}
                        <div className='bg-white/80 p-10 my-10'>
                            At Flavora, we're passionate about revolutionizing the way you eat. Founded in Pune, we believe that healthy eating should be convenient, delicious, and tailored to your lifestyle. Our journey began with a simple idea: to provide fresh and nutritious meals that inspire healthier living without compromising on flavor. With a team of expert chefs and nutritionists, we meticulously craft each meal, sourcing only the finest ingredients to ensure exceptional taste and quality. Whether you're a busy professional, a fitness enthusiast, or simply someone who values good food, Flavora is here to support you on your journey to a healthier, happier you. Join us in savoring the flavor of well-being, one meal at a time.
                            <div className='pt-10 flex justify-center'>
                                <button
                                    data-aos="fade" data-aos-delay="300"
                                    onClick={handlePopup}
                                    className="flex justify-center items-center gap-2 bg-blue-300  text-xl h-[40px] px-5 py-2 hover:scale-105 duration-300 rounded-md">
                                    <FaUser />
                                    My Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* wave vector  */}
                <div className='absolute top-0 right-0 w-full'>
                    <img src={Vector} className='mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default About
