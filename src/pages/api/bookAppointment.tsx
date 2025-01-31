import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, reason, date, time } = req.body;

    if (!name || !email || !phone || !reason || !date || !time) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Using the connection pool to execute queries
        const query = `
            INSERT INTO appointments (name, email, phone, reason, date, time)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [rows] = await pool.execute(query, [name, email, phone, reason, date, time]);

        return res.status(200).json({ message: 'Appointment booked successfully' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Database Connection Error:', error.message);
            return res.status(500).json({ message: 'Database Connection Failed', error: error.message });
        }
        return res.status(500).json({ message: 'An unknown error occurred' });
    }
}
