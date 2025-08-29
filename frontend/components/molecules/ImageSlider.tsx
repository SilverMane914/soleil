"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  altText: string;
  activeIndex: number;
  onImageChange: (index: number) => void;
  maxVisible?: number;
  showNavigation?: boolean;
  showCounter?: boolean;
  className?: string;
}

export default function ImageSlider({
  images,
  altText,
  activeIndex,
  onImageChange,
  maxVisible = 3,
  showNavigation = true,
  showCounter = true,
  className = "",
}: ImageSliderProps) {
  const [startIndex, setStartIndex] = useState(0);

  // Simple slider logic - show images from startIndex
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < maxVisible && startIndex + i < images.length; i++) {
      const index = startIndex + i;
      visibleImages.push({
        image: images[index],
        actualIndex: index,
        displayIndex: i,
      });
    }
    return visibleImages;
  };

  const goToNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, images.length - maxVisible));
  };

  const goToPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const goToImage = (targetIndex: number) => {
    onImageChange(targetIndex);

    // Auto-scroll slider to show the selected image
    const targetStartIndex = Math.max(
      0,
      targetIndex - Math.floor(maxVisible / 2)
    );
    setStartIndex(targetStartIndex % images.length);
  };

  // Auto-update startIndex when activeIndex changes externally
  useEffect(() => {
    if (activeIndex < startIndex || activeIndex >= startIndex + maxVisible) {
      const newStartIndex = Math.max(
        0,
        activeIndex - Math.floor(maxVisible / 2)
      );
      setStartIndex(newStartIndex % images.length);
    }
  }, [activeIndex, startIndex, maxVisible, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  const visibleImages = getVisibleImages();
  const canGoNext = startIndex + maxVisible < images.length;
  const canGoPrevious = startIndex > 0;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex items-center gap-8">
        {/* Left Navigation */}
        {showNavigation && canGoPrevious && (
          <button
            className="w-12 h-12 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary/5 transition-all duration-200"
            onClick={goToPrevious}
            aria-label="Previous images"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        {/* Visible Images */}
        <div className="flex gap-6">
          {visibleImages.map(({ image, actualIndex, displayIndex }) => (
            <div
              key={`${startIndex}-${displayIndex}`}
              className={`w-[390px] h-[290px] overflow-hidden relative cursor-pointer transition-all duration-200 ${
                activeIndex === actualIndex
                  ? "ring-2 ring-primary ring-offset-2"
                  : "hover:scale-105"
              }`}
              onClick={() => goToImage(actualIndex)}
            >
              <Image
                src={image}
                alt={`${altText} - View ${actualIndex + 1}`}
                fill
                className="object-cover"
              />
              {activeIndex === actualIndex && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Navigation */}
        {showNavigation && canGoNext && (
          <button
            className="w-12 h-12 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary/5 transition-all duration-200"
            onClick={goToNext}
            aria-label="Next images"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        )}

        {/* Counter */}
        {showCounter && (
          <div className="text-sm text-secondary font-medium min-w-[60px] text-center">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
