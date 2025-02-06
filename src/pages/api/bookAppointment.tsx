import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

// Ensure environment variables exist
const requiredEnv = [
  "DB_HOST",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
  "EMAIL_USER",
  "EMAIL_PASS",
];
requiredEnv.forEach((envVar) => {
  if (!process.env[envVar]) throw new Error(`Missing environment variable: ${envVar}`);
});

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function bookAppointmentHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, reason, date, time } = req.body;
  if (!name || !email || !phone || !reason || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Insert into DB
    const [result] = await pool.execute(
      `INSERT INTO appointments (name, email, phone, reason, date, time) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone, reason, date, time]
    );

    // Send email
    await transporter.sendMail({
      from: `"ZOYA Homeo Care" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Appointment Confirmation",
      text: `Dear ${name},\n\nYour appointment for ${reason} has been booked for ${date} at ${time}.`,
    });

    res.status(200).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
