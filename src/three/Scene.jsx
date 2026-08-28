import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import Particles from './Particles';
import FloatingObjects from './FloatingObjects';
import CameraController from './CameraController';
import './Scene.css';

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="scene-container">
      <Canvas
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
          
          <CameraController isMobile={isMobile} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <Stars 
            radius={100} 
            depth={50} 
            count={isMobile ? 1000 : 5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1}
          />
          
          <Particles count={isMobile ? 500 : 2000} isMobile={isMobile} />
          <FloatingObjects isMobile={isMobile} />
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
