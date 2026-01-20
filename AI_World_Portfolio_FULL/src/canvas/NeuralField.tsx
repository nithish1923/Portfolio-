import { Points } from "@react-three/drei";
import { useMemo } from "react";
export default function NeuralField(){
const points=useMemo(()=>new Float32Array(Array.from({length:3000},()=> (Math.random()-0.5)*60)),[]);
return(<Points positions={points}><pointsMaterial color="#00eaff" size={0.04}/></Points>);
}
