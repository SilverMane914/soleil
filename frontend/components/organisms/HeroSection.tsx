import React from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showScrollIndicator?: boolean;
  showFloatingButton?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "/bg-srv.jpg",
  showScrollIndicator = true,
  showFloatingButton = true,
}) => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(4,41,41,0.12)]"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="font-figtree font-normal text-[18px] leading-[1.4] tracking-[11.11%] text-white uppercase mb-6">
            {title}
          </h1>
          <p className="font-butler font-normal text-[78px] leading-[1.1] tracking-[-3%] text-white mb-16">
            {subtitle}
          </p>

          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <div className="flex flex-col items-center gap-8">
              <div className="w-px h-24 bg-white"></div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-white font-figtree font-semibold text-[16px] leading-[1.5]">
                  SCROLL TO DISCOVER
                </span>
                <ChevronDown className="w-6 h-6 text-white animate-bounce" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      {showFloatingButton && (
        <div className="absolute bottom-8 right-20">
          <div className="w-40 h-40 bg-[#FFEEB1] rounded-full p-0 flex items-center justify-center relative overflow-hidden">
            {/* Rotating Circle Border Animation using Vector-booking.svg */}
            <div className="absolute inset-2 animate-[spin_10s_linear_infinite]">
              <Image
                src="/Vector-booking.svg"
                alt="Booking Border"
                width={144}
                height={144}
                className="w-full h-full"
              />
            </div>

            {/* Inner Circle */}
            <div className="w-35 h-35 rounded-full flex items-center justify-center relative z-10 p-4">
              <ArrowUpRight className="w-8 h-8 text-[#1C1917]" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
