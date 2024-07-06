import React from 'react';

const Contact = () => {
    return (
        <div className='min-h-screen bg-blue-300 flex flex-col items-center justify-center p-10'>
            <div className='w-full max-w-4xl bg-white rounded-lg shadow-md p-8'>
                <h1 className='text-4xl font-extrabold text-center mb-6 text-blue-700'>Contact Us</h1>

                <p className='text-lg leading-relaxed'>
                    If you have any questions, suggestions, or feedback, please don't hesitate to contact us. We value your input and look forward to hearing from you.
                </p>
                <form className='mt-8 space-y-4'>
                    <div>
                        <label className='block text-lg font-medium'>Name</label>
                        <input type='text' className='w-full border-2 border-gray-300 p-2 rounded-lg' placeholder='Your Name' />
                    </div>
                    <div>
                        <label className='block text-lg font-medium'>Email</label>
                        <input type='email' className='w-full border-2 border-gray-300 p-2 rounded-lg' placeholder='Your Email' />
                    </div>
                    <div>
                        <label className='block text-lg font-medium'>Message</label>
                        <textarea className='w-full border-2 border-gray-300 p-2 rounded-lg' rows='5' placeholder='Your Message'></textarea>
                    </div>
                    <button type='submit' className='bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
