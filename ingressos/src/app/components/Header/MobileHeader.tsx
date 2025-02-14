"use client";

import Link from "next/link";

interface MobileHeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileHeader({ isOpen, onClose }: MobileHeaderProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[12vh] left-0 right-0 bg-sky-600 shadow-lg min-h-screen">
      <div className="flex flex-col p-4 space-y-6">
        <Link
          href="/eventos"
          className="text-white hover:text-yellow-400 transition-colors text-lg font-medium"
          onClick={onClose}
        >
          Eventos
        </Link>
        <Link
          href="/locais"
          className="text-white hover:text-yellow-400 transition-colors text-lg font-medium"
          onClick={onClose}
        >
          Locais
        </Link>
        <Link
          href="/ingressos"
          className="text-white hover:text-yellow-400 transition-colors text-lg font-medium"
          onClick={onClose}
        >
          Meus ingressos
        </Link>
      </div>
    </div>
  );
}
