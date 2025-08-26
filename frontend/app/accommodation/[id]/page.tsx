"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroSection from "../../../components/organisms/HeroSection";
import BookingSection from "../../../components/organisms/BookingSection";
import ImageSlider from "../../../components/molecules/ImageSlider";
import { ROOM_DETAILS, COMMON_AMENITIES } from "../../../constants/seedData";

interface AccommodationDetailPageProps {
  params: {
    id: string;
  };
}

export default function AccommodationDetailPage({
  params,
}: AccommodationDetailPageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Get room data from seed data
  const roomData = ROOM_DETAILS[params.id] || {
    id: params.id,
    name: "Room Not Found",
    overview: {
      cityView: "Information not available",
      oceanView: "Information not available",
    },
    keyFeatures: {
      bedType: "N/A",
      view: "N/A",
      occupancy: "N/A",
      roomSize: "N/A",
      checkInOut: "N/A",
    },
    amenities: COMMON_AMENITIES,
    images: ["/accom-room-1.png", "/accom-room-1.png", "/accom-room-1.png"],
    recommendations: [],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection title="ACCOMMODATION" subtitle={roomData.name} />

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Overview */}
            <div className="space-y-8">
              <h2 className="text-title text-primary font-butler">Overview</h2>

              <div className="space-y-4">
                {roomData.overview.cityView && (
                  <p className="text-subtitle text-secondary leading-relaxed">
                    {roomData.overview.cityView}
                  </p>
                )}
                {roomData.overview.oceanView && (
                  <p className="text-subtitle text-secondary leading-relaxed">
                    {roomData.overview.oceanView}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column - Key Features */}
            <div className="space-y-6">
              <h3 className="text-heading text-primary font-butler">
                Key features:
              </h3>
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
          </div>
        </div>
      </section>

      {/* Panorama Image Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="w-full h-[700px] overflow-hidden relative">
            <Image
              src={roomData.images[activeImageIndex]}
              alt={`${roomData.name} - Panorama View ${activeImageIndex + 1}`}
              fill
              className="object-cover"
            />

            {/* Panorama Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8">
              <button
                className={`w-14 h-14 border rounded-full flex items-center justify-center transition-all duration-200 ${
                  activeImageIndex === 0
                    ? "border-gray-300 text-gray-300 cursor-not-allowed"
                    : "border-white text-white hover:bg-white/10"
                }`}
                onClick={() =>
                  activeImageIndex > 0 &&
                  setActiveImageIndex(activeImageIndex - 1)
                }
                disabled={activeImageIndex === 0}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
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

              <span className="text-white text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
                {activeImageIndex + 1} / {roomData.images.length}
              </span>

              <button
                className={`w-14 h-14 border rounded-full flex items-center justify-center transition-all duration-200 ${
                  activeImageIndex === roomData.images.length - 1
                    ? "border-gray-300 text-gray-300 cursor-not-allowed"
                    : "border-white text-white hover:bg-white/10"
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
                  stroke="currentColor"
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
            showNavigation={true}
            showCounter={true}
          />
        </div>
      </section>

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
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-subtitle text-secondary">
                    {amenity}
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
