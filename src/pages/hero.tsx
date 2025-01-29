"user client";
import React from "react";
import Link from "next/link";
import { Group } from "@/components/hero/Group";
import "@/app/globals.css";

const Desktop = () => {
    return (
        <div className="bg-white flex justify-center w-full px-4">
            <div className="bg-white max-w-screen-xl w-full h-auto">
                <div className="relative min-h-screen bg-[#d9d9d9] flex flex-col items-center">
                    <div className="flex flex-col items-center text-center max-w-3xl mt-10 px-6">
                        <h1 className="text-black text-4xl md:text-6xl font-bold">ZOYA HOMEO CARE</h1>
                        <img className="w-full max-w-md mt-4" src="/assets/hero/hero_image.svg" alt="Zoya Homeo Care" />
                        <p className="text-[#716f6f] text-base md:text-lg font-bold mt-4 leading-relaxed">
                            At Zoya, we are committed to providing holistic homeopathic care that addresses the root cause of your health concerns.
                            Experience the power of nature in restoring balance to your mind and body.
                        </p>
                        <Link href="/appointments" legacyBehavior><a><Group className="mt-6 !bg-[#af89e4]" property1="default" /></a></Link>
                    </div>
                    <div className="relative w-full max-w-screen-lg bg-[#af89e4] rounded-xl px-6 py-10 mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                            <div className="flex flex-col items-center text-center max-w-xs">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                    <img className="w-16 h-16" src="/assets/hero/1_img.svg" alt="Our Services" />
                                </div>
                                <h3 className="text-white text-xl font-bold mt-4">OUR SERVICES</h3>
                                <p className="text-[#5b5a5a] text-base font-bold mt-2">
                                    Personalized homeopathic care for acute and chronic conditions, focusing on holistic healing and lasting wellness.
                                </p>
                                <button className="text-white text-xs font-bold mt-4">READ MORE</button>
                            </div>
                            <div className="flex flex-col items-center text-center max-w-xs">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                    <img className="w-16 h-16" src="/assets/hero/2_img.svg" alt="Appointments & Access" />
                                </div>
                                <h3 className="text-white text-xl font-bold mt-4">APPOINTMENTS & ACCESS</h3>
                                <p className="text-[#5b5a5a] text-base font-bold mt-2">
                                    Booking an appointment is simple and convenient. Access expert homeopathic care in-clinic or online.
                                </p>
                                <button className="text-white text-xs font-bold mt-4">READ MORE</button>
                            </div>
                            <div className="flex flex-col items-center text-center max-w-xs">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                    <img className="w-16 h-16" src="/assets/hero/3_img.svg" alt="Medication" />
                                </div>
                                <h3 className="text-white text-xl font-bold mt-4">MEDICATION</h3>
                                <p className="text-[#5b5a5a] text-base font-bold mt-2">
                                    Our homeopathic medications are natural, safe, and free from side effects, designed to stimulate your body’s healing process.
                                </p>
                                <button className="text-white text-xs font-bold mt-4">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desktop;
