import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
export default function AICore(){
const ref=useRef<THREE.Mesh>(null!);
useFrame(({clock})=>{ref.current.rotation.y+=0.004;ref.current.scale.setScalar(1.1+Math.sin(clock.getElapsedTime())*0.03);});
return(<Sphere args={[1.2,64,64]} position={[0,0,0]} ref={ref}>
<meshStandardMaterial color="#00eaff" emissive="#00eaff" emissiveIntensity={0.4} metalness={0.6} roughness={0.25} transparent opacity={0.9}/>
</Sphere>);
}
