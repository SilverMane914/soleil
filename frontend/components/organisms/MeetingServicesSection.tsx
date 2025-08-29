"use client";

import React from "react";
import Image from "next/image";

interface MeetingServicesSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  overlayImage: string;
  className?: string;
}

export default function MeetingServicesSection({
  title,
  description,
  backgroundImage,
  overlayImage,
  className = "",
}: MeetingServicesSectionProps) {
  return (
    <section
      className={`relative w-full h-[500px] md:h-[700px] lg:h-[982px] overflow-hidden ${className}`}
    >
      {/* Background Image with Overlay - Full Section Coverage */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Meeting services background"
          fill
          className="object-cover"
          priority={true}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[rgba(95,55,0,0.3)] md:bg-[rgba(95,55,0,0.25)] lg:bg-[rgba(95,55,0,0.2)]" />
      </div>

      {/* Content Overlay - 45% from left edge */}
      <div className="absolute left-[45%] md:left-[45%] lg:left-[45%] xl:left-[45%] top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6 items-start justify-start w-[280px] md:w-[320px] lg:w-[400px] xl:w-[500px]">
        {/* Title */}
        <h2 className="font-butler font-normal text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[72px] leading-[1.1] tracking-[-2%] text-white w-full">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>

        {/* Overlay Image - Exact Figma dimensions */}
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] xl:h-[352px] overflow-hidden">
          <Image
            src={overlayImage}
            alt="Meeting venue"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Description */}
        <p className="font-figtree font-normal text-sm md:text-base lg:text-lg leading-[1.5] text-white w-full max-w-full lg:max-w-[519px]">
          {description}
        </p>
      </div>

      {/* Page Counter - Exact Figma positioning */}
      <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-12 right-4 md:right-6 lg:right-8 xl:right-12 flex flex-col items-center gap-2 md:gap-3 text-white">
        <span className="font-figtree font-normal text-sm md:text-base lg:text-[17px] leading-[1.5]">
          1
        </span>
        <div className="flex h-[36px] md:h-[48px] lg:h-[60px] xl:h-[72px] items-center justify-center relative">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[36px] md:w-[48px] lg:w-[60px] xl:w-[72px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 72 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <line
                    x1="0"
                    y1="0.5"
                    x2="72"
                    y2="0.5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <span className="font-figtree font-normal text-sm md:text-base lg:text-[17px] leading-[1.5]">
          4
        </span>
      </div>

      {/* Mobile-friendly overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none md:hidden" />
    </section>
  );
}
