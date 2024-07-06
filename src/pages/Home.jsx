import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css';
import axios from "axios";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Cards from '../components/Cards';
import AllCategory from '../data/AllCategory';
import SearchSection from '../components/SearchSection';
import countries from '../data/country';
import getNextApiKey from '../data/getAPIKey';


const Home = () => {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("in");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const TOP_HEADLINE_URL = import.meta.env.VITE_TOP_HEADLINE_URL;
    const API_KEY = getNextApiKey();

    useEffect(() => {
        const fetchData = async () => {
            const BASE_URL = `${TOP_HEADLINE_URL}?country=${selectedCountry}&apiKey=${API_KEY}`;
            console.log("Fetching data from: ", BASE_URL);

            try {
                const response = await axios.get(BASE_URL);
                setData(response.data.articles);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [selectedCountry]);

    useEffect(() => {
        const fetchData = async () => {
            let allArticles = [];
            let count = 0;

            if (selectedCategory === "All") {
                for (const category in AllCategory) {
                    const BASE_URL = `${TOP_HEADLINE_URL}?country=${selectedCountry}&category=${AllCategory[category]}&apiKey=${API_KEY}`;
                    console.log("Fetching data from: ", BASE_URL);
                    console.log("CATEGORY ....", selectedCategory);
                    console.log("COUNTRY ....", selectedCountry);

                    try {
                        const response = await axios.get(BASE_URL);
                        console.log("RESPONSE ", category + "   ", response.data.totalResults);
                        count += response.data.totalResults;
                        allArticles = [...allArticles, ...response.data.articles];

                    } catch (error) {
                        console.error("Error fetching data: ", error);
                    }
                }
            } else {
                const BASE_URL = `${TOP_HEADLINE_URL}?country=${selectedCountry}&category=${selectedCategory}&apiKey=${API_KEY}`;
                console.log("Fetching data from: ", BASE_URL);
                console.log("CATEGORY ....", selectedCategory);
                console.log("COUNTRY ....", selectedCountry);

                try {
                    const response = await axios.get(BASE_URL);
                    console.log("RESPONSE ", selectedCategory + "   ", response.data.totalResults);
                    count += response.data.totalResults;
                    allArticles = [...allArticles, ...response.data.articles];
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            }

            setAllData(allArticles);
            console.log("All articles:", allArticles);
            console.log("All articles:", count);
        };

        fetchData();
    }, [selectedCategory, selectedCountry]);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const truncateWords = 13;

    const truncateContent = (content, wordLimit) => {
        const words = content.split(" ");
        return words.length > wordLimit ? `${words.slice(0, wordLimit).join(" ")} ...` : content;
    };

    return (
        <div className='min-h-screen w-full bg-gray-100'>
            <div className='min-h-[50vh] w-full flex justify-center items-center flex-col bg-blue-700 py-8'>
                <h1 className='text-center font-semibold text-white text-4xl mb-4'>Top Headlines from 50+ Countries</h1>

                <select id="country" name="country" value={selectedCountry} onChange={handleCountryChange} className='mb-5 p-2 text-center bg-white text-gray-800 rounded-md'>
                    {Object.entries(countries).map(([code, name]) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>

                <div className='h-[80%] w-full flex justify-center items-center gap-3'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        slidesPerView={4}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {data.map((news, index) => (
                            news.urlToImage && (
                                <SwiperSlide key={index} className='rounded-md'>
                                    <div className='h-[420px] w-full rounded-md'>

                                        <div className='h-full w-full bg-white rounded-md flex flex-col gap-2 p-4 shadow-md hover:shadow-lg transition-shadow duration-200'>
                                            <div className='h-[50%]'>

                                                <img src={news.urlToImage} alt="" className=' w-full object-cover rounded-md' />
                                            </div>

                                            <a className='text-md underline font-semibold mt-2 text-blue-600 hover:text-blue-800' href={news.url} target="_blank" rel="noopener noreferrer">

                                                {truncateContent(news?.content ?? '', truncateWords)}

                                            </a>

                                            <p className='text-sm font-semibold mt-1'>{news.title}</p>

                                            <p className='text-xs text-gray-500'>Published at: <span>{new Date(news.publishedAt).toLocaleString()}</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className='flex flex-col mt-16 justify-center items-center'>
                {/* Search section */}
                <div className='text-blue-700 w-full max-w-[1080px] h-16 font-semibold text-2xl mx-auto my-8 flex justify-between items-center gap-4 p-4 shadow-lg rounded-md bg-white'>
                    <div className='w-[20%] flex justify-center items-center h-full text-lg gap-3'>
                        <div className='w-full h-full flex items-center justify-center border-r-2 border-gray-300'>
                            <select value={selectedCategory} onChange={handleCategoryChange} className='w-full h-full hover:cursor-pointer outline-none'>
                                {Object.entries(AllCategory).map(([code, name]) => (
                                    <option key={code} value={code}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='w-[20%] flex justify-center items-center h-full text-lg gap-3'>
                        <div className='w-full h-full flex items-center justify-center border-r-2 border-gray-300'>
                            <select value={selectedCountry} onChange={handleCountryChange} className='w-full h-full hover:cursor-pointer outline-none'>
                                {Object.entries(countries).map(([code, name]) => (
                                    <option key={code} value={code}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <SearchSection />
                </div>

                {/* All category section */}
                <div className='h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5'>
                    {allData.map((news, index) => (
                        news.urlToImage && (
                            <div key={index} className='rounded-md bg-white shadow-lg'>
                                <Cards news={news} truncateContent={truncateContent} truncateWords={truncateWords} />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
