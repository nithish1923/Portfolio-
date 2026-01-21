'use client';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export default function SkillGeometry(){
  const g=useRef<THREE.Group>(null!);
  const s=useScroll();
  useFrame(()=>{
    const t=THREE.MathUtils.clamp((s.offset-0.35)*2,0,1);
    g.current.rotation.y=t*Math.PI*2;
    g.current.children.forEach((c,i)=>{
      const a=i/4*Math.PI*2;
      c.position.set(Math.cos(a)*t*2,Math.sin(a)*t*1.4,0);
      c.scale.setScalar(0.4+t*0.6);
    });
  });
  return (
    <group ref={g}>
      <mesh><icosahedronGeometry args={[0.5,2]}/><meshStandardMaterial emissive='#00eaff'/></mesh>
      <mesh><octahedronGeometry args={[0.4,0]}/><meshStandardMaterial emissive='#7cff00'/></mesh>
      <mesh><tetrahedronGeometry args={[0.45,0]}/><meshStandardMaterial emissive='#ff8c00'/></mesh>
      <mesh><dodecahedronGeometry args={[0.42,0]}/><meshStandardMaterial emissive='#a855f7'/></mesh>
    </group>
  );
}
