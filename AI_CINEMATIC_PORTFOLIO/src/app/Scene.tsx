'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

import AvatarPlane from './components/AvatarPlane';
import SkillGeometry from './components/SkillGeometry';
import ProjectEnergy from './components/ProjectEnergy';
import ProjectTitles from './components/ProjectTitles';
import ContactClimax from './components/ContactClimax';

function CameraRig(){
  const scroll = useScroll();
  useFrame(({camera})=>{
    const p=scroll.offset;
    if(p<0.8){
      camera.position.z = THREE.MathUtils.lerp(10,3,p);
      camera.position.y = THREE.MathUtils.lerp(1.8,0,p);
      camera.rotation.x = THREE.MathUtils.lerp(-0.2,0.02,p);
    } else {
      camera.position.set(0,0,3);
      camera.lookAt(0,0,-4);
    }
  });
  return null;
}

export default function Scene(){
  return (
    <Canvas camera={{position:[0,2,10],fov:50}}>
      <ambientLight intensity={0.15}/>
      <directionalLight position={[5,5,5]} intensity={1.8}/>
      <ScrollControls pages={5} damping={0.25}>
        <CameraRig/>
        <AvatarPlane/>
        <SkillGeometry/>
        <ProjectEnergy/>
        <ProjectTitles/>
        <ContactClimax/>
      </ScrollControls>
      <EffectComposer>
        <Bloom intensity={1.4} luminanceThreshold={0.2}/>
        <Noise opacity={0.035}/>
        <Vignette offset={0.15} darkness={1.2}/>
      </EffectComposer>
    </Canvas>
  );
}
