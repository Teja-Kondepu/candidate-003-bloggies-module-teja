import React, { useState } from "react";
import { createPriorityNomination } from "../api/priorityNominate";
import Card from "./UI/Card";
import Button from "./UI/Button";
import Loader from "./UI/Loader";

export default function PriorityNominationCard({ storyId }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");

  const handlePriorityNomination = async () => {
    setLoading(true);
    setError("");
    try {
      await createPriorityNomination(email, storyId);
      setActive(true);
    } catch (e) {
      setError("Payment failed. Please try again.");
    }
    setLoading(false);
  };

  if (active) {
    return (
      <Card>
        <h2>✅ Priority Active</h2>
        <p>Your nomination has been prioritized. Thank you!</p>
      </Card>
    );
  }

  return (
    <Card>
      <h2>Priority Nomination</h2>
      <p>Boost your nomination for <span style={{ color: "#FFC107", fontWeight: "bold" }}>$5</span>. Get noticed by the judges!</p>
      <input
        type="email"
        placeholder="Your email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          borderRadius: "7px",
          border: "1px solid #ccc",
          width: "100%"
        }}
      />
      <Button
        onClick={handlePriorityNomination}
        disabled={loading || !email}
        styleType="primary"
      >
        {loading ? <Loader small /> : "Priority Nominate ($5)"}
      </Button>
      {error && <p style={{ color: "#f44336" }}>{error}</p>}
    </Card>
  );
}