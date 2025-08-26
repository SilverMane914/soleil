"use client";

import React, { useState } from "react";
import Image from "next/image";

import HeroSection from "../../components/organisms/HeroSection";

import BookingSection from "../../components/organisms/BookingSection";
import { SERVICE_AMENITIES } from "../../constants/seedData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"service" | "amenity">("amenity");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const itemsPerPage = 6;

  const filteredItems = SERVICE_AMENITIES.filter(
    (item) => item.category === activeTab
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

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

  const handleTabChange = async (tab: "service" | "amenity") => {
    setIsLoading(true);
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when changing tabs
    // Full loading state for tab changes
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      {/* Hero Section */}
      <HeroSection
        title="SOLEIL HOTEL"
        subtitle="Service & Amenities"
        showScrollIndicator={false}
        showFloatingButton={false}
      />

      {/* Tab Navigation */}
      <section className="py-24 bg-[#F5F3EF]">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="flex gap-8 rounded-full">
              <button
                onClick={() => handleTabChange("service")}
                disabled={isLoading}
                className={`w-[179px] h-[56px] font-figtree font-medium text-[16px] leading-[1.5] rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  activeTab === "service"
                    ? "bg-[#906E31] text-white shadow-sm"
                    : "bg-transparent border border-[#906E31] text-[#906E31] hover:bg-[#906E31]/5 active:scale-95"
                }`}
              >
                {isLoading && activeTab === "service"
                  ? "Loading..."
                  : "Service"}
              </button>
              <button
                onClick={() => handleTabChange("amenity")}
                disabled={isLoading}
                className={`w-[179px] h-[56px] font-figtree font-medium text-[16px] leading-[1.5] rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  activeTab === "amenity"
                    ? "bg-[#906E31] text-white shadow-sm"
                    : "bg-transparent border border-[#906E31] text-[#906E31] hover:bg-[#906E31]/5 active:scale-95"
                }`}
              >
                {isLoading && activeTab === "amenity"
                  ? "Loading..."
                  : "Amenities"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service/Amenity Cards */}
      <section className="py-24 bg-[#F5F3EF]">
        <div className="container-custom">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#906E31]"></div>
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 transition-all duration-300 ${
                isPageChanging ? "opacity-50 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="group space-y-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="w-full h-[325px] overflow-hidden relative shadow-lg">
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

                  {/* Content */}
                  <div className="space-y-3 px-2">
                    <h3 className="text-[20px] leading-[1.4] text-[#1C1917] font-figtree font-semibold uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-[#57534E] font-figtree font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Navigation Arrows */}
      <section className="py-12 bg-[#F5F3EF]">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="flex items-center gap-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1 || isLoading || isPageChanging}
                className={`w-14 h-14 border rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentPage === 1
                    ? "border-[#D7D3D0] text-[#A9A29D] cursor-not-allowed"
                    : "border-[#D7D3D0] text-[#A9A29D] hover:border-[#906E31] hover:bg-[#906E31]/5 hover:scale-105 active:scale-95"
                }`}
                aria-label="Previous page"
              >
                {isPageChanging && currentPage > 1 ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#906E31]"></div>
                ) : (
                  <ArrowLeft className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={handleNextPage}
                disabled={
                  currentPage === totalPages || isLoading || isPageChanging
                }
                className={`w-14 h-14 border rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentPage === totalPages
                    ? "border-[#D7D3D0] text-[#A9A29D] cursor-not-allowed"
                    : "border-[#664914] bg-[#906E31]/5 text-[#664914] hover:bg-[#906E31]/10 hover:scale-105 active:scale-95"
                }`}
                aria-label="Next page"
              >
                {isPageChanging && currentPage < totalPages ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#906E31]"></div>
                ) : (
                  <ArrowRight className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Empty State for No Items */}
      {currentItems.length === 0 && !isLoading && (
        <section className="py-24 bg-[#F5F3EF]">
          <div className="container-custom">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#D7D3D0] rounded-full flex items-center justify-center">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-[24px] leading-[1.4] text-[#906E31] font-figtree font-semibold mb-3">
                No {activeTab === "service" ? "Services" : "Amenities"}{" "}
                Available
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#57534E] font-figtree max-w-md mx-auto">
                We&apos;re currently updating our{" "}
                {activeTab === "service" ? "services" : "amenities"} list.
                Please check back soon!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Booking Section */}
      <BookingSection />
    </div>
  );
}
