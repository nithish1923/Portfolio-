import { Box, Text } from "@react-three/drei";
const projects=[{name:"Enterprise RAG KB",z:-22},{name:"Query Genie (Multi-Agent)",z:-26},{name:"Voice Banking AI",z:-30},{name:"AI Cloud Automation",z:-34}];
export default function ProjectWorlds(){return(<>{projects.map((p,i)=>(<group key={i} position={[0,0,p.z]}>
<Box args={[3,2,0.5]}><meshStandardMaterial color="#00eaff"/></Box>
<Text position={[0,-2,0]} fontSize={0.4}>{p.name}</Text></group>))}</>);}
