import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Leberzirrhose from '../components/models/Leberzirrhose';
import Annotation from '../components/Annotation';
import { useAnno } from '../AnnotationStore';
import Spinner from '../components/UI/Spinner';

const LeberzirrhosePage = () => {

  const { annotation, setAnnotation } = useAnno();
  
  return (
    <Suspense fallback={<Spinner />}>
      <div className='annotation'>
        {annotation}
      </div>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Leberzirrhose scale={[10, 10, 10]} position={[0, 0, 0]} />
        <Annotation annotation={annotation} setAnnotation={setAnnotation} position={[-0.1611891936372079, 0.2533683569426359, 1.0830214880712363]}/>
      </Canvas>
    </Suspense>
  );
};

export default LeberzirrhosePage;
