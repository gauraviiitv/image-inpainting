"use client";

import React from "react";
import { useMask } from "../context/MaskContext";
import { useRouter } from "next/navigation";

const UploadImage: React.FC = () => {
  const { setOriginalImage } = useMask(); // Access the context to set the original image
  const router = useRouter(); // Use router for navigation

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setOriginalImage(reader.result.toString()); // Save the image in context
          router.push("/draw"); // Navigate to the DrawPage
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
      />
    </div>
  );
};

export default UploadImage;
