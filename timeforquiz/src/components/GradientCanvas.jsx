import React, { useEffect, useRef } from 'react';
import { Gradient } from '../utils/Gradient';

const GradientCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const gradient = new Gradient();
      gradient.initGradient('#gradient-canvas');
    }
  }, []);

  return <canvas id="gradient-canvas"  className="fixed z-0" data-transition-in ref={canvasRef} />;
};

export default GradientCanvas;