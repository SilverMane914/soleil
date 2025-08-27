"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const itemsPerPage = 3;

  const filteredItems = SERVICE_AMENITIES.filter(
    (item) => item.category === activeTab
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handleTabChange = async (tab: "service" | "amenity") => {
    setIsLoading(true);
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when changing tabs
    // Smooth transition for tab changes
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      setIsPageChanging(true);
      setCurrentPage(currentPage + 1);
      // Smooth transition without full loading state
      setTimeout(() => setIsPageChanging(false), 150);
    }
  };

  const handlePrevPage = async () => {
    if (currentPage > 1) {
      setIsPageChanging(true);
      setCurrentPage(currentPage - 1);
      // Smooth transition without full loading state
      setTimeout(() => setIsPageChanging(false), 150);
    }
  };

  return (
    <section className={`py-12 md:py-24 bg-background ${className}`}>
      <div className="container-custom">
        <div className="space-y-8 md:space-y-16">
          {/* Section Header */}
          {showTitle && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <h2 className="font-butler font-normal text-3xl md:text-[72px] leading-[1.1] tracking-[-2%] text-primary">
                {title.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < title.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="font-figtree font-normal text-base md:text-[20px] leading-[1.5] text-secondary">
                {description}
              </p>
            </div>
          )}

          {/* Tab Buttons and Navigation Arrows */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
              <button
                onClick={
                  activeTab === "service"
                    ? undefined
                    : () => handleTabChange("service")
                }
                className={`w-full sm:w-auto px-8 md:px-14 py-3 md:py-4 font-figtree font-medium text-sm md:text-body rounded-full transition-all duration-300 ${
                  activeTab === "service"
                    ? "bg-primary text-white shadow-sm cursor-default"
                    : "border border-primary text-primary hover:bg-primary/5 active:scale-95"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                SERVICE
              </button>
              <button
                onClick={
                  activeTab === "amenity"
                    ? undefined
                    : () => handleTabChange("amenity")
                }
                className={`w-full sm:w-auto px-8 md:px-14 py-3 md:py-4 font-figtree font-medium text-sm md:text-body rounded-full transition-all duration-300 ${
                  activeTab === "amenity"
                    ? "bg-primary text-white shadow-sm cursor-default"
                    : "border border-primary text-primary hover:bg-primary/5 active:scale-95"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                AMENITIES
              </button>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 md:gap-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1 || isLoading || isPageChanging}
                className={`w-12 h-12 md:w-14 md:h-14 border rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentPage === 1
                    ? "border-border text-secondary cursor-not-allowed"
                    : "border-border text-secondary hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95"
                }`}
                aria-label="Previous page"
              >
                {isPageChanging && currentPage > 1 ? (
                  <div className="animate-spin rounded-full h-3 w-3 md:h-4 md:w-4 border-b-2 border-primary"></div>
                ) : (
                  <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                )}
              </button>
              <button
                onClick={handleNextPage}
                disabled={
                  currentPage === totalPages || isLoading || isPageChanging
                }
                className={`w-12 h-12 md:w-14 md:h-14 border rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentPage === totalPages
                    ? "border-border text-secondary cursor-not-allowed"
                    : "border-primary bg-primary/5 text-primary hover:bg-primary/10 hover:scale-105 active:scale-95"
                }`}
                aria-label="Next page"
              >
                {isPageChanging && currentPage < totalPages ? (
                  <div className="animate-spin rounded-full h-3 w-3 md:h-4 md:w-4 border-b-2 border-primary"></div>
                ) : (
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Items Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-300 ${
              isLoading || isPageChanging
                ? "opacity-50 scale-95"
                : "opacity-100 scale-100"
            }`}
          >
            {isLoading ? (
              // Loading state
              <>
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="space-y-4 md:space-y-5 animate-pulse"
                  >
                    <div className="w-full h-[300px] md:h-[588px] bg-gray-200 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-5 md:h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 md:h-4 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // Content
              currentItems.map((item) => (
                <div
                  key={item.id}
                  className="space-y-4 md:space-y-5 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Item Image */}
                  <div className="w-full h-[300px] md:h-[588px] overflow-hidden relative shadow-lg">
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
                    <h3 className="font-figtree font-semibold text-lg md:text-[20px] leading-[1.4] text-primary uppercase">
                      {item.title}
                    </h3>
                    <p className="font-figtree font-normal text-sm md:text-[16px] leading-[1.5] text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Empty State */}
          {currentItems.length === 0 && !isLoading && (
            <div className="text-center py-8 md:py-12">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-4xl">📋</span>
              </div>
              <h3 className="text-lg md:text-[24px] leading-[1.4] text-primary font-figtree font-semibold mb-2 md:mb-3">
                No {activeTab === "service" ? "Services" : "Amenities"}{" "}
                Available
              </h3>
              <p className="text-sm md:text-[16px] leading-[1.6] text-secondary font-figtree max-w-md mx-auto px-4 md:px-0">
                We&apos;re currently updating our{" "}
                {activeTab === "service" ? "services" : "amenities"} list.
                Please check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
