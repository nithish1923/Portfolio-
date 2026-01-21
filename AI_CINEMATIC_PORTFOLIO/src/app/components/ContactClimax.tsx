'use client';
import { Sphere, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export default function ContactClimax(){
  const core=useRef<any>();
  const s=useScroll();
  useFrame(()=>{
    const t=THREE.MathUtils.clamp((s.offset-0.8)*5,0,1);
    core.current.scale.setScalar(1+t*3);
    core.current.material.emissiveIntensity=0.5+t*2;
  });
  return (
    <group position={[0,0,-4]}>
      <Sphere ref={core} args={[0.6,64,64]}>
        <meshStandardMaterial emissive='#00eaff'/>
      </Sphere>
      <Text position={[0,-2.2,0]} fontSize={0.55}>Nithish Kondapaka</Text>
      <Text position={[0,-3.1,0]} fontSize={0.28} color='#9ca3af'>AI / ML Engineer · GenAI · RAG · Cloud</Text>
      <Text position={[0,-4.2,0]} fontSize={0.25}>kondapakanithish@gmail.com</Text>
    </group>
  );
}
