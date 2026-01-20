import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import AICore from "./AICore";
import CameraRigCore from "./CameraRigCore";

export default function CoreScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 65 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <AICore />
      <CameraRigCore />
    </Canvas>
  );
}