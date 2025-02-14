"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";

export function LoginButton() {
  return (
    <>
      <Link href="/login">
        <button className="flex items-center justify-center gap-2 py-3 px-5 space-x-2 rounded-2xl text-sm font-medium text-black 
          btn-gradient-yellow">
          <LogIn size={20} />
          ENTRAR
        </button>
      </Link>
    </>
  );
}
