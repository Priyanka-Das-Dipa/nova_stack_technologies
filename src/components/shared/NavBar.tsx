"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow-md dark:bg-gray-900 dark:text-gray-100 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="NovaStack Technologies Logo"
              className="w-20 h-20"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 border-b-2 duration-200 ${
                    pathname === item.href
                      ? "text-violet-600 border-violet-600 font-bold"
                      : "border-transparent hover:border-violet-400 font-medium "
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex">
          {/* Menu Container */}
          <div className="bg-white dark:bg-gray-900 w-64 h-full p-6 shadow-lg animate-slideRight">
            {/* Close Button */}
            <button onClick={() => setOpen(false)} className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800 dark:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block text-lg  ${
                      pathname === item.href
                        ? "text-violet-600 font-bold"
                        : "text-gray-700 hover:text-violet-500 font-medium"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
