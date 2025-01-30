"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "@/components/main/home";
import { About } from "@/components/main/about";
import { Contact } from "@/components/main/contact";
import { Services } from "@/components/main/service";
import { Group1 } from "@/components/main/book";
import { Group } from "@/components/main/search";
import AuthModal from "@/components/AuthModal"; 
import { Menu, X } from "lucide-react"; // Import icons for menu toggle
import "@/app/globals.css";

const Nav: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#17616e]">
      <div className="flex h-[70px] items-center justify-between px-6 md:px-[50px] py-2.5">
        {/* Logo */}
        <Image alt="Logo" src="/assets/corosole/logo-name.svg" width={200} height={50} />

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/"><Home className="!h-[17px] !w-[47px]" property1="default" /></Link>
          <Link href="/#hero"><Services className="!h-[17px] !w-[73px]" property1="default" /></Link>
          <Link href="/#dis"><About className="!h-[17px] !w-[55px]" property1="default" /></Link>
          <Link href="/#fot"><Contact className="!h-[17px] !w-[77px]" property1="default" /></Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={30} className="text-white" /> : <Menu size={30} className="text-white" />}
        </button>

        {/* Login & Booking Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => setIsAuthModalOpen(true)}>
            <Group className="cursor-pointer" property1="default" />
          </button>
          <Link href="/appointments">
            <Group1 className="!bg-[#f9c149]" property1="default" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-[#17616e] py-4 space-y-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/#hero" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/#dis" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/#fot" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <button onClick={() => { setIsAuthModalOpen(true); setIsMobileMenuOpen(false); }} className="text-white">
            Login
          </button>
          <Link href="/appointments" className="bg-[#f9c149] px-4 py-2 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
            Book Now
          </Link>
        </div>
      )}

      {/* Login Modal */}
      {isAuthModalOpen && <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />}
    </div>
  );
};

export default Nav;
