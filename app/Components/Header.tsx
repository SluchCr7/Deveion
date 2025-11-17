"use client";

import React, { useState } from "react";
import { navLinks } from "../utils/Data";
import { MdElectricBolt } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 sm:p-5">
          {/* Logo */}
          <h1 className="text-2xl font-bold cursor-pointer select-none">Deveion</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-base hover:text-red-500 transition-colors duration-0"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 bg-foreground text-background rounded-full px-4 py-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
              <MdElectricBolt className="text-xl" />
              <span>Create Account</span>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden focus:outline-none"
              aria-label="Open Menu"
            >
              <CiMenuFries className="text-3xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
