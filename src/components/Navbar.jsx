import React from 'react'
import news from "/assets/news.png"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className='w-full h-16 bg-blue-950 flex justify-center items-center'>

            <div className='h-full w-[1080px] bg-blue-950 flex  items-center gap-56 ml-40'>
                <Link to="/" >
                    <img src={news} alt="Studynotion logo" width={60} height={60} loading='lazy' />
                </Link>

                <ul className='text-blue-300 flex justify-center items-center font-semibold gap-20 ml-30'>
                    <Link to={"/"}>
                        <li className='hover:text-blue-100'>Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className='hover:text-blue-100'>About us</li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className='hover:text-blue-100'>Contact us</li>
                    </Link>

                </ul>

                {/* <div className='text-blue-300 flex justify-center items-center font-semibold gap-4'>

                <button className='bg-gray-700 rounded-md p-2 hover:transition-all duration-200  hover:scale-95 hover:bg-blue-300 hover:text-black'>
                Log In
                </button>
                <button className='bg-gray-700 rounded-md p-2 hover:transition-all duration-200  hover:scale-95 hover:bg-blue-300 hover:text-black'>
                Sign Up
                </button>
                </div> */}
            </div>
        </div>

    )
}

export default Navbar