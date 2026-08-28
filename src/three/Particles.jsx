import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 1000, isMobile = false }) => {
  const mesh = useRef();
  const particlesCount = isMobile ? count / 2 : count;

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [particlesCount]);

  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3);
    const color1 = new THREE.Color('#6366f1');
    const color2 = new THREE.Color('#8b5cf6');
    const color3 = new THREE.Color('#06b6d4');
    
    for (let i = 0; i < particlesCount; i++) {
      const randomColor = Math.random();
      let color;
      if (randomColor < 0.33) {
        color = color1;
      } else if (randomColor < 0.66) {
        color = color2;
      } else {
        color = color3;
      }
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return colors;
  }, [particlesCount]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.05 : 0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
