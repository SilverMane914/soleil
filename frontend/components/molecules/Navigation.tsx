"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    // Set initial scroll position after mount
    if (typeof window !== "undefined") {
      handleScroll(); // Call immediately to set initial state
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/accommodation", label: "ACCOMMODATION" },
    { href: "/services", label: "SERVICE & AMENITIES" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Don't render navigation until component is mounted to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          : "bg-white/5 backdrop-blur-xl border-b border-white/30"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={closeMobileMenu}
            >
              <Image
                src={isScrolled ? "/logo-2.png" : "/logo-1.png"}
                alt="Wyndham Soleil Logo"
                width={240}
                height={80}
                className="h-16 md:h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 md:gap-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-figtree font-medium text-sm transition-colors duration-200 focus:outline-none ${
                    isScrolled
                      ? "text-[#906E31] hover:text-[#906E31]/80"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-200 ${
              isScrolled
                ? "text-[#1C1917] hover:text-[#906E31]"
                : "text-white hover:text-white/80"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="py-4 border-t border-white/20">
              <ul className="space-y-3 md:space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block font-figtree font-medium text-sm md:text-body transition-colors duration-200 focus:outline-none py-2 ${
                        isScrolled
                          ? pathname === item.href
                            ? "text-[#906E31]"
                            : "text-[#1C1917] hover:text-[#906E31]"
                          : pathname === item.href
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
