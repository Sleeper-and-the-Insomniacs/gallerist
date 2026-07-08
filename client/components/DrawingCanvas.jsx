import React, { useRef } from 'react';

function DrawingCanvas() {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  const startStroke = 

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      style={{ border: '1px solid #ccc' }}
    />
  );
};

export default DrawingCanvas;
