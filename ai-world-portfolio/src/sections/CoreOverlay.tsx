import avatar from "../assets/avatar.png";

export default function CoreOverlay() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white"
    }}>
      <img
        src={avatar}
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          border: "4px solid #00eaff"
        }}
      />
      <h2 style={{ color: "#00eaff" }}>Nithish Kondapaka</h2>
      <p>AI / ML Engineer · GenAI · RAG · Cloud AI</p>
    </div>
  );
}