import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa"
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const SearchSection = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleChangeSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
        console.log(value);
    };

    const handleSearch = () => {
        navigate(`/specific-search/${search}`)
    }

    return (
        <>
            <form action="" onSubmit={handleSearch} className='w-[60%] flex items-center relative text-lg h-full gap-5 hover:border-blue-500'>

                <div className='h-full w-[80%] relative border-2 p-5 flex justify-center items-center border-gray-600 rounded-md focus-within:border-blue-500'>

                    <input
                        value={search}
                        type="text"
                        onChange={handleChangeSearch}
                        className='relative h-full w-[90%] text-black text-start placeholder-gray-400 p-4  rounded-md focus:outline-none'
                        placeholder='Enter Your Topic'
                    />
                    <FaSearch className='text-black absolute left-4 top-1/2 transform -translate-y-1/2 ' />
                    <IoClose onClick={() => setSearch('')} className='text-black absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer' />
                </div>

                <button onClick={handleSearch} className='bg-blue-700 text-white px-4 py-1 rounded-md hover:bg-blue-500'>Search</button>
            </form>
        </>
    )
}

export default SearchSection