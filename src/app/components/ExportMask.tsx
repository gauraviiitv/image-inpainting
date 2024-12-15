// components/ExportMask.tsx
interface ExportMaskProps {
  mask: string;
}

const ExportMask = ({ mask }: ExportMaskProps) => {
  const exportMask = () => {
    const link = document.createElement("a");
    link.href = mask;
    link.download = "mask.png";
    link.click();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4 text-center">Your Mask</h2>
        <div className="flex space-x-4 mb-4">
          <div>
            <h3>Original Image</h3>
            <img src={mask} alt="Mask" className="w-60 h-60 object-cover" />
          </div>
        </div>
        <button
          onClick={exportMask}
          className="w-full py-2 bg-green-500 text-white rounded-lg mt-4 hover:bg-green-600"
        >
          Export Mask
        </button>
      </div>
    </div>
  );
};

export default ExportMask;
