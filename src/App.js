import React from 'react'
import { Canvas } from '@react-three/fiber'
import Leberzirrhose from './components/Leberzirrhose';

function App() {
  return (
  <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Leberzirrhose position={[0, 0, 3]} />
  </Canvas>
  );
}

export default App;
