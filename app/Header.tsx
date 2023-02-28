import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" p-5 bg-slate-600">
      <Link href="/" className="p-2  bg-slate-800 text-emerald-500 rounded-lg">
        Home
      </Link>
    </header>
  );
}
