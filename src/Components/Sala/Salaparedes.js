/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelSalaParedes(props) {
  const { nodes, materials } = useGLTF('Sala/salaparedes.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Paredes.geometry} material={materials.paredes} />
    </group>
  )
}

useGLTF.preload('Sala/salaparedes.gltf')
