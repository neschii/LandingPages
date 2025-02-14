"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl md:text-3xl font-bold text-black dark:text-neutral-300"
    >
      #Go<span className="text-yellow-400">FEST</span>
    </Link>
  );
}
