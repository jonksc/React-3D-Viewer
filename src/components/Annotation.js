import React from 'react'
import { Sphere } from '@react-three/drei'

const Annotation = () => {

  const handleClick = () => {
    // setShowAnno(!showAnno)
  }

  return (
    <Sphere scale={[0.1, 0.1, 0.1]} position={[-0.2, 0.25, 1]} onClick={handleClick}>
      <meshBasicMaterial attach="material" color="skyblue" />
    </Sphere>
  )
}

export default Annotation