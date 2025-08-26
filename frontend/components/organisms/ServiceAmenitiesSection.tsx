"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICE_AMENITIES } from "../../constants/seedData";

interface ServiceAmenitiesSectionProps {
  title: string;
  description: string;
  showTitle?: boolean;
  className?: string;
}

export default function ServiceAmenitiesSection({
  title,
  description,
  showTitle = true,
  className = "",
}: ServiceAmenitiesSectionProps) {
  const [activeTab, setActiveTab] = useState<"service" | "amenity">("amenity");
  const [isLoading, setIsLoading] = useState(false);

  const filteredItems = SERVICE_AMENITIES.filter(
    (item) => item.category === activeTab
  );

  const handleTabChange = async (tab: "service" | "amenity") => {
    setIsLoading(true);
    setActiveTab(tab);
    // Smooth transition for tab changes
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <section className={`py-24 bg-background ${className}`}>
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          {showTitle && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="font-butler font-normal text-[72px] leading-[1.1] tracking-[-2%] text-primary">
                {title.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < title.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="font-figtree font-normal text-[20px] leading-[1.5] text-secondary">
                {description}
              </p>
            </div>
          )}

          {/* Tab Buttons */}
          <div className="flex justify-start gap-4">
            <button
              onClick={() => handleTabChange("service")}
              disabled={isLoading}
              className={`px-14 py-4 font-figtree font-medium text-body rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                activeTab === "service"
                  ? "bg-primary text-white shadow-sm"
                  : "border border-primary text-primary hover:bg-primary/5 active:scale-95"
              }`}
            >
              {isLoading && activeTab === "service" ? "Loading..." : "Service"}
            </button>
            <button
              onClick={() => handleTabChange("amenity")}
              disabled={isLoading}
              className={`px-14 py-4 font-figtree font-medium text-body rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                activeTab === "amenity"
                  ? "bg-primary text-white shadow-sm"
                  : "border border-primary text-primary hover:bg-primary/5 active:scale-95"
              }`}
            >
              {isLoading && activeTab === "amenity" ? "Loading..." : "Amenities"}
            </button>
          </div>

          {/* Items Grid */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-300 ${
              isLoading ? "opacity-50 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {isLoading ? (
              // Loading state
              <>
                {[1, 2, 3].map((index) => (
                  <div key={index} className="space-y-5 animate-pulse">
                    <div className="w-full h-[588px] bg-gray-200 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // Content
              filteredItems.slice(0, 3).map((item) => (
                <div key={item.id} className="space-y-5 group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                  {/* Item Image */}
                  <div className="w-full h-[588px] overflow-hidden relative shadow-lg">
                    <Image
                      src={item.image}
                      alt={`${item.title} - Wyndham Soleil Hotel`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={false}
                      onError={(e) => {
                        // Fallback for failed images
                        const target = e.target as HTMLImageElement;
                        target.src = "/accom-room-1.png";
                      }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Item Content */}
                  <div className="space-y-2">
                    <h3 className="font-figtree font-semibold text-[20px] leading-[1.4] text-primary uppercase">
                      {item.title}
                    </h3>
                    <p className="font-figtree font-normal text-[16px] leading-[1.5] text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-[24px] leading-[1.4] text-primary font-figtree font-semibold mb-3">
                No {activeTab === "service" ? "Services" : "Amenities"} Available
              </h3>
              <p className="text-[16px] leading-[1.6] text-secondary font-figtree max-w-md mx-auto">
                We&apos;re currently updating our {activeTab === "service" ? "services" : "amenities"} list.
                Please check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
