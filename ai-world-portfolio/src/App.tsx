import { useState } from "react";
import EntryScene from "./canvas/EntryScene";
import CoreScene from "./canvas/CoreScene";
import BootText from "./sections/BootText";
import CoreOverlay from "./sections/CoreOverlay";

export default function App() {
  const [phase, setPhase] = useState<"boot" | "core">("boot");

  return (
    <div
      style={{ width: "100vw", height: "100vh", background: "black" }}
      onClick={() => phase === "boot" && setPhase("core")}
    >
      {phase === "boot" && (
        <>
          <EntryScene />
          <BootText />
        </>
      )}
      {phase === "core" && (
        <>
          <CoreScene />
          <CoreOverlay />
        </>
      )}
    </div>
  );
}