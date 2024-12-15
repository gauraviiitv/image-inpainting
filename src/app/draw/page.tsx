"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMask } from "../context/MaskContext";
import Canvas from "../components/Canvas";

const DrawPage = () => {
  const router = useRouter();
  const { originalImage, setMask } = useMask(); // Access the original image from context
  const [brushSize, setBrushSize] = useState(10);
  const [isDrawing, setIsDrawing] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startDrawing = (e: React.MouseEvent) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = "white"; // Always draw in white
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.globalCompositeOperation = "source-over"; // Normal blending
      ctx.beginPath();
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.closePath();
      setIsDrawing(false);
      if (canvasRef.current) {
        const maskDataUrl = canvasRef.current.toDataURL("image/png");
        setMask(maskDataUrl); // Save the mask in context
      }
    }
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx && canvasRef.current && originalImage) {
      const img = new Image();
      img.src = originalImage;

      img.onload = () => {
        // Clear the canvas and redraw the image
        if (canvasRef.current) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
        if (canvasRef.current) {
          ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
    }
    setMask(null);
  };

  const goToFinalPage = () => {
    router.push("/final");
  };

  const goToUploadPage = () => {
    router.push("/upload");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Draw Your Mask</h1>
      <Canvas
        image={originalImage || ""} // Pass the original image to the Canvas component
        brushSize={brushSize}
        isDrawing={isDrawing}
        startDrawing={startDrawing}
        draw={draw}
        stopDrawing={stopDrawing}
        canvasRef={canvasRef}
      />
      <div className="space-y-4 mt-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="brush-size">Brush Size:</label>
          <input
            id="brush-size"
            type="range"
            min="5"
            max="50"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="slider"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={clearCanvas}
          className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Clear Mask
        </button>
        <button
          onClick={goToFinalPage}
          className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Next
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

export default DrawPage;
