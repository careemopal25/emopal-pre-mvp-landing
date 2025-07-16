import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Environment } from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

function AnimatedPoints() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  
  // Generate fewer, more subtle particles
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(800 * 3); // Reduced from 5000 to 800
    const colors = new Float32Array(800 * 3);
    
    for (let i = 0; i < 800; i++) {
      // Wider distribution, less dense
      const radius = Math.random() * 40 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Complementary colors: warm oranges for dark, cool blues for light
      const normalizedRadius = radius / 50;
      if (theme === 'dark') {
        // Warm copper/orange tones for dark mode
        colors[i * 3] = 0.4 + normalizedRadius * 0.2; // Red
        colors[i * 3 + 1] = 0.2 + normalizedRadius * 0.15; // Green  
        colors[i * 3 + 2] = 0.1 + normalizedRadius * 0.05; // Blue
      } else {
        // Cool blue/teal tones for light mode
        colors[i * 3] = 0.1 + normalizedRadius * 0.1; // Red - minimal
        colors[i * 3 + 1] = 0.3 + normalizedRadius * 0.2; // Green - teal
        colors[i * 3 + 2] = 0.5 + normalizedRadius * 0.3; // Blue - strong
      }
    }
    
    return [positions, colors];
  }, [theme]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={theme === 'dark' ? 0.3 : 0.4}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === 'dark' ? 0.15 : 0.25}
        blending={THREE.AdditiveBlending}
      />
      <bufferAttribute
        attach="geometry-attributes-color"
        array={colors}
        count={colors.length / 3}
        itemSize={3}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const orbColor = theme === 'dark' ? '#df8a67' : '#d98c5a';
  const orbEmissive = theme === 'dark' ? '#8B4513' : '#CD853F';

  return (
    <group ref={group}>
      {Array.from({ length: 8 }, (_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 15,
            Math.sin(i * 0.5) * 5,
            Math.sin((i / 8) * Math.PI * 2) * 15,
          ]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color={orbColor}
            emissive={orbEmissive}
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const { theme } = useTheme();
  
  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 0.1 : 0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={theme === 'dark' ? 0.2 : 0.3}
        color={theme === 'dark' ? '#ffa366' : '#66b3ff'}
      />
      
      <AnimatedPoints />
    </>
  );
}

export const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};