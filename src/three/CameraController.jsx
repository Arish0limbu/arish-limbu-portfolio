import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const CameraController = ({ isMobile = false }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = false;
      controlsRef.current.enablePan = false;
      controlsRef.current.minPolarAngle = Math.PI / 3;
      controlsRef.current.maxPolarAngle = Math.PI / 1.5;
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = isMobile ? 0.5 : 1;
    }
  }, [isMobile]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={isMobile ? 0.5 : 1}
    />
  );
};

export default CameraController;
