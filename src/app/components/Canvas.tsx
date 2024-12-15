import { useEffect, RefObject } from "react";

interface CanvasProps {
  image: string;
  brushSize: number;
  isDrawing: boolean;
  startDrawing: (e: React.MouseEvent) => void;
  draw: (e: React.MouseEvent) => void;
  stopDrawing: () => void;
  canvasRef: RefObject<HTMLCanvasElement | null>;
}

const Canvas = ({
  image,
  brushSize,
  isDrawing,
  startDrawing,
  draw,
  stopDrawing,
  canvasRef,
}: CanvasProps) => {
  useEffect(() => {
    if (canvasRef.current && image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = image;

      img.onload = () => {
        if (ctx) {
          // Set canvas size to match the image
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw the image as the base layer
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      };
    }
  }, [image, canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="border mb-4"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    />
  );
};

export default Canvas;
