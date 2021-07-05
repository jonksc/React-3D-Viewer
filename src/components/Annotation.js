import React, { useEffect } from 'react'
import { Sphere } from '@react-three/drei'
import { useAnno } from '../AnnotationStore'

const Annotation = ({ annotation, setAnnotation }) => {

  const handleClick = () => {
    if (!annotation) setAnnotation('Annotation successfully set')
  }

  return (
    <Sphere scale={[0.1, 0.1, 0.1]} position={[-0.2, 0.25, 1]} onClick={handleClick}>
      <meshBasicMaterial attach="material" color="skyblue" />
    </Sphere>
  )
}

export default Annotation