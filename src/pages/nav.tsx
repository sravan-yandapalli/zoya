'use client';
import React, { useState, JSX } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { About } from "@/components/main/about";
import { Contact } from "@/components/main/contact";
import { Home } from "@/components/main/home";
import { Group } from "@/components/main/search";
import { Services } from "@/components/main/service";
import { Group1 } from "@/components/main/book";
import "@/app/globals.css";

const Nav = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="flex w-full h-[111px] items-center justify-between px-[50px] py-2.5 bg-[#17616e]">
                <Image
                    className="flex-shrink-0"
                    alt="Logo name"
                    src="/assets/corosole/logo-name.svg" // Adjust path as needed
                    width={300} // Adjust width as needed
                    height={250} // Adjust height as needed
                />

                {/* Navbar Links (Desktop) */}
                <div className="hidden lg:flex items-center justify-center gap-[30px]">
                    <Link href="/"><Home className="!ml-[-1.50px] !h-[17px] !w-[47px]" property1="default" /></Link>
                    <Link href="/#hero" ><Services className="!h-[17px] !w-[73px]" property1="default" /></Link>
                    <Link href="/#dis"><About className="!h-[17px] !w-[55px]" property1="default" /></Link>
                    <Link href="/#fot"><Contact className="!h-[17px] !mr-[-1.50px] !w-[77px]" property1="default" /></Link>
                </div>

                {/* Group and Group1 (Desktop) */}
                <div className="flex items-center gap-10">
                    <div className="hidden lg:flex flex-col w-[95px] gap-2.5">
                        <Link href="/login"><Group className="!self-stretch !h-9 !w-full" property1="default" /></Link>
                    </div>

                    <div className="hidden lg:flex w-[153px] p-2.5 gap-2.5">
                        <Link href="/appointments"><Group1 className="!flex-1 !grow !bg-[#f9c149]" property1="default" /></Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden flex items-center gap-4">
                    <button onClick={toggleMenu} className="text-white">
                        {/* Hamburger Icon */}
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`lg:hidden fixed inset-0 bg-[#17616e] z-50 transform transition-transform duration-300 ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col items-center justify-center gap-10 p-20">
                    <Link href="/"><Home className="!ml-[-1.50px] !h-[17px] !w-[47px]" property1="default" /></Link>
                    <Link href="/hero" ><Services className="!h-[17px] !w-[73px]" property1="default" /></Link>
                    <Link href="/disease"><About className="!h-[17px] !w-[55px]" property1="default" /></Link>
                    <Link href="/"><Contact className="!h-[17px] !mr-[-1.50px] !w-[77px]" property1="default" /></Link>
                    
                    <Link href="/login"><Group className="!self-stretch !h-9 !w-full" property1="default" /></Link>
                    <Link href="/appointments"><Group1 className="!flex-1 !grow !bg-[#f9c149]" property1="default" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
