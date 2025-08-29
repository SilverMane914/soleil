"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroSection from "../../../components/organisms/HeroSection";
import BookingSection from "../../../components/organisms/BookingSection";
import ImageSlider from "../../../components/molecules/ImageSlider";
import Button from "@/components/atoms/Button";
import { BOOKING_FORM } from "@/constants/seedData";

interface RoomRecommendation {
  id: number;
  name: string;
  image: string;
  overview: string;
  keyFeatures: string[];
}

interface RoomData {
  id: string;
  name: string;
  overview: {
    cityView: string;
    oceanView: string;
  };
  keyFeatures: {
    bedType: string;
    view: string;
    occupancy: string;
    roomSize: string;
    checkInOut: string;
  };
  amenities: Array<{ amenity: string; icon: string }>;
  images: string[];
  recommendations: RoomRecommendation[];
}

interface AccommodationDetailClientProps {
  roomData: RoomData;
}

export default function AccommodationDetailClient({
  roomData,
}: AccommodationDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection title="ACCOMMODATION" subtitle={roomData.name} />

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="container-custom flex">
          {/* Left Column - Overview */}
          <div className="space-y-8 w-full">
            <h2 className="text-title text-primary font-butler">Overview</h2>
          </div>
          <div className="grid grid-cols-11 gap-10">
            <div className="space-y-6 my-5 col-span-3">
              {roomData.overview.cityView && (
                <h4 className="text-subtitle text-secondary leading-relaxed">
                  {roomData.overview.cityView}
                </h4>
              )}
              {roomData.overview.oceanView && (
                <h4 className="text-subtitle text-secondary leading-relaxed">
                  {roomData.overview.oceanView}
                </h4>
              )}
            </div>

            {/* Right Column - Key Features */}
            <div className="space-y-6 w-full col-span-4">
              <h5 className="text-heading text-primary font-butler">
                Key features:
              </h5>
              <div className="space-y-2">
                <p className="text-subtitle text-secondary">
                  Bed Type | {roomData.keyFeatures.bedType}
                </p>
                <p className="text-subtitle text-secondary">
                  View | {roomData.keyFeatures.view}
                </p>
                <p className="text-subtitle text-secondary">
                  Occupancy | {roomData.keyFeatures.occupancy}
                </p>
                <p className="text-subtitle text-secondary">
                  Room Size | {roomData.keyFeatures.roomSize}
                </p>
                <p className="text-subtitle text-secondary">
                  Check in/out | {roomData.keyFeatures.checkInOut}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-end text-center col-span-4 h-72">
              <Button
                variant="outline"
                size="lg"
                className="w-fit md:w-auto bg-white/90 rounded-full text-sm text-[#664914] md:text-base border-[#664914]"
              >
                {BOOKING_FORM.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Panorama Image Section */}
      <section className="py-1 bg-background">
        <div className="container-custom">
          <div className="w-full h-[600px] overflow-hidden relative">
            <Image
              src={roomData.images[activeImageIndex]}
              alt={`${roomData.name} - Panorama View ${activeImageIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <ImageSlider
            images={roomData.images}
            altText={roomData.name}
            activeIndex={activeImageIndex}
            onImageChange={setActiveImageIndex}
            maxVisible={3}
            showNavigation={false}
            showCounter={false}
          />
        </div>
      </section>

      {/* Panorama Navigation */}
      <div className="flex items-center justify-center gap-8">
        <button
          className={`w-14 h-14 border rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
            activeImageIndex === 0
              ? "border[-#664914] text-[#664914] cursor-not-allowed"
              : "border-[#664914] text-[#664914] hover:bg-white/10"
          }`}
          onClick={() =>
            activeImageIndex > 0 && setActiveImageIndex(activeImageIndex - 1)
          }
          disabled={activeImageIndex === 0}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke={`${activeImageIndex === 0 ? "lightgray" : "#664914"}`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* 
        <span className="text-white text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
          {activeImageIndex + 1} / {roomData.images.length}
        </span> */}

        <button
          className={`w-14 h-14 border rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
            activeImageIndex === roomData.images.length - 1
              ? "border[-#664914] text-[#664914] cursor-not-allowed"
              : "border-[#664914] text-[#664914] hover:bg-white/10"
          }`}
          onClick={() =>
            activeImageIndex < roomData.images.length - 1 &&
            setActiveImageIndex(activeImageIndex + 1)
          }
          disabled={activeImageIndex === roomData.images.length - 1}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke={`${
              activeImageIndex === roomData.images.length - 1
                ? "lightgray"
                : "#664914"
            }`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Amenities Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Amenities Title */}
            <div>
              <h2 className="text-title text-primary font-butler">Amenities</h2>
            </div>

            {/* Right Column - Amenities List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roomData.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    {!amenity.icon ? (
                      <Image
                        src={amenity.icon}
                        alt={amenity.amenity}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <span className="text-subtitle text-secondary">
                    {amenity.amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gray Line Divider */}
      <section className="py-0 bg-background">
        <div className="container-custom">
          <div className="w-full h-px bg-border"></div>
        </div>
      </section>

      {/* Other Room Recommendations */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {/* Section Header */}
            <div>
              <h2 className="text-heading text-primary font-butler mb-4">
                Other Room Recommendations
              </h2>
            </div>

            {/* Recommendations Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {roomData.recommendations.map((room) => (
                <div key={room.id} className="space-y-6">
                  <div className="w-full h-[419px] overflow-hidden relative">
                    <Image
                      src={room.image}
                      alt={`${room.name} - Wyndham Soleil Hotel`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-subtitle text-primary font-figtree font-medium">
                      {room.name}
                    </h3>
                    <p className="text-body text-secondary leading-relaxed whitespace-pre-line">
                      {room.overview}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />
    </div>
  );
}
