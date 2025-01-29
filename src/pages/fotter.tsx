"use client";

import React, { JSX } from "react";
import "@/app/globals.css";

const InfoBlock = ({ title, content }: { title: string, content: JSX.Element | string }) => (
  <div className="flex flex-col items-start gap-2">
    <div className="text-white text-2xl font-normal">{title}</div>
    <p className="text-white text-sm">{content}</p>
  </div>
);

const WorkingHours = () => (
  <div className="flex flex-col">
    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
      <div key={day} className="text-white text-sm">
        <span>{day} - </span>
        <span>10:00 AM - 8:00 PM</span>
      </div>
    ))}
  </div>
);

const FaSolidPhoneAlt = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="white"
    className={`w-6 h-6 ${className}`}
  >
    <path d="M493.4 24.6l-104-24c-11.3-2.6-23.1 3.3-28.2 14.1l-48 104c-4.3 9.3-2.4 20.3 4.6 27.6l60.6 63.5c-36.2 76.5-99.2 139.5-175.7 175.7l-63.5-60.6c-7.3-7-18.3-8.9-27.6-4.6l-104 48c-10.8 5-16.7 16.9-14.1 28.2l24 104c2.6 11.3 13.1 19.4 24.6 19.4 256.5 0 464-207.5 464-464 0-11.5-8.1-22-19.4-24.6z" />
  </svg>
);

const TablerMail = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-6 h-6"
  >
    <path d="M12 13.5l-11-7v11a2 2 0 002 2h18a2 2 0 002-2v-11l-11 7zm11-9.5h-22v2l11 7 11-7v-2z" />
  </svg>
);

const Footer = (): JSX.Element => {
  return (
    <div className="bg-[#3a3a3a] flex justify-center w-full py-16">
      <div className="w-full max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
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
            <div className="text-2xl font-normal">Working Time</div>
            <WorkingHours />
          </div>
          <div>
            <div className="text-white text-xl mb-4">Contact Us</div>
            <div className="text-white text-sm">
              <strong>Existing Patients Queries and Follow Up:<br/><br/></strong> 7075367929 <br/>(8AM to 10PM)
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-white text-sm">
          <p>&copy; 2025 Chikkas Crafts. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
