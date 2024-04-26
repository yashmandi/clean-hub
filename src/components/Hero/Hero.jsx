import React from 'react'
import HeroImg from '../../assets/hero.png'
import PrimaryButton from '../Shared/PrimaryButton'
import HeroBg from '../../assets/heroBg.png'

function Hero() {

  const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  }

  return (
    <div>
      <div style={BgStyle} className='relative z-[-1]'>
        <div className='container py-16 sm:py-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
            {/* text content section */}
            <div className="space-y-7 text-dark order-2 sm:order-1">
              <h1 data-aos="fade-up" className='text-5xl'>Fresh and healthy meal <span className='text-blue-600 font-cursive text-7xl'>delivery</span> in Pune!</h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className='lg:pr-64'>
                Savor gourmet meals delivered at just $41 to your doorstep with <span className='font-semibold'> Flavora.</span>
              </p>
              {/* button section */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className='flex justify-left mt-10 sm:mt-14 inline-block ml-2 group-hover:ml-4 duration-300 mb-8'>

                <PrimaryButton />
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className='relative z-30 order-1 sm:order-2'>
              <img src={HeroImg} alt="" className='w-full sm:scale-125 sm:translate-y-16' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
