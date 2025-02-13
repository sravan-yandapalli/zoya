import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "appointments";

// Create a transporter for sending emails using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Define the appointment type
interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  date: string;
  time: string;
  createdAt: string;
}

// Function to send email
const sendConfirmationEmail = async (userEmail: string, appointment: Appointment) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Appointment Confirmation",
    text: `Dear ${appointment.name},\n\nYour appointment has been booked successfully.\n\nDetails:\nName: ${appointment.name}\nEmail: ${appointment.email}\nPhone: ${appointment.phone}\nReason: ${appointment.reason}\nDate: ${appointment.date}\nTime: ${appointment.time}\n\nThank you for fast appointment contact +91 .\n\nZ to A Treatment With Zero Side Effects,\nZOYA HOMEO CARE`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

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
    const newItem: Appointment = {
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

    // Send email confirmation to the user
    await sendConfirmationEmail(email, newItem);

    // Return a success response
    return res.status(200).json({ message: "Appointment booked successfully!", appointment: newItem });
  } catch (error) {
    console.error("Error storing appointment:", error);
    return res.status(500).json({ message: "Error storing appointment." });
  }
}
