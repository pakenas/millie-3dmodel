/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { AmbientLight, MeshBasicMaterial, MeshStandardMaterial, RepeatWrapping } from 'three';



export default function Model(props) {
const { nodes, materials } = useGLTF('/v2/jbl/3b_Jubilee_Clean.glb')

const [colorMap, displacementMap, normalMap, roughnessMap, metalnessMap] = useLoader(TextureLoader, [
    '/txt/Jubilee/Platinum_Gold/Strap_Metallic.jpg',
  ])
  


const base = useLoader(TextureLoader, '/txt/Jubilee/Titanium_Gold/Strap_BaseColor.jpg')
base.wrapS = RepeatWrapping;
base.wrapT = RepeatWrapping;
base.repeat.set(1, 1);
base.flipY = false;
base.mapping = RepeatWrapping;

const displacement = useLoader(TextureLoader, '/txt/Jubilee/Titanium_Gold/Strap_Displacement.jpg')
displacement.wrapS = RepeatWrapping;
displacement.wrapT = RepeatWrapping;
displacement.repeat.set(1, 1);
displacement.flipY = true;
displacement.mapping = RepeatWrapping;

const normal = useLoader(TextureLoader, '/txt/Jubilee/Titanium_Gold/Strap_Normal.jpg')
normal.wrapS = RepeatWrapping;
normal.wrapT = RepeatWrapping;
normal.repeat.set(1, 1);
normal.flipY = true;
normal.mapping = RepeatWrapping;

const metalness = useLoader(TextureLoader, '/txt/Jubilee/Titanium_Gold/Strap_Metallic.jpg')
metalness.wrapS = RepeatWrapping;
metalness.wrapT = RepeatWrapping;
metalness.repeat.set(1, 1);
metalness.flipY = true;
metalness.mapping = RepeatWrapping;

const roughness = useLoader(TextureLoader, '/txt/Jubilee/Titanium_Gold/Strap_Roughness.jpg')
roughness.wrapS = RepeatWrapping;
roughness.wrapT = RepeatWrapping;
roughness.repeat.set(1, 1);
roughness.flipY = true;
roughness.mapping = RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>        
        <mesh geometry={nodes.Plane002.geometry} 
        // material={materials.Strap_Jubilee} 
        >
            <meshStandardMaterial
                displacementScale={0.0}
                map={base}
                displacementMap={displacement}
                normalMap={normal}
                attach="material"
                metalnessMap={metalness}
                roughnessMap={roughness}
                // metalness={1.0}
                // roughness={1.0}                
            />
        </mesh>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Face_Middle} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials.Display} />
        <mesh geometry={nodes.Plane002_3.geometry} material={materials.Face_Front} />
        <mesh geometry={nodes.Plane002_4.geometry} material={materials.Face_back} />
        <mesh geometry={nodes.Plane002_5.geometry} material={materials.Screws} />
      </group>
    </group>
  )
}

useGLTF.preload('/v2/jbl/3b_Jubilee_Clean.glb')
