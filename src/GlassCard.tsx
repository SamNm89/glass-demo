import React, { useState } from "react";

const GlassCard: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`glass-card${clicked ? " active" : ""}`}
      onClick={() => setClicked(!clicked)}
      style={{
        padding: "2rem",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.17)",
        boxShadow: "0 4px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.18)",
        textAlign: "center",
        cursor: "pointer",
        transition: "background 0.2s, color 0.2s",
        color: clicked ? "#fff" : "#222",
        backgroundColor: clicked ? "rgba(60, 120, 216, 0.25)" : "rgba(255,255,255,0.17)",
      }}
    >
      <h2 style={{ margin: 0 }}>Glass UI Card</h2>
      <p style={{ margin: "1rem 0 0 0" }}>
        {clicked ? "You clicked the card! 🎉" : "Click to interact with glass effect."}
      </p>
    </div>
  );
};

export default GlassCard;