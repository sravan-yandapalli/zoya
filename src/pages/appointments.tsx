import { useState } from 'react';
import type { NextPage } from 'next';
import Image from "next/image";
import "../app/globals.css";
import "../app/globals.css";
import Header from '@/pages/nav'
import Link from 'next/link';

const Desktop: NextPage = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    phone: "+91",
    reason: "",
    date: "",
    time: "",
  });

  interface Errors {
    name?: string;
    email?: string;
    phone?: string;
    reason?: string;
    date?: string;
    time?: string;
  }
  
  const [errors, setErrors] = useState<Errors>({});
  const [showPopup, setShowPopup] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!appointmentData.name.trim()) newErrors.name = "Name is required.";
    if (!appointmentData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appointmentData.email)) newErrors.email = "Valid email is required.";
    if (!appointmentData.phone.trim() || !/^\+91[0-9]{10}$/.test(appointmentData.phone)) newErrors.phone = "Enter a valid 10-digit phone number starting with +91.";
    if (!appointmentData.reason.trim()) newErrors.reason = "Reason for visit is required.";
    if (!appointmentData.date) newErrors.date = "Date is required.";
    if (!appointmentData.time) newErrors.time = "Time is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch("/api/bookAppointment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        });
  
        if (response.ok) {
          setShowPopup(true); // Optional: Show a popup confirmation
          setTimeout(() => {
            window.location.href = "/Home"; // Redirect to homepage
          }, 2000); // Delay for user to see the confirmation
        } else {
          alert("Failed to book appointment. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };
  
  const closePopup = () => {
    setShowPopup(false);
    setAppointmentData({
      name: "",
      email: "",
      phone: "+91",
      reason: "",
      date: "",
      time: "",
    });
  };

  return (
    <>
      <div><Header /></div>
      <div className="w-full h-full  min-h-screen bg-lavender-300 flex flex-col lg:flex-row items-center lg:items-center justify-center px-4 lg:px-12 py-8">
        {/* Background Content Section */}
        <div className="hidden lg:flex flex-col items-center space-y-6">
          <div className="text-[32px] font-itim text-dimgray-100 text-center max-w-[441px]">
            "Take the First Step Toward Natural Healing! Book your consultation with our expert homeopathy practitioners today."
          </div>
          <Image
            className="h-auto w-[246px]"
            width={246}
            height={108}
            alt="Arrow Design"
            src="/assets/Arrow-design.svg"
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[600px] p-8 bg-white shadow-lg rounded-lg animate__animated animate__fadeIn lg:mr-8"
        >
          <div className="text-center text-4xl font-adlam-display text-mediumslateblue mb-6">
            ZOYA Homeo Care
          </div>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={appointmentData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 text-black border-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-mediumslateblue`}
              placeholder="Your Name"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={appointmentData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 text-black border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-mediumslateblue`}
              placeholder="Your Email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="phone"
              value={appointmentData.phone}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 text-black border-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-mediumslateblue`}
              placeholder="Your Phone Number"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <input
              type="text"
              name="reason"
              value={appointmentData.reason}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 text-black border-2 ${errors.reason ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-mediumslateblue`}
              placeholder="Reason for Visit"
              required
            />
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}

            <input
              type="date"
              name="date"
              value={appointmentData.date}
              onChange={handleChange}
              min={today}
              className={`w-full p-3 rounded-lg bg-gray-100 text-black border-2 ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-mediumslateblue`}
              required
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

            <select
              name="time"
              value={appointmentData.time}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 text-black border-2 ${errors.time ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-mediumslateblue`}
              required
            >
              <option value="">Select Time</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </select>
            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}

            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-mediumslateblue text-white text-xl font-semibold hover:bg-mediumpurple transition duration-300"
            >
              Book Appointment
            </button>
          </div>
        </form>

        {/* Confirmation Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
              <h2 className="text-2xl font-bold text-mediumslateblue mb-4">Appointment Booked!</h2>
              <p className="text-gray-700 mb-4">Thank you for booking your appointment. We will contact you shortly.</p>
              <button
                onClick={closePopup}
                className="px-4 py-2 rounded-lg bg-mediumslateblue text-white hover:bg-mediumpurple transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Desktop;
