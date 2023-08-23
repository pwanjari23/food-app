import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
        <div className="mt-8 bg-gray-100 shadow-md p-6 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};




export default Contact;