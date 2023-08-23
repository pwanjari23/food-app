import React from 'react';

const About = () => {
  return (
    <div className="bg-white  min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-black mb-6 font-semibold text-lg">
          We are passionate about bringing the finest culinary experiences to your table. Our team of dedicated food enthusiasts works tirelessly to curate and share the best recipes, flavors, and stories from around the world.
        </p>
        <p className="text-black mb-6 font-semibold text-lg">
          At [Your App Name], we believe that food is not just sustenance but a journey that connects cultures and communities. Our mission is to make this journey accessible and delightful for everyone, from seasoned chefs to home cooks.
        </p>
        <p className="text-black font-semibold text-lg">
          Join us as we embark on a gastronomic adventure that celebrates the art of cooking and the joy of sharing good food with loved ones.
        </p>
      </div>
    </div>
  );
};

export default About;
