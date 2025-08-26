import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border">
      {/* Main Footer Content */}
      <div className="border-b border-border">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Logo */}
            <div className="flex flex-col">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/logo-2.png"
                  alt="Wyndham Soleil Logo"
                  width={169}
                  height={114}
                  className="h-28 w-auto"
                />
              </Link>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col">
              <h3 className="text-small text-secondary-light uppercase mb-12">
                Menu
              </h3>
              <div className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className="font-butler text-[40px] leading-[1.6] tracking-[-0.02em] text-accent-dark hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="font-butler text-[40px] leading-[1.6] tracking-[-0.02em] text-accent-dark hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/accommodation"
                  className="font-butler text-[40px] leading-[1.6] text-accent-dark hover:text-primary transition-colors"
                >
                  Accommodation
                </Link>
                <Link
                  href="/services"
                  className="font-butler text-[40px] leading-[1.6] text-accent-dark hover:text-primary transition-colors"
                >
                  Service & Amenities
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col">
              <h3 className="text-small text-secondary-light uppercase mb-12">
                Contact
              </h3>
              <div className="space-y-6">
                <p className="text-body text-accent-dark">
                  194 Vo Nguyen Giap, Phuoc My, Son Tra, Da Nang, Vietnam
                </p>
                <p className="text-body text-accent-dark">+84236 365 8386</p>
                <p className="text-body text-accent-dark">
                  soleil.hotel@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-small text-secondary-light">
            © 2025 Teklabs. All rights reserved
          </p>

          <div className="flex items-center gap-12">
            <div className="flex items-center gap-12">
              <Link
                href="#"
                className="text-small text-secondary-light hover:text-secondary transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-small text-secondary-light hover:text-secondary transition-colors"
              >
                Facebook
              </Link>
            </div>

            <div className="flex items-center gap-12">
              <Link
                href="#"
                className="text-small text-secondary-light hover:text-secondary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-small text-secondary-light hover:text-secondary transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
