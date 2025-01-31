import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, reason, date, time } = req.body;

    if (!name || !email || !phone || !reason || !date || !time) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        console.log("Connecting to DB...");
        console.log("DB_HOST:", process.env.DB_HOST);
        console.log("DB_USER:", process.env.DB_USER);
        
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
    
        console.log("Connected to DB");
        
        const query = `
            INSERT INTO appointments (name, email, phone, reason, date, time)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        await connection.execute(query, [name, email, phone, reason, date, time]);
        await connection.end();
    
        return res.status(200).json({ message: 'Appointment booked successfully' });
    } catch (error: any) {
        console.error('Database Connection Error:', error);
        return res.status(500).json({ message: 'Database Connection Failed', error: error.toString() });
    }
    
}
