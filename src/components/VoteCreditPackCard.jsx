import React, { useState } from "react";
import { createVotePackSession, getVotePackStatus } from "../api/votePack";
import Card from "./UI/Card";
import Button from "./UI/Button";
import Loader from "./UI/Loader";

export default function VoteCreditPackCard({ userId }) {
  const [credits, setCredits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingCredits, setLoadingCredits] = useState(false);
  const [error, setError] = useState("");

  const handleBuyVotes = async () => {
    setLoading(true);
    setError("");
    try {
      await createVotePackSession(5);
      setLoadingCredits(true);
      const status = await getVotePackStatus(userId);
      setCredits(status.credits);
      setLoadingCredits(false);
    } catch (e) {
      setError("Purchase failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Card>
      <h2>Buy Vote Credits</h2>
      <p>5 Votes for <span style={{ color: "#FFC107", fontWeight: "bold" }}>$2</span></p>
      <Button
        onClick={handleBuyVotes}
        disabled={loading}
        styleType="primary"
      >
        {loading ? <Loader small /> : "Buy Vote Pack"}
      </Button>
      {loadingCredits ? <Loader small /> : <p>Your Credits: {credits}</p>}
      {error && <p style={{ color: "#f44336" }}>{error}</p>}
    </Card>
  );
}