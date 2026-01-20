import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import NeuralField from "./NeuralField";
import CameraRig from "./CameraRig";
import AICore from "./AICore";
import SkillsGalaxy from "./SkillsGalaxy";
import ProjectWorlds from "./ProjectWorlds";
import ExperienceTunnel from "./ExperienceTunnel";
import ContactBeacon from "./ContactBeacon";
export default function Scene(){
return(<Canvas camera={{position:[0,0,8],fov:70}} dpr={[1,2]} gl={{antialias:true}}>
<ambientLight intensity={0.4}/><directionalLight position={[5,5,5]} intensity={1.2}/>
<Stars radius={200} depth={80} count={8000} factor={4} fade/>
<NeuralField/><AICore/><SkillsGalaxy/><ProjectWorlds/><ExperienceTunnel/><ContactBeacon/><CameraRig/>
</Canvas>);
}
