import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Icosahedron, Octahedron } from '@react-three/drei';

const FloatingObject = ({ position, type, speed, rotationSpeed, scale }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += rotationSpeed.x;
      mesh.current.rotation.y += rotationSpeed.y;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const renderGeometry = () => {
    switch (type) {
      case 'sphere':
        return <Sphere args={[scale, 32, 32]} />;
      case 'torus':
        return <Torus args={[scale, scale * 0.4, 16, 100]} />;
      case 'icosahedron':
        return <Icosahedron args={[scale, 0]} />;
      case 'octahedron':
        return <Octahedron args={[scale, 0]} />;
      default:
        return <Icosahedron args={[scale, 0]} />;
    }
  };

  return (
    <mesh ref={mesh} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color={randomColor}
        metalness={0.5}
        roughness={0.2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

const FloatingObjects = ({ isMobile = false }) => {
  const objectCount = isMobile ? 8 : 15;
  const objects = [];

  const types = ['sphere', 'torus', 'icosahedron', 'octahedron'];

  for (let i = 0; i < objectCount; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const position = [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10 - 5
    ];
    const speed = 0.5 + Math.random() * 0.5;
    const rotationSpeed = {
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02
    };
    const scale = 0.2 + Math.random() * 0.4;

    objects.push(
      <FloatingObject
        key={i}
        position={position}
        type={type}
        speed={speed}
        rotationSpeed={rotationSpeed}
        scale={scale}
      />
    );
  }

  return <group>{objects}</group>;
};

export default FloatingObjects;
