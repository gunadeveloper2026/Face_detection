"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        Face Recognition System
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/register">Register</Link>
        <Link href="/recognition">Recognition</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/attendance">Attendance</Link>
      </div>
    </nav>
  );
}