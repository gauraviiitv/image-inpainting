"use client";

import { useRouter } from "next/navigation";
import { useMask } from "../context/MaskContext";

const FinalPage = () => {
  const router = useRouter();
  const { mask } = useMask(); // Access the mask from context

  const downloadMaskedImage = () => {
    if (mask) {
      // Create a temporary canvas
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");

      const img = new Image();
      img.src = mask;

      img.onload = () => {
        // Set canvas size to match the mask
        tempCanvas.width = img.width;
        tempCanvas.height = img.height;

        if (tempCtx) {
          // Fill the background with black
          tempCtx.fillStyle = "black";
          tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

          // Draw the white mask on top
          tempCtx.drawImage(img, 0, 0);

          // Convert the canvas to a data URL and download
          const blackMaskUrl = tempCanvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = blackMaskUrl;
          link.download = "masked-image.png";
          link.click();
        }
      };
    }
  };

  const goToUploadPage = () => {
    router.push("/upload");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Masked Image</h1>
      {mask && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview of the Mask</h2>
          <img
            src={mask}
            alt="Masked"
            className="border rounded-lg shadow-md"
          />
        </div>
      )}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={downloadMaskedImage}
          className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Download Masked Image
        </button>
        <button
          onClick={goToUploadPage}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Mask Another Image
        </button>
      </div>
    </div>
  );
};

export default FinalPage;
