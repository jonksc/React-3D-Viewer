import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Leberzirrhose from './components/Leberzirrhose';

function App() {
  return (
    <Suspense fallback='Loading'>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Leberzirrhose scale={[10, 10, 10]} position={[0, 0, 0]} />
      </Canvas>
    </Suspense>
  );
}

export default App;
