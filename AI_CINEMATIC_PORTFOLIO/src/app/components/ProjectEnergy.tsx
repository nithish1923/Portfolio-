'use client';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export default function ProjectEnergy(){
  const g=useRef<THREE.Group>(null!);
  const s=useScroll();
  useFrame(()=>{
    const t=THREE.MathUtils.clamp((s.offset-0.55)*2,0,1);
    g.current.children.forEach((b,i)=>{
      b.scale.y=THREE.MathUtils.lerp(0.01,2.5,t);
      b.position.y=[1.2,0.4,-0.4,-1.2][i]*t;
    });
  });
  return (
    <group ref={g} position={[0,0,-2]}>
      {['#00eaff','#7cff00','#ff8c00','#a855f7'].map((c,i)=>(
        <mesh key={i}>
          <cylinderGeometry args={[0.05,0.05,1,32]}/>
          <meshStandardMaterial emissive={c} emissiveIntensity={1.2}/>
        </mesh>
      ))}
    </group>
  );
}
