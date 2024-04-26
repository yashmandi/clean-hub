import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function PrimaryButton() {
    return (
        <div className='flex items-center group'>
            <button className='bg-blue-600 h-[40px]  text-white px-3 py-2 rounded-md mb-8'>
                Choose your meal plan
            </button>
            <FaArrowRight className='inline-block ml-2 group-hover:ml-4 duration-300 mb-8'/>
        </div>
    )
}

export default PrimaryButton