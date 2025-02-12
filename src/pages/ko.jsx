"use client";

import { useState } from "react";
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

export default function KoPage() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use process.env to access environment variables
  const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;
  const region = process.env.NEXT_PUBLIC_AWS_REGION;

  console.log("AWS Credentials:", { accessKeyId, secretAccessKey, region });

  async function listTables() {
    setLoading(true);
    setError(null);

    if (!accessKeyId || !secretAccessKey || !region) {
      console.error("AWS Credentials or Region are missing!");
      setError("AWS Credentials or Region are missing.");
      setLoading(false);
      return;
    }

    const dynamoDBClient = new DynamoDBClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    try {
      const command = new ListTablesCommand({});
      const response = await dynamoDBClient.send(command);
      setTables(response.TableNames || []);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>DynamoDB Tables</h1>
      <button
        onClick={listTables}
        disabled={loading}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        {loading ? "Loading..." : "List Tables"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul>
        {tables.length > 0 ? (
          tables.map((table, index) => <li key={index}>{table}</li>)
        ) : (
          <p>No tables found</p>
        )}
      </ul>
    </div>
  );
}
