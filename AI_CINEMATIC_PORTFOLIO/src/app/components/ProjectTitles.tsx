'use client';
import { Text } from '@react-three/drei';
import { useScroll } from '@react-three/drei';
export default function ProjectTitles(){
  const s=useScroll();
  if(s.offset<0.6||s.offset>0.8) return null;
  return (
    <>
      <Text position={[2.2,1.2,-2]} fontSize={0.28}>Enterprise RAG Knowledge Base</Text>
      <Text position={[2.2,0.4,-2]} fontSize={0.28}>Query Genie · Multi-Agent AI</Text>
      <Text position={[2.2,-0.4,-2]} fontSize={0.28}>Voice Banking AI</Text>
      <Text position={[2.2,-1.2,-2]} fontSize={0.28}>AI Cloud Automation</Text>
    </>
  );
}
