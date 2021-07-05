import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Leberzirrhose from './components/Leberzirrhose';
import Duck from './components/Duck'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <Suspense fallback='null'>
      <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Leberzirrhose position={[0, 0, 4]} />
      <Duck position={[0, 0, 0]} />
      </Canvas>
    </Suspense>
  );
}

export default App;
