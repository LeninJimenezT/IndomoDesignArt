/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelPortaCortinaSala(props) {
  const { nodes, materials } = useGLTF('Sala/portacortinasala.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Portacortina.geometry} material={materials.barrederas} position={[-4.91, 4.54, 3.34]} scale={[0.1, 0.11, 1.22]} />
      <mesh geometry={nodes.Portacortina2.geometry} material={materials.barrederas} position={[-4.91, 4.54, -0.12]} scale={[0.1, 0.11, 1.22]} />
      <mesh geometry={nodes.Portacortina3.geometry} material={materials.barrederas} position={[-4.91, 4.54, -3.44]} scale={[0.1, 0.11, 1.22]} />
    </group>
  )
}

useGLTF.preload('Sala/portacortinasala.gltf')
