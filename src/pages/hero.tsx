"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Group } from "@/components/hero/Group";
import "@/app/globals.css";

const Desktop = () => {
    return (
        <div id='hero' className="bg-white flex justify-center w-full px-4">
            <div className="bg-white max-w-screen-xl w-full h-auto">
                <div className="relative min-h-screen bg-[#ffffff] flex flex-col items-center mb-40">
                    <div className="flex flex-col items-center text-center max-w-3xl mt-10 px-6">
                        <h1 className="text-black text-4xl md:text-6xl font-bold">ZOYA HOMEO CARE</h1>
                        <Image 
                            src="/assets/hero/hero_image.svg" 
                            alt="Zoya Homeo Care" 
                            width={400} 
                            height={300} 
                            priority 
                            className="w-full max-w-md mt-4"
                        />
                        <p className="text-[#716f6f] text-base md:text-lg font-bold mt-4 leading-relaxed">
                            At Zoya, we are committed to providing holistic homeopathic care that addresses the root cause of your health concerns.
                            Experience the power of nature in restoring balance to your mind and body.
                        </p>
                        <Link href="/appointments" legacyBehavior>
                            <a><Group className="mt-6 !bg-[#af89e4]" property1="default" /></a>
                        </Link>
                    </div>
                    <div className="relative w-full max-w-screen-lg bg-[#af89e4] rounded-xl px-6 py-10 mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                            {[
                                { src: "/assets/hero/1_img.svg", title: "OUR SERVICES", text: "Personalized homeopathic care for acute and chronic conditions, focusing on holistic healing and lasting wellness." },
                                { src: "/assets/hero/2_img.svg", title: "APPOINTMENTS & ACCESS", text: "Booking an appointment is simple and convenient. Access expert homeopathic care in-clinic or online." },
                                { src: "/assets/hero/3_img.svg", title: "MEDICATION", text: "Our homeopathic medications are natural, safe, and free from side effects, designed to stimulate your body’s healing process." }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center max-w-xs">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                        <Image 
                                            src={item.src} 
                                            alt={item.title} 
                                            width={64} 
                                            height={64} 
                                            className="w-16 h-16"
                                        />
                                    </div>
                                    <h3 className="text-white text-xl font-bold mt-4">{item.title}</h3>
                                    <p className="text-[#5b5a5a] text-base font-bold mt-2">{item.text}</p>
                                    <button className="text-white text-xs font-bold mt-4">READ MORE</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desktop;
