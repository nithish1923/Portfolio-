import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import NeuralField from "./NeuralField";
import CameraRig from "./CameraRig";

export default function EntryScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
      <ambientLight intensity={0.5} />
      <Stars radius={150} depth={60} count={8000} factor={4} />
      <NeuralField />
      <CameraRig />
    </Canvas>
  );
}