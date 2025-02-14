"use client";
import Link from "next/link";

export function DesktopHeader() {


  return (
    <div className="text-neutral-600 dark:text-neutral-400 hidden md:flex gap-10 items-center">
      <Link
        href="/sobre"
        className="hover:text-yellow-400 transition-colors whitespace-nowrap text-lg"
      >
        Sobre
      </Link>

      <Link
        href="/eventos"
        className="hover:text-yellow-400 transition-colors whitespace-nowrap text-lg"
      >
        Eventos
      </Link>

      <Link
        href="/locais"
        className="hover:text-yellow-400 transition-colors whitespace-nowrap text-lg"
      >
        Locais
      </Link>
        <>
          <Link
            href="/ingressos"
            className="hover:text-yellow-400 transition-colors whitespace-nowrap text-lg"
          >
            Meus ingressos
          </Link>
        </>
    </div>
  );
}
