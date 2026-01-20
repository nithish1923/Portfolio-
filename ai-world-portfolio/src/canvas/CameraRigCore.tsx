import { useFrame } from "@react-three/fiber";

export default function CameraRigCore() {
  useFrame(({ mouse, camera }) => {
    camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.y * 1.2 - camera.position.y) * 0.05;
  });
  return null;
}