import { useEffect, useState } from "react";

const lines = [
  "Initializing Intelligence...",
  "Loading Models...",
  "Retrieving Knowledge...",
  "Engineer Identified: Nithish Kondapaka",
  "Role: AI / ML Engineer | GenAI | RAG | Cloud AI"
];

export default function BootText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 900);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#00eaff",
      fontFamily: "monospace"
    }}>
      <div>
        {lines.slice(0, index + 1).map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  );
}