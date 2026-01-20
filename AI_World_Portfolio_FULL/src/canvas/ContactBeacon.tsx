import { Sphere, Text } from "@react-three/drei";
export default function ContactBeacon(){
return(<group position={[0,0,-50]}>
<Sphere args={[1,32,32]}><meshStandardMaterial emissive="#00ffaa"/></Sphere>
<Text position={[0,-2,0]} fontSize={0.4}>Let’s Build the Future</Text></group>);
}
