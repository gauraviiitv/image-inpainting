"use client";

import UploadImage from "../components/UploadImage";

const UploadPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <div className="w-full max-w-md bg-white text-gray-900 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Upload Your Image
        </h1>
        <p className="text-center text-sm mb-4 text-gray-700">
          Select an image from your device to upload and share.
        </p>
        <UploadImage />
        <p className="mt-4 text-xs text-center text-gray-500">
          Supported formats: JPG, PNG
        </p>
      </div>
    </div>
  );
};

export default UploadPage;
