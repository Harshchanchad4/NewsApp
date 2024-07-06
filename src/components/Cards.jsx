import React from 'react';


const Cards = ({ news, truncateContent, truncateWords }) => {
  return (

    <div className='h-[420px] w-full rounded-md'>

      <div className='h-full w-full bg-white rounded-md flex flex-col gap-2 p-4 shadow-md hover:shadow-lg transition-shadow duration-200'>

        <img src={news.urlToImage} alt="" className='h-[250px] w-full object-cover rounded-md' />

        <a className='text-md underline font-semibold mt-2 text-blue-600 hover:text-blue-800' href={news.url} target="_blank" rel="noopener noreferrer">

          {truncateContent(news?.content ?? '', truncateWords)}

        </a>

        <p className='text-sm font-semibold mt-1'>{news.title}</p>
        
        <p className='text-xs text-gray-500'>Published at: <span>{new Date(news.publishedAt).toLocaleString()}</span></p>
      </div>
    </div>
  );
};

export default Cards;
