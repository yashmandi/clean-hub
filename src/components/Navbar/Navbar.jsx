import React from 'react'
import { FaCaretDown, FaUser } from "react-icons/fa"

function Navbar({ handlePopup }) {
    const Navlinks = [
        {
            id: 1,
            name: "Home",
            link: "/#",
        },
        {
            id: 2,
            name: "About",
            link: "/#",
        },
        {
            id: 3,
            name: "Contact",
            link: "/#",
        }
    ];

    const DropdownLinks = [
        {
            id: 1,
            name: "Vegetables",
            link: "/#",
        },
        {
            id: 2,
            name: "Fruits",
            link: "/#",
        },
        {
            id: 3,
            name: "Grains",
            link: "/#",
        },
    ];

    return (
        <div>
            <div data-aos="fade" className="bg-white shadow-md">
                <div className="container flex justify-between py-4 sm:py-4">
                    <div className="font-bold text-4xl mt-">flavora.</div>
                    <div>
                        <ul className="flex items-center gap-10">
                            {Navlinks.map(({ id, name, link }) => (
                                <li key={id}>
                                    <a href={link}
                                        className="hidden sm:inline-block text-gray-900 hover:text-blue-700 duration-300 text-xl">{name}</a>
                                </li>
                            ))}
                            <li className="hidden md:block cursor-pointer group">
                                <a
                                    href="/#"
                                    className="inline-block hover:text-text-blue-700 text-xl font-semibold">
                                    <div className='flex items-center gap-[2px] py-2 hover:text-text-blue-700'>
                                        Dropdown
                                        <span>
                                            <FaCaretDown
                                                className="group-hover:rotate-180 duration-300" />
                                        </span>
                                    </div>
                                </a>
                                <div className='absolute z-[9999] hidden w-[150px] bg-white group-hover:block hover:text-text-blue-700 mt-3 text-black shadow-lg rounded-lg p-2'>
                                    <ul>
                                        {
                                            DropdownLinks.map(({ id, name, link }) => (
                                                <li key={id}>
                                                    <a href={link}
                                                        className='text-xl inline-block w-full rounded-md p-2 hover:text-text-blue-700'
                                                    >{name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                            {/* login button */}
                            <li>
                                <button
                                    onClick={handlePopup}
                                    className="flex justify-center items-center gap-2 bg-blue-300  text-xl h-[40px] px-5 py-2 hover:scale-105 duration-300 rounded-md">
                                    <FaUser />
                                    My Account
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
