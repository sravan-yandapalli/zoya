"use client";

import React, { JSX } from "react";
import Image from "next/image";
import "@/app/globals.css";

const InfoBlock = ({ title, content }: { title: string, content: JSX.Element | string }) => (
  <div className="flex flex-col items-start gap-2">
    <div className="text-purple-900 text-2xl font-semibold">{title}</div>
    <p className="text-purple-800 text-sm">{content}</p>
  </div>
);

const WorkingHours = () => {
  const hours = [
    { day: "Monday", time: "10:00 AM - 8:00 PM" },
    { day: "Tuesday", time: "10:00 AM - 8:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 8:00 PM" },
    { day: "Thursday", time: "10:00 AM - 8:00 PM" },
    { day: "Friday", time: "10:00 AM - 1:30 PM"}, // Special hours for Friday
    { day: "Saturday", time: "10:00 AM - 8:00 PM" },
    { day: "Sunday", time: "10:00 AM - 8:00 PM" } // Sunday is available
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
                  Shaik Afroz, 3rd floor Hno, 8-4-369/J/289/290,
                  <br />
                  NRR Puram Colony, opp HDFC ATM Road, Site-3,
                  <br />
                  Ayyappa Society to Borabanda Rd, Hyderabad,
                  <br />
                  Telangana 500018, India
                  <br />
                  <br />
                  <strong>New Patients Queries:</strong> 7075367929
                  <br />
                  <strong>Email:</strong> zoya@gmail.com
                </>
              }
            />
          </div>
          <div>
            <div className="text-2xl font-semibold">Working Time</div>
            <WorkingHours />
          </div>
          <div>
            <div className="text-purple-900 text-xl mb-4">Contact Us</div>
            <div className="text-purple-800 text-sm">
              <strong>Existing Patients Queries and Follow Up:<br /><br /></strong>+91 7075367929 <br /> (8AM to 10PM)
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
