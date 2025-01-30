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
