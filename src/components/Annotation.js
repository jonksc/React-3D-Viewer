/* eslint-disable react/prop-types */
import React from 'react';
import { Sphere } from '@react-three/drei';

const Annotation = ({ position, setShow, annotation, setAnnotation }) => {

  const handleClick = () => {
    setAnnotation(annotation);
    setShow(true);
  };

  return (
    <Sphere scale={[0.07, 0.07, 0.07]} position={position} onClick={handleClick}>
      <meshBasicMaterial attach="material" color="skyblue" />
    </Sphere>
  );
};

export default Annotation;