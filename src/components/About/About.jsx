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

function About() {
    return (
        <div>
            <div style={bgStyle} className='py-14'>
                <div>
                    <div className='container min-h-[500px] relative z-10'>
                        <h1 className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About us</h1>
                        {/* card section */}
                        <div className='bg-white/80 p-10 my-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit nesciunt recusandae quis ex commodi nemo ipsum nihil eligendi, numquam dicta voluptatum possimus vitae quam necessitatibus ut perspiciatis delectus sed, molestiae officiis ducimus molestias expedita. Fugit ullam placeat, ipsa eos facere molestias magnam iure tempore earum ratione aliquid cumque delectus quisquam nisi sunt quam doloribus ab aliquam quasi repudiandae est eveniet nostrum nobis. Laudantium beatae voluptatibus a sequi nulla cumque in dolorem iure id sit consequuntur earum illum placeat commodi sed autem eligendi unde, corporis numquam perspiciatis esse. Voluptate aspernatur sunt est omnis temporibus in aliquam eius explicabo officiis sequi!
                            <div className='pt-10 flex justify-center'>
                                <button className="flex justify-center items-center gap-2 bg-blue-300  text-xl h-[40px] px-5 py-2 hover:scale-105 duration-300 rounded-md">
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
