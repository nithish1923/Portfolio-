import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  useFrame(({ clock, camera }) => {
    camera.position.z = 10 - clock.getElapsedTime() * 0.3;
  });
  return null;
}