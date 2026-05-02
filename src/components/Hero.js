// import Contact from './Contact';
// import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei'

const Hero = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Floating 3D Shape */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial color="#22c55e" speed={3} distort={0.4} />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
export default Hero;