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
              <h1 className='text-5xl'>Fresh and healthy meal plan <span className='text-blue-600 font-cursive text-7xl'>delivery</span> in Pune!</h1>
              <p className='lg:pr-64'>
                Delicious meals delivered to your door from $123.45 per week.
              </p>
              {/* button section */}
              <div>
                <PrimaryButton />
              </div>
            </div>
            {/* image section */}
            <div className='relative z-30 order-1 sm:order-2'>
              <img src={HeroImg} alt="" className='w-full sm:scale-125 sm:translate-y-16' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
