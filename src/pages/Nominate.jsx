import React from "react";
import PriorityNominationCard from "../components/PriorityNominationCard";

export default function NominatePage() {
  // In a real app, storyId would be dynamic
  const storyId = "example-story-id";
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
      <PriorityNominationCard storyId={storyId} />
    </div>
  );
}