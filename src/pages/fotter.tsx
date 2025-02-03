"use client";

import React, { JSX } from "react";
import Image from "next/image";
import "@/app/globals.css";

const InfoBlock = ({ title, content }: { title: string; content: JSX.Element | string }) => (
  <div className="flex flex-col items-start gap-2">
    <div className="text-purple-900 text-2xl font-semibold">{title}</div>
    <p className="text-purple-800 text-sm">{content}</p>
  </div>
);

const WorkingHours = () => {
  const hours = [
    { day: "Everyday", time: "10:00 AM - 8:00 PM" },
    { day: "Friday", time: "10:00 AM - 1:30 PM" }, // Special hours for Friday
  ];

  return (
    <div className="flex flex-col">
      {hours.map(({ day, time }) => (
        <div key={day} className="text-purple-800 text-sm">
          <span>{day} - </span>
          <span>{time}</span>
        </div>
      ))}
    </div>
  );
};

const Footer = (): JSX.Element => {
  return (
    <div id="fot" className="relative flex justify-center w-full py-16 px-10 bg-black-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="assets/fotter/bg.jpg" // Replace with your actual image path
          alt="Background"
          layout="fill"
          style={{ objectFit: "cover" }}
          className="opacity-20"
        />
      </div>
      <div className="w-full max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-purple-900">
          <div>
            <InfoBlock
              title="Corporate Address"
              content={
                <>
                  Chikkas Crafts
                  <br />
                  Shaik Afroz, Flat No: 303, 3rd Floor, 8-4-369/J/289/290,
                  <br />
                  NRR Puram Colony, Opp HDFC ATM Road, Site-3,
                  <br />
                  Ayyappa Society to Borabanda Rd, Hyderabad,
                  <br />
                  Telangana 500018, India
                  <br />
                  <br />
                  <strong>New Patients Queries:</strong> +91 7075367929
                  <br />
                  <strong>Email:</strong> zoyahomeocare@gmail.com
                </>
              }
            />
            {/* Embedded Google Maps */}
            <div className="mt-4">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31218.702158929517!2d78.4039814!3d17.4506686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzAyLjQiTiA3OMKwMjQnMjMuNiJF!5e0!3m2!1sen!2sin!4v1693924972845"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold">Working Time</div>
            <WorkingHours />
          </div>
          <div>
            <div className="text-purple-900 text-xl mb-4">Contact Us</div>
            <div className="text-purple-800 text-sm">
              <strong>Existing Patients Queries and Follow Up:<br /><br /></strong>+91 7075367929 <br /> (10AM to 8PM) clinic Timings
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-purple-900 text-sm">
          <p>&copy; 2025 Zoya Homeo Care. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
