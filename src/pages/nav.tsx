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
import AuthModal from "@/components/AuthModal"; // Import AuthModal
import "@/app/globals.css";

const Nav: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div>
      <div className="flex w-full h-[111px] items-center justify-between px-[50px] py-2.5 bg-[#17616e]">
        <Image alt="Logo" src="/assets/corosole/logo-name.svg" width={300} height={250} />

        {/* Navbar Links (Desktop) */}
        <div className="hidden lg:flex items-center justify-center gap-[30px]">
          <Link href="/"><Home className="!h-[17px] !w-[47px]" property1="default" /></Link>
          <Link href="/#hero"><Services className="!h-[17px] !w-[73px]" property1="default" /></Link>
          <Link href="/#dis"><About className="!h-[17px] !w-[55px]" property1="default" /></Link>
          <Link href="/#fot"><Contact className="!h-[17px] !w-[77px]" property1="default" /></Link>
        </div>

        {/* Login & Booking Buttons */}
        <div className="flex items-center gap-10">
          <button onClick={() => setIsAuthModalOpen(true)}>
            <Group className="cursor-pointer" property1="default" />
          </button>
          <Link href="/appointments">
            <Group1 className="!bg-[#f9c149]" property1="default" />
          </Link>
        </div>
      </div>

      {/* Login Modal */}
      {isAuthModalOpen && <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />}
    </div>
  );
};

export default Nav;
