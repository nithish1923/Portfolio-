import { useMemo } from "react";
import { Points } from "@react-three/drei";

export default function NeuralField() {
  const points = useMemo(
    () =>
      new Float32Array(
        Array.from({ length: 2000 }, () => (Math.random() - 0.5) * 40)
      ),
    []
  );

  return (
    <Points positions={points}>
      <pointsMaterial color="#00eaff" size={0.05} />
    </Points>
  );
}