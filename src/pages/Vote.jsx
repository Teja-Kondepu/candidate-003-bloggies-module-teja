import React from "react";
import VoteCreditPackCard from "../components/VoteCreditPackCard";

export default function VotePage() {
  // In a real app, userId would come from login/auth
  const userId = "user-001";
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
      <VoteCreditPackCard userId={userId} />
    </div>
  );
}