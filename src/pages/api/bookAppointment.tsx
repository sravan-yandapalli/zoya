import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "appointments";

// API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Extract data from the request body
    const { name, email, phone, reason, date, time } = req.body;

    // Validation checks
    if (!name || !email || !phone || !reason || !date || !time) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create new appointment object
    const newItem = {
      id: uuidv4(),
      name,
      email,
      phone,
      reason,
      date,
      time,
      createdAt: new Date().toISOString(),
    };

    // Insert appointment data into DynamoDB
    await dynamoDB.put({
      TableName: TABLE_NAME,
      Item: newItem,
    }).promise();

    // Return a success response
    return res.status(200).json({ message: "Appointment booked successfully!", appointment: newItem });
  } catch (error) {
    console.error("Error storing appointment:", error);
    return res.status(500).json({ message: "Error storing appointment." });
  }
}
