'use client';
// pages/index.tsx
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Home = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const navigateToUpload = () => {
    router.push('/upload');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 animate-fade-in">
          Welcome to the <span className="text-blue-500">Image Masking Tool</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Upload an image, draw a mask, and export it in seconds!
        </p>
        <button
          onClick={navigateToUpload}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 transform ${
            hovered ? 'bg-blue-600 scale-110 text-white shadow-lg' : 'bg-blue-500 text-white'
          } hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300`}
        >
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Home;
