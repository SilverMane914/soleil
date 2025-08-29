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
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // smooth animation
    });
  };
  return (
    <section
      className="relative h-screen pt-16 md:pt-0 hover:cursor-pointer"
      onClick={() => scrollToBottom()}
    >
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
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-figtree font-normal text-base md:text-[18px] leading-[1.4] tracking-[11.11%] text-white uppercase mb-4 md:mb-6">
            {title}
          </h1>
          <p className="font-butler font-normal text-4xl md:text-[78px] leading-[1.1] tracking-[-3%] text-white mb-8 md:mb-16">
            {subtitle}
          </p>

          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <div className="w-px h-16 md:h-24 bg-white"></div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-white font-figtree font-semibold text-sm md:text-[16px] leading-[1.5]">
                  SCROLL TO DISCOVER
                </span>
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white animate-bounce" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      {showFloatingButton && (
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-20">
          <div className="w-24 h-24 md:w-40 md:h-40 bg-[#FFEEB1] rounded-full p-0 flex items-center justify-center relative overflow-hidden">
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
            <div className="w-20 h-20 md:w-35 md:h-35 rounded-full flex items-center justify-center relative z-10 p-3 md:p-4">
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-[#1C1917]" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
