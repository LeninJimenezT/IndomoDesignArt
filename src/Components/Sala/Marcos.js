/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelMarcos(props) {
  const { nodes, materials } = useGLTF('Sala/marcos.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.ventana_marcos.geometry} material={materials.Metal} position={[-5.13, 2.5, 3.37]} />
    </group>
  )
}

useGLTF.preload('Sala/marcos.gltf')
