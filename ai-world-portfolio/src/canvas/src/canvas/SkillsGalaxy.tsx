import { Sphere, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const skills = [
  { name: "LLMs", color: "#00eaff", position: [-4, 1, -8] },
  { name: "Machine Learning", color: "#7cff00", position: [4, -1, -10] },
  { name: "Cloud AI", color: "#ff8c00", position: [-2, -3, -12] },
  { name: "MLOps", color: "#ff0077", position: [3, 3, -14] },
  { name: "Vector DBs", color: "#a855f7", position: [0, 0, -16] }
];

export default function SkillsGalaxy() {
  return (
    <>
      {skills.map((skill, i) => (
        <SkillPlanet key={i} {...skill} />
      ))}
    </>
  );
}

function SkillPlanet({
  name,
  color,
  position
}: {
  name: string;
  color: string;
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.y += 0.01;
    ref.current.position.y += Math.sin(clock.getElapsedTime() + position[0]) * 0.002;
  });

  return (
    <group position={position}>
      <Sphere ref={ref} args={[0.8, 64, 64]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          metalness={0.5}
          roughness={0.3}
        />
      </Sphere>

      <Text
        position={[0, -1.3, 0]}
        fontSize={0.35}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}
