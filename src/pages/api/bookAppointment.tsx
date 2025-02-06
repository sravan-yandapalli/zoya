import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

// Ensure environment variables are defined
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Missing required environment variables');
}

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

// Configure Nodemailer (Email)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export default async function bookAppointmentHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, reason, date, time } = req.body;

    // Validate the input data
    if (!name || !email || !phone || !reason || !date || !time) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Insert the appointment data into the database
        const [result] = await pool.execute(
            `INSERT INTO appointments (name, email, phone, reason, date, time) VALUES (?, ?, ?, ?, ?, ?)`,
            [name, email, phone, reason, date, time]
        );

        // Type casting the result to access 'affectedRows'
        const affectedRows = (result as mysql.ResultSetHeader).affectedRows;

        if (affectedRows === 0) {
            return res.status(500).json({ message: 'Failed to insert appointment into the database' }); // Return error response directly
        }

        // Send Email Confirmation
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Appointment Confirmation - Zoya Homeo Care',
            html: `
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to Zoya Homeo Care! Our team will confirm your appointment shortly.</p>
                <p><strong>Date:</strong> ${date} <br> <strong>Time:</strong> ${time}</p>
                <p>For urgent queries, call us at <strong>7075367929</strong>.</p>
                <p>Best regards,<br>Zoya Homeo Care</p>
            `,
        });

        // Success response
        return res.status(200).json({ message: 'Appointment booked successfully. Confirmation email sent.' });

    } catch (error: unknown) {
        console.error('Error:', error);

        if ((error as mysql.QueryError).code) {
            return res.status(500).json({ message: 'Database error occurred', error: (error as mysql.QueryError).message });
        } else if (error instanceof Error && error.message.includes('Email sending failed')) { // More specific check for Nodemailer errors
          return res.status(500).json({ message: 'Email sending failed', error: error.message });
        } else if (error instanceof Error && error.message.includes('Failed to insert appointment into the database')) {
            return res.status(500).json({ message: 'Failed to insert appointment into the database', error: error.message });
        }
        else if (error instanceof Error) {
            return res.status(500).json({ message: 'An unexpected error occurred', error: error.message });
        } else {
            return res.status(500).json({ message: 'An unexpected error occurred', error: 'Unknown error' });
        }
    }
}