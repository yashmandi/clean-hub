import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <div className='bg-gradient-to-b from-teal-900 to bg-primary rounded-t-3xl text-white mt-20'>
            <div className='container'>
                {/* Heading section */}
                <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact us</h1>
                {/* Grid section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 pb-6 border-white'>
                    {/* Location */}
                    <div className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <IoLocationSharp className='text-5xl' />
                        </div>
                        <p>123 Street, New York, USA 12345</p>
                    </div>
                    {/* Email */}
                    <div className='text-center space-y-4'>
                        <MdEmail className='text-5xl ml-36'></MdEmail>
                        <div className='flex justify-center'>
                            <div>
                                <p>info@flavora.com</p>
                                <p>hr@flavora.com</p>
                            </div>
                        </div>
                    </div>
                    {/* Phone number */}
                    <div className='text-center space-y-4'>
                        <FaPhone className='text-5xl ml-36'></FaPhone>
                        <div className='flex justify-center'>
                            <div>
                                <p>987654321 - Sales and Support</p>
                                <p>123456789 - Customer Support</p>
                                <p>123456789 - Technical Support</p>
                            </div>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className=''>
                        <p>Copyright © 2022 Flavora.</p>
                        <div>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms and Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
