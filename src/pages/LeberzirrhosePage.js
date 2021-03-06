import React, { Suspense, useState } from 'react';
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

  const ANNOTATION = [
    'Die Leberzirrhose, veraltet Lebercirrhose, ist das Endstadium chronischer Leberkrankheiten. Dieses Stadium gilt als irreversibel, auch wenn einzelne Berichte über Heilungen existieren. Typischerweise entwickelt sich eine Zirrhose über Jahre bis Jahrzehnte, seltener sind schnellere Verläufe von unter einem Jahr. Fast alle chronischen Leberkrankheiten führen im Endstadium zu einer Leberzirrhose. In Europa sind Alkoholmissbrauch, Nicht-alkoholische Fettleber und chronische Virushepatitis die häufigsten Ursachen.',
    'Durch den chronischen Ablauf von Untergang und Regeneration des Lebergewebes entsteht eine gestörte Gewebearchitektur mit knotigen Veränderungen. Zusätzlich bildet sich übermäßig Bindegewebe (Fibrosierung). Diese narbigen Areale können mehr als 50 % des gesamten Gewebes einer zirrhotischen Leber einnehmen. Dadurch ist die Durchblutung der Leber gestört, im Bereich der Pfortader staut sich das Blut vor der Leber (portale Hypertension).'
  ];
  
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
        <Annotation setShow={setShow} annotation={ANNOTATION[0]} setAnnotation={setAnnotation} position={[-0.09497127741027789,0.20808860582452154,1.003644728953606]}/>
        <Annotation setShow={setShow} annotation={ANNOTATION[1]} setAnnotation={setAnnotation} position={[0.8500449910484997,0.1766648835250207,0.06577177785024313]}/>
      </Canvas>
    </Suspense>
  );
};

export default LeberzirrhosePage;