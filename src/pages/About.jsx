import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col items-center justify-center p-10'>
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-lg p-10 transform transition-all hover:shadow-2xl '>
        <h1 className='text-4xl font-extrabold text-center mb-6 text-blue-700'>About Us</h1>
        <p className='text-lg leading-relaxed text-gray-700'>
          Welcome to <span className='font-semibold text-blue-800'>news24</span>, your number one source for all news. We're dedicated to providing you the best of news, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p className='text-lg leading-relaxed mt-6 text-gray-700'>
          Founded in <span className='font-semibold text-blue-800'>2024</span> by <span className='font-semibold text-blue-800'>Harsh Chanchad</span>, <span className='font-semibold text-blue-800'>news24</span> has come a long way from its beginnings. When <span className='font-semibold text-blue-800'>Harsh Chanchad</span> first started out, his passion for news drove him to start his own business.
        </p>
        <p className='text-lg leading-relaxed mt-6 text-gray-700'>
          At <span className='font-semibold text-blue-800'>news24</span>, we provide the latest news updated to the minute, covering headlines from over 50 countries and various categories. We aim to keep you informed with the latest happenings around the world, no matter where you are.
        </p>
        <p className='text-lg leading-relaxed mt-6 text-gray-700'>
          We hope you enjoy our news as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className='text-lg leading-relaxed mt-6 text-gray-700'>
          Sincerely,<br />
          <span className='font-semibold text-blue-800'>Harsh Chanchad</span>
        </p>
      </div>
    </div>
  );
};

export default About;
