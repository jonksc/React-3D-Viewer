/* eslint-disable react/prop-types */
import React from 'react';
import { Sphere } from '@react-three/drei';

const ANNOTATION = [
  'shit1',
  'shit2',
  'shit3'
];

const Annotation = ({ annotation, setAnnotation }) => {

  // const data = useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(data => {
  //       return data
  //     })
  // }, [])

  const handleClick = () => {
    if (!annotation) {
      return setAnnotation(ANNOTATION[1]);
    }
    setAnnotation('');
  };

  return (
    <Sphere scale={[0.1, 0.1, 0.1]} position={[-0.2, 0.25, 1]} onClick={handleClick}>
      <meshBasicMaterial attach="material" color="skyblue" />
    </Sphere>
  );
};

export default Annotation;