interface BrushControlsProps {
  brushSize: number;
  setBrushSize: (size: number) => void;
  brushColor: string;
  setBrushColor: (color: string) => void;
  opacity: number;
  setOpacity: (opacity: number) => void;
}

const BrushControls = ({
  brushSize,
  setBrushSize,
  brushColor,
  setBrushColor,
  opacity,
  setOpacity,
}: BrushControlsProps) => {
  return (
    <div className="space-y-4">
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
      <div className="flex items-center space-x-4">
        <label htmlFor="brush-color">Brush Color:</label>
        <input
          id="brush-color"
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="opacity">Opacity:</label>
        <input
          id="opacity"
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default BrushControls;
