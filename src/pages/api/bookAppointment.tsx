import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

// Configure AWS SDK
AWS.config.update({
  region: "your-region",
  accessKeyId: "your-access-key-id",
  secretAccessKey: "your-secret-access-key",
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, phone, reason, date, time } = req.body;

    const params = {
      TableName: "Appointments",
      Item: {
        id: Date.now().toString(),
        name,
        email,
        phone,
        reason,
        date,
        time,
      },
    };

    try {
      await dynamoDB.put(params).promise();
      res.status(200).json({ message: "Appointment booked successfully!" });
    } catch (error) {
      console.error("Error saving appointment:", error);
      res.status(500).json({ error: "Failed to save appointment." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
