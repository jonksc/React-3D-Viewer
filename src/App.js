import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Leberzirrhose from './components/Leberzirrhose'
import Annotation from './components/Annotation'
import { useAnno } from './AnnotationStore'


function App() {
  const { annotation, setAnnotation } = useAnno()
  console.log(annotation);

  return (
    <Suspense fallback='Loading'>
      <div className='annotation'>
        {annotation}
      </div>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Leberzirrhose scale={[10, 10, 10]} position={[0, 0, 0]} />
        <Annotation />
      </Canvas>
    </Suspense>
  );
}

export default App;
