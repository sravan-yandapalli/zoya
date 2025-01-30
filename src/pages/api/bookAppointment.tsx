import { NextApiRequest, NextApiResponse } from 'next';

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  date: string;
  time: string;
}

const bookAppointment = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, phone, reason, date, time }: AppointmentData = req.body;

    // Here, you can add your logic to store the appointment data
    // Example: Save to a database or send an email

    try {
      // Assuming you're using a database like MySQL, MongoDB, or any other
      // const appointment = await saveAppointmentToDatabase({ name, email, phone, reason, date, time });

      // For now, just log the appointment data
      console.log('New appointment:', { name, email, phone, reason, date, time });

      // Send a response indicating success
      return res.status(200).json({ message: 'Appointment booked successfully!' });
    } catch (error) {
      console.error('Error booking appointment:', error);
      return res.status(500).json({ message: 'Failed to book appointment. Please try again later.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default bookAppointment;
