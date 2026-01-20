import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function AICore() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y += 0.003;
    ref.current.scale.setScalar(1.1 + Math.sin(t) * 0.05);
  });

  return (
    <Sphere args={[1.2, 64, 64]} ref={ref}>
      <meshStandardMaterial
        color="#00eaff"
        emissive="#00eaff"
        emissiveIntensity={0.6}
        transparent
        opacity={0.85}
      />
    </Sphere>
  );
}