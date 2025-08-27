import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border">
      {/* Main Footer Content */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 lg:gap-0">
          {/* Logo Section - Responsive column spans */}
          <div className="px-4 md:px-8 lg:px-20 md:col-span-2 xl:col-span-6 pt-16 pb-8 lg:pb-0">
            <div className="h-28 w-42">
              <Image
                src="/logo-2.png"
                alt="Wyndham Soleil Logo"
                width={169}
                height={114}
                className="h-full w-auto"
              />
            </div>
          </div>

          {/* Navigation Links - Responsive column spans */}
          <div className="md:col-span-1 xl:col-span-3 px-4 md:px-8 lg:px-20 py-16 border-t md:border-t-0 md:border-l border-border">
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              <div>
                <h3 className="text-small text-secondary-light uppercase mb-4 md:mb-6 lg:mb-8">
                  Menu
                </h3>
                <nav className="space-y-2 md:space-y-3 lg:space-y-4">
                  <Link
                    href="/"
                    className="block text-lg md:text-xl lg:text-2xl xl:text-3xl font-butler text-accent-dark hover:text-primary transition-all duration-300 hover:translate-x-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block text-lg md:text-xl lg:text-2xl xl:text-3xl font-butler text-accent-dark hover:text-primary transition-all duration-300 hover:translate-x-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/accommodation"
                    className="block text-lg md:text-xl lg:text-2xl xl:text-3xl font-butler text-accent-dark hover:text-primary transition-all duration-300 hover:translate-x-2"
                  >
                    Accommodation
                  </Link>
                  <Link
                    href="/services"
                    className="block text-lg md:text-xl lg:text-2xl xl:text-3xl font-butler text-accent-dark hover:text-primary transition-all duration-300 hover:translate-x-2"
                  >
                    Service & Amenities
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Contact Information - Responsive column spans */}
          <div className="md:col-span-1 xl:col-span-3 px-4 md:px-8 lg:px-20 py-16 border-t md:border-t-0 md:border-l border-border">
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              <div>
                <h3 className="text-small text-secondary-light uppercase mb-4 md:mb-6 lg:mb-8">
                  Contact
                </h3>
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  <div className="text-body text-accent-dark">
                    <p>194 Vo Nguyen Giap, Phuoc My, Son Tra,</p>
                    <p>Da Nang, Vietnam</p>
                  </div>
                  <div className="text-body text-accent-dark">
                    <p>+84236 365 8386</p>
                  </div>
                  <div className="text-body text-accent-dark">
                    <p>soleil.hotel@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 lg:gap-0">
            {/* Copyright - Responsive column spans */}
            <div className="px-4 md:px-8 lg:px-20 md:col-span-2 xl:col-span-6 text-small text-secondary-light py-8 lg:py-12">
              © {currentYear} Teklabs. All rights reserved
            </div>

            {/* Social Links - Responsive column spans */}
            <div className="md:col-span-1 xl:col-span-3 px-4 md:px-8 lg:px-20 py-8 lg:py-12 border-t md:border-t-0 md:border-l border-border">
              <div className="flex gap-6 md:gap-8 lg:gap-12">
                <Link
                  href="#"
                  className="text-small text-secondary-light hover:text-primary transition-colors duration-200"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-small text-secondary-light hover:text-primary transition-colors duration-200"
                >
                  Facebook
                </Link>
              </div>
            </div>

            {/* Legal Links - Responsive column spans */}
            <div className="md:col-span-1 xl:col-span-3 px-4 md:px-8 lg:px-20 py-8 lg:py-12 border-t md:border-t-0 md:border-l border-border">
              <div className="flex gap-8 md:gap-12">
                <Link
                  href="#"
                  className="text-small text-secondary-light hover:text-primary transition-colors duration-200"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-small text-secondary-light hover:text-primary transition-colors duration-200"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
