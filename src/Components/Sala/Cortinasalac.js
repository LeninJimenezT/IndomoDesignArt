/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelCortinaSalaC(props) {
  const { nodes, materials } = useGLTF('Sala/cortinasalac.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curtain_FBX2002.geometry} material={materials.Material} position={[-4.9, -0.09, -3.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
    </group>
  )
}

useGLTF.preload('Sala/cortinasalac.gltf')
