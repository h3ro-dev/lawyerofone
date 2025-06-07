"use client";

import { useState } from "react";

interface HeaderProps {
  onGetStarted?: () => void;
}

export default function Header({ onGetStarted }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#4169E1]">Lawyer of One</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#4169E1] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#4169E1] transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#4169E1] transition-colors">
              About
            </a>
            <button 
              onClick={onGetStarted}
              className="btn-primary"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-[#4169E1] transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#4169E1] transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#4169E1] transition-colors">
                About
              </a>
              <button 
                onClick={onGetStarted}
                className="btn-primary text-left"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 