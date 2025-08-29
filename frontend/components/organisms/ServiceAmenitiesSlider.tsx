"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import InfiniteSlider from "../molecules/InfiniteSlider";
import { SERVICE_AMENITIES } from "../../constants/seedData";

interface SliderItem {
  id: number | string;
  title?: string;
  name?: string;
  description?: string;
  image: string;
  size?: string;
  [key: string]: unknown;
}

interface ServiceAmenitiesSliderProps {
  title: string;
  description: string;
  showTitle?: boolean;
  className?: string;
}

export default function ServiceAmenitiesSlider({
  title,
  description,
  showTitle = true,
  className = "",
}: ServiceAmenitiesSliderProps) {
  const [activeTab, setActiveTab] = useState<"service" | "amenity">("amenity");
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 3;

  const filteredItems = SERVICE_AMENITIES.filter(
    (item) => item.category === activeTab
  );

  const totalItems = filteredItems.length;
  const canNavigate = totalItems > maxVisible;

  // Get visible items for current view
  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < maxVisible; i++) {
      const itemIndex = (currentIndex + i) % totalItems;
      visibleItems.push({
        ...filteredItems[itemIndex],
        displayIndex: i,
        actualIndex: itemIndex,
      });
    }
    return visibleItems;
  };

  const handleTabChange = (tab: "service" | "amenity") => {
    setActiveTab(tab);
    setCurrentIndex(0); // Reset to first items when changing tabs
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handleItemClick = (item: SliderItem) => {
    // Handle item click - could open modal, navigate to detail page, etc.
    console.log("Clicked item:", item);
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

          {/* Tab Buttons and Navigation in Same Row */}
          <div className="flex items-center justify-between">
            {/* Tab Buttons - Left Side */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => handleTabChange("service")}
                className={`w-full sm:w-auto px-8 md:px-14 py-3 md:py-4 font-figtree font-medium text-sm rounded-full transition-all duration-300 ${
                  activeTab === "service"
                    ? "bg-primary text-white shadow-sm cursor-default"
                    : "border border-primary text-primary hover:bg-primary/5 active:scale-95"
                }`}
              >
                SERVICE
              </button>
              <button
                onClick={() => handleTabChange("amenity")}
                className={`w-full sm:w-auto px-8 md:px-14 py-3 md:py-4 font-figtree font-medium text-sm rounded-full transition-all duration-300 ${
                  activeTab === "amenity"
                    ? "bg-primary text-white shadow-sm cursor-default"
                    : "border border-primary text-primary hover:bg-primary/5 active:scale-95"
                }`}
              >
                AMENITIES
              </button>
            </div>

            {/* Navigation Buttons - Right Side */}
            {canNavigate && (
              <div className="flex gap-8 items-center">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  className="box-border flex gap-2 items-center justify-center p-4 relative rounded-full border border-border hover:border-primary transition-colors duration-200"
                  aria-label="Previous items"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ArrowLeft className="w-6 h-6 text-primary" />
                  </div>
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="box-border flex gap-2 items-center justify-center p-4 relative rounded-full border border-border hover:border-primary transition-colors duration-200"
                  aria-label="Next items"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Infinite Slider */}
          <InfiniteSlider
            items={getVisibleItems()}
            maxVisible={3}
            showNavigation={false}
            onItemClick={handleItemClick}
            className="py-4 md:py-6"
            containerClassName=""
          />
        </div>
      </div>
    </section>
  );
}
