import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaSearch } from "react-icons/fa"
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Spinner from '../components/Spinner';
import SpecificSearchCard from '../components/SpecificSearchCard';
import axios from "axios";
// import getNextApiKey from '../data/getAPIKey';



const SpecificSearch = () => {

  const prevSearch = useParams().customname;


  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState(`${prevSearch}`);

  const [searchVal, setSearchVal] = useState(`${prevSearch}`);

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    console.log(value);
  };

  const submitHandler = (event) => {
    let value = search;
    setSearchVal(value);
    navigate(`/specific-search/${search}`);
    
  }

  const EVERYTHING_API = import.meta.env.VITE_EVERYTHING_URL;
  const API_KEY = import.meta.env.VITE_API_KEY_1;
  

  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 28);
  let previousDate = currentDate.toISOString().split('T')[0];
  console.log("PREVIOS DATE" , previousDate);


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {

      const BASE_URL = `${EVERYTHING_API}?q=${prevSearch}&from=${previousDate}&sortBy=published&apiKey=${API_KEY}`
      console.log("Fetching data from: ", BASE_URL);

      try {
        const response = await axios.get(BASE_URL);
        setData(response.data.articles);
        console.log("RESPONSE OF DATA IS", data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [searchVal]);



  return (
    <div className='min-h-screen  flex justify-start flex-col'>

      <form action="" onSubmit={submitHandler} className='m-10 mx-auto  w-[50%] flex items-center relative  h-[3.2rem] rounded-md hover:border-blue-500'>

        <div className='h-full w-[80%] relative border-2 p-5 flex justify-center items-center rounded-md rounded-r-none focus-within:border-blue-500 bg-white '>

          <input
            value={search}
            type="text"
            onChange={handleChangeSearch}
            className='relative h-13 pl-2 text-xl w-[90%]  text-black text-start placeholder-gray-400  focus:outline-none'
            placeholder='Enter Your Topic'
          />
          <FaSearch className='text-black absolute  text-xl left-4 top-1/2 transform -translate-y-1/2 ' />
          <IoClose onClick={() => setSearch('')} className='text-black text-2xl absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer' />
        </div>

        <button className='bg-blue-700 text-gray-200  text-xl  px-4 py-2 rounded-md rounded-l-none h-full hover:bg-blue-500 hover:text-gray-50 '>Search</button>
      </form>

      <div className='min-h-screen w-full  flex justify-center items-center'>
        {
          loading ? (
            <Spinner />
          ) :
            (
              <div className='w-full h-full flex flex-col justify-center items-center'>
                {/* <h1 className='text-left ml-28 text-3xl font-bold text-black'>{searchVal}</h1> */}
                <div className='min-h-screen  w-[1100px] flex justify-center items-center flex-col mt-10 gap-3'>
                  {

                    data.map((news, index) => (<SpecificSearchCard news={news} key={index} />))
                  }
                </div>
              </div>
            )
        }
      </div>




    </div >
  )
}

export default SpecificSearch