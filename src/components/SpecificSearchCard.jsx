import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpecificSearchCard = ({ news }) => {
    const navigate = useNavigate();
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        news.title && news.urlToImage && news.url && (
            <a className="group flex justify-center items-center h-[280px] w-full bg-white px-3 py-4 border rounded-md shadow-md cursor-pointer " href={news.url} >

                <div className="w-full flex flex-col md:flex-row pl-4">

                    <div className="text-xl w-full md:w-[17%] mb-2 md:mb-0 text-gray-600">

                        {formatDate(news.publishedAt)}

                    </div>

                    <div className="w-full md:w-3/4 flex flex-col">

                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10 ">

                            <div className="flex justify-center items-start  flex-wrap flex-col mb-2 md:mb-0 md:w-2/3">

                                <a className="text-2xl font-bold text-gray-800 group-hover:underline" href={news.url}>{news.title}</a>

                                <p className="text-gray-600 mt-2">{news.description}</p>

                            </div>

                            <div className="flex justify-center items-center md:w-1/3">
                                <img src={news.urlToImage} alt="News" className="h-[200px] md:h-[220px] rounded-md object-cover" />

                            </div>
                        </div>

                        <div className="border-t-2 border-gray-200 w-full mt-4"></div>
                    </div>
                </div>
            </a>
        )
    );
};

export default SpecificSearchCard;
