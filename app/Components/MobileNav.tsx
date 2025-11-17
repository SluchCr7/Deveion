"use client";

import React from "react";
import { navLinks } from "../utils/Data";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const MobileNav = ({ open, setOpen } : { open: boolean; setOpen: any }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 w-72 h-full bg-background shadow-xl z-50 p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-3xl"
            aria-label="Close Menu"
          >
            <IoClose />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-5">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-lg hover:text-primary transition"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <button className="mt-10 w-full py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition">
          Create Account
        </button>
      </aside>
    </>
  );
};

export default MobileNav;
