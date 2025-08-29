"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";

interface SliderItem {
  id: number | string;
  title?: string;
  name?: string; // For backward compatibility with featuredRooms
  description?: string;
  image: string;
  size?: string;
  category?: "service" | "amenity";
  [key: string]: unknown; // Allow additional properties
}

interface InfiniteSliderProps {
  items: SliderItem[];
  title?: string;
  description?: string;
  maxVisible?: number;
  showNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  containerClassName?: string;
  onItemClick?: (item: SliderItem) => void;
  renderItem?: (item: SliderItem, index: number) => React.ReactNode;
}

export default function InfiniteSlider({
  items,
  title,
  description,
  maxVisible = 3,
  showNavigation = true,
  className = "",
  itemClassName = "",
  containerClassName = "container-custom",
  onItemClick,
  renderItem,
}: InfiniteSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate total items
  const totalItems = items.length;

  // Get visible items for current view
  const getVisibleItems = useCallback(() => {
    const visibleItems = [];
    for (let i = 0; i < maxVisible; i++) {
      const itemIndex = (currentIndex + i) % totalItems;
      visibleItems.push({
        ...items[itemIndex],
        displayIndex: i,
        actualIndex: itemIndex,
      });
    }
    return visibleItems;
  }, [currentIndex, totalItems, maxVisible, items]);

  // Navigate to next set of items
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // Navigate to previous set of items
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Default item renderer
  const defaultRenderItem = (
    item: SliderItem & { displayIndex: number; actualIndex: number }
  ) => (
    <div
      key={`${item.id}-${item.displayIndex}`}
      className={cn("group cursor-pointer", itemClassName)}
      onClick={() => onItemClick?.(item)}
    >
      {/* Item Image */}
      <div className="w-full h-[300px] md:h-[588px] overflow-hidden relative shadow-lg">
        <Image
          src={item.image}
          alt={`${item.title || item.name} - Wyndham Soleil Hotel`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/accom-room-1.png";
          }}
        />
      </div>

      {/* Item Content */}
      <div className="space-y-2 mt-4">
        <h3 className="font-figtree font-semibold text-lg md:text-[20px] leading-[1.4] text-primary uppercase">
          {item.title || item.name}
        </h3>
        {/* Show size for rooms, description for other items */}
        {item.size && (
          <p className="font-figtree font-normal text-sm md:text-[16px] leading-[1.5] text-secondary">
            {item.size}
          </p>
        )}
        {/* Only show description if no size (for services/amenities) */}
        {!item.size && item.description && (
          <p className="font-figtree font-normal text-sm md:text-[16px] leading-[1.5] text-secondary">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );

  if (!items || items.length === 0) {
    return null;
  }

  const visibleItems = getVisibleItems();
  const canNavigate = totalItems > maxVisible;

  return (
    <section className={cn("py-12 md:py-24 bg-background", className)}>
      <div className={containerClassName}>
        <div className="space-y-6 md:space-y-8">
          {/* Section Header */}
          {(title || description) && (
            <div className="flex items-start justify-between">
              {/* Title and Description */}
              <div className="flex flex-col gap-5">
                {title && (
                  <h2 className="font-butler font-normal text-2xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-1.44px] text-primary max-w-[768px]">
                    {title.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>
                )}
                {description && (
                  <p className="font-figtree font-normal text-base md:text-[20px] leading-[1.5] text-secondary">
                    {description}
                  </p>
                )}
              </div>

              {/* Navigation Buttons - Only show when there are items to navigate */}
              {canNavigate && showNavigation && (
                <div className="flex gap-8 items-center">
                  {/* Previous Button */}
                  <button
                    onClick={goToPrevious}
                    className="box-border flex gap-2 items-center justify-center p-4 relative rounded-full border border-border hover:border-primary transition-colors duration-200"
                    aria-label="Previous items"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <ArrowLeft className="w-6 h-6 text-primary" />
                    </div>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={goToNext}
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
          )}

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleItems.map((item) =>
              renderItem
                ? renderItem(item, item.displayIndex)
                : defaultRenderItem(item)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
