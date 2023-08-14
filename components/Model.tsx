import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from 'drei';

const Model = () => {
  const gltf = useGLTF('/models/Astronaut.glbf');

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={gltf.scene} />
    </Canvas>
  );
};

export default Model;
