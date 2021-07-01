import React, { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = (props) => {
  const mesh = useRef()

  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh
    {...props}
    ref={mesh}
    scale={active ? 1.5 : 1}
    onClick={(e) => setActive(!active)}
    onPointerOver={(e) => setHovered(true)}
    onPointerOut={(e) => setHovered(false)}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  </mesh>
  )
}

export default Box
