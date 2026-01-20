import { Sphere, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
const skills=[{name:"LLMs & RAG",pos:[-4,1,-10],color:"#00eaff"},{name:"Machine Learning",pos:[4,-1,-12],color:"#7cff00"},{name:"Cloud AI",pos:[-3,-3,-14],color:"#ff8c00"},{name:"MLOps",pos:[3,3,-16],color:"#ff0077"},{name:"Vector DBs",pos:[0,0,-18],color:"#a855f7"}];
export default function SkillsGalaxy(){return(<>{skills.map((s,i)=><Planet key={i} {...s}/>)}</>);}
function Planet({name,pos,color}:any){
const ref=useRef<THREE.Mesh>(null!);useFrame(()=>{ref.current.rotation.y+=0.01});
return(<group position={pos}><Sphere ref={ref} args={[0.8,48,48]}>
<meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3}/></Sphere>
<Text position={[0,-1.3,0]} fontSize={0.35} color="white">{name}</Text></group>);
}
