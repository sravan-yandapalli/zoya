"use client";
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

// Database connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
});

// Configure Nodemailer (Email)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// WhatsApp API Details (Meta)
const WHATSAPP_API_URL = 'https://graph.facebook.com/v18.0';
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, reason, date, time } = req.body;

    if (!name || !email || !phone || !reason || !date || !time) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Insert into database
        await pool.execute(
            `INSERT INTO appointments (name, email, phone, reason, date, time) VALUES (?, ?, ?, ?, ?, ?)`,
            [name, email, phone, reason, date, time]
        );

        // Send WhatsApp Message
        const whatsappMessage = {
            messaging_product: 'whatsapp',
            to: phone,
            type: 'text',
            text: { body: `Hello ${name},\n\nThank you for reaching out to Zoya Homeo Care! Our team will get back to you shortly to confirm your booking.\n\nIf you need urgent assistance, call us at 7075367929.` },
        };

        await axios.post(`${WHATSAPP_API_URL}/${WHATSAPP_PHONE_NUMBER_ID}/messages`, whatsappMessage, {
            headers: {
                Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        // Send Email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Appointment Confirmation - Zoya Homeo Care',
            html: `<p>Dear ${name},</p><p>Thank you for reaching out to Zoya Homeo Care!</p><p>We will get back to you shortly.</p>`,
        });

        return res.status(200).json({ message: 'Appointment booked. Email & WhatsApp message sent.' });
    } catch (error: unknown) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'An error occurred', error: error instanceof Error ? error.message : 'Unknown error' });
     }
}
