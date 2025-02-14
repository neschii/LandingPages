"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { LoginButton } from "./LoginButton";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-[1000] ">
      <nav className="container mx-auto px-4 h-[12vh]">
        <div className="flex items-center justify-between h-full">
          <Logo />

          <div className="flex-1 flex justify-center">
            <DesktopHeader />
          </div>
          <button
            className="md:hidden text-yellow-400 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <MobileHeader
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
          <div className="flex items-center gap-4">
            <LoginButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
