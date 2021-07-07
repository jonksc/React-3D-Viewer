import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Leberzirrhose from '../components/models/Leberzirrhose';
import Annotation from '../components/Annotation';
import { useAnno } from '../AnnotationStore';
import Spinner from '../components/UI/Spinner';
import AnnoModal from '../components/UI/AnnoModal';

const LeberzirrhosePage = () => {
  const [show, setShow] = useState(false);
  const { annotation, setAnnotation } = useAnno();

  const ANNOTATION = 'Die Leberzirrhose, veraltet Lebercirrhose, ist das Endstadium chronischer Leberkrankheiten.';

  useEffect(() => {
    setAnnotation(ANNOTATION);
  }, []);
  
  return (
    <Suspense fallback={<Spinner />}>
      <AnnoModal 
        annotation={annotation} 
        show={show} 
        handleClose={() => setShow(false)} />
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Leberzirrhose scale={[10, 10, 10]} position={[0, 0, 0]} />
        <Annotation setShow={setShow} annotation={annotation} setAnnotation={setAnnotation} position={[-0.1611891936372079, 0.2533683569426359, 1.0830214880712363]}/>
      </Canvas>
    </Suspense>
  );
};

export default LeberzirrhosePage;