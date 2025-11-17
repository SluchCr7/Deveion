import React from 'react';
import { socialIcons } from '../utils/Data';

interface FooterProps {
  setIsContactOpen: (value: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setIsContactOpen }) => {
  return (
    <footer className="w-full border-t bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-6">
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:scale-110 transition text-neutral-700 dark:text-neutral-200 hover:text-blue-600"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsContactOpen(true)}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;