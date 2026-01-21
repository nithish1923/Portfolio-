'use client';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
export default function AvatarPlane(){
  const texture = useLoader(THREE.TextureLoader,'/avatar.png');
  return (
    <mesh position={[0,0.2,0]}>
      <planeGeometry args={[2.2,2.8]}/>
      <meshBasicMaterial map={texture} transparent/>
    </mesh>
  );
}
