import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

function Popup({ showPopup, setShowPopup }) {
    return (
        <div>
            {
                showPopup && (
                    <div>
                        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'>
                                {/* header  */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1 className='text-2xl font-bold text-dark'>Login</h1>
                                    </div>
                                    <div>
                                        <IoCloseOutline
                                            className='text-2xl cursor-pointer'
                                            onClick={() => setShowPopup(false)}
                                        />
                                    </div>
                                </div>
                                {/* login form sec  */}
                                <div className='mt-4'>
                                    <input
                                        type="email"
                                        placeholder='Enter Email'
                                        className='w-full rounded-md border border-gray-300 p-2 dark:border-gray-500'
                                    />
                                    <input
                                        type="password"
                                        placeholder='Enter Password'
                                        className='w-full mt-4  rounded-md border border-gray-300 p-2 dark:border-gray-500'
                                    />
                                </div>
                                {/* login button  */}
                                <div>
                                    <button
                                        className='w-full mt-4 bg-blue-600 text-white p-2 rounded-md'
                                        onClick={() => setShowPopup(false)}
                                    >
                                        Login
                                    </button>
                                </div>
                                {/* social logins  */}
                                <div className='mt-4'>
                                    <p className='text-center'>or login using</p>
                                    <div className='flex justify-center gap-4 mt-2'>
                                        <FaFacebook className='text-3xl hover:text-blue-500 duration-200 cursor-pointer' />
                                        <FaGoogle className='text-3xl hover:text-pink-600 duration-200 cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Popup
