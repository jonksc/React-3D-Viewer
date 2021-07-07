/* eslint-disable react/prop-types */
import React from 'react';
import { Sphere } from '@react-three/drei';

const Annotation = ({ position, setShow }) => {

  // const data = useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(data => {
  //       return data
  //     })
  // }, [])

  const handleClick = () => {
    setShow(true);
  };

  return (
    <Sphere scale={[0.1, 0.1, 0.1]} position={position} onClick={handleClick}>
      <meshBasicMaterial attach="material" color="skyblue" />
    </Sphere>
  );
};

export default Annotation;