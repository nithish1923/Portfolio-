import { useFrame } from "@react-three/fiber";
export default function CameraRig(){useFrame(({camera})=>{camera.position.z-=0.01});return null;}
