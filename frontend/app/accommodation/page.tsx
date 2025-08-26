"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import HeroSection from "../../components/organisms/HeroSection";
import BookingSection from "../../components/organisms/BookingSection";
import Button from "../../components/atoms/Button";

import { ROOM_TYPES, HOTEL_INFO } from "../../constants/seedData";

export default function AccommodationPage() {
  const [selectedRoomType, setSelectedRoomType] = useState<string>("all");
  const [selectedBedType, setSelectedBedType] = useState<string>("all");
  const [isRoomTypeOpen, setIsRoomTypeOpen] = useState(false);
  const [isBedTypeOpen, setIsBedTypeOpen] = useState(false);

  // Filter options
  const roomTypeOptions = [
    "all",
    "Deluxe Studio",
    "One Bedroom Family Suite",
    "One Bedroom Deluxe Family Suite",
    "Two Bedrooms Family Suite",
    "Two Bedrooms Deluxe Family Suite",
  ];
  const bedTypeOptions = [
    "all",
    "King Bed",
    "Queen Bed",
    "Twin Bed",
    "King + Twin",
    "King + King",
  ];

  // Filter accommodation based on selections
  const filteredAccommodation = useMemo(() => {
    return ROOM_TYPES.filter((room) => {
      const roomTypeMatch =
        selectedRoomType === "all" || room.name === selectedRoomType;

      let bedTypeMatch = true;
      if (selectedBedType !== "all") {
        // Check if the room overview contains the selected bed type
        bedTypeMatch = room.overview
          .toLowerCase()
          .includes(selectedBedType.toLowerCase());
      }

      return roomTypeMatch && bedTypeMatch;
    });
  }, [selectedRoomType, selectedBedType]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="ACCOMMODATION"
        subtitle="Discover our luxurious rooms and suites"
      />

      {/* Hotel Overview Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[20px] leading-[1.5] text-secondary font-figtree font-normal">
              {HOTEL_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          {/* Filter Dropdowns */}
          <div className="flex justify-center gap-6">
            {/* Room Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsRoomTypeOpen(!isRoomTypeOpen);
                  setIsBedTypeOpen(false);
                }}
                className={`flex items-center gap-3 px-8 py-4 font-figtree font-medium text-[16px] rounded-lg transition-all duration-300 ${
                  isRoomTypeOpen
                    ? "bg-[#906E31] text-white shadow-lg"
                    : "bg-white text-[#906E31] border border-[#906E31] hover:bg-[#906E31]/5"
                }`}
              >
                <span>
                  {selectedRoomType === "all"
                    ? "All Room Types"
                    : selectedRoomType}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isRoomTypeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Room Type Options Dropdown */}
              {isRoomTypeOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 z-20 min-w-[250px]">
                  <div className="py-2">
                    {roomTypeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedRoomType(option);
                          setIsRoomTypeOpen(false);
                        }}
                        className={`w-full text-left px-6 py-3 font-figtree font-medium text-[16px] transition-colors duration-200 hover:bg-[#906E31]/5 ${
                          selectedRoomType === option
                            ? "text-[#906E31] bg-[#906E31]/10"
                            : "text-[#1C1917] hover:text-[#906E31]"
                        }`}
                      >
                        {option === "all" ? "All Room Types" : option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bed Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsBedTypeOpen(!isBedTypeOpen);
                  setIsRoomTypeOpen(false);
                }}
                className={`flex items-center gap-3 px-8 py-4 font-figtree font-medium text-[16px] rounded-lg transition-all duration-300 ${
                  isBedTypeOpen
                    ? "bg-[#906E31] text-white shadow-lg"
                    : "bg-white text-[#906E31] border border-[#906E31] hover:bg-[#906E31]/5"
                }`}
              >
                <span>
                  {selectedBedType === "all"
                    ? "All Bed Types"
                    : selectedBedType}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isBedTypeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Bed Type Options Dropdown */}
              {isBedTypeOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 z-20 min-w-[250px]">
                  <div className="py-2">
                    {bedTypeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedBedType(option);
                          setIsBedTypeOpen(false);
                        }}
                        className={`w-full text-left px-6 py-3 font-figtree font-medium text-[16px] transition-colors duration-200 hover:bg-[#906E31]/5 ${
                          selectedBedType === option
                            ? "text-[#906E31] bg-[#906E31]/10"
                            : "text-[#1C1917] hover:text-[#906E31]"
                        }`}
                      >
                        {option === "all" ? "All Bed Types" : option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Room Listings Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {filteredAccommodation.map((room, index) => (
              <div
                key={room.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              >
                {/* Divider Line */}
                {index < ROOM_TYPES.length - 1 && (
                  <div className="col-span-1 lg:col-span-2">
                    <div className="w-full h-px bg-border"></div>
                  </div>
                )}

                {/* Room Image */}
                <div className="w-full h-[419px] overflow-hidden relative">
                  <Image
                    src={room.image}
                    alt={`${room.name} - Wyndham Soleil Hotel`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Room Details */}
                <div className="space-y-8">
                  <h2 className="text-[43px] leading-[1.1] tracking-[-0.02em] text-primary font-butler">
                    {room.name}
                  </h2>

                  <div className="space-y-6">
                    {/* Overview */}
                    <p className="text-[20px] leading-[1.5] text-secondary font-figtree font-normal whitespace-pre-line">
                      {room.overview}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-[18px] font-figtree font-semibold text-[#1C1917] mb-3">
                        Key features:
                      </h3>
                      <div className="space-y-2">
                        <p className="text-[16px] font-figtree font-normal text-[#57534E] leading-relaxed">
                          Large balcony | Flat screen HDTV | Well-equipped
                          kitchenette
                        </p>
                        <p className="text-[16px] font-figtree font-normal text-[#57534E] leading-relaxed">
                          Private bathroom with rain shower | Free Wi-Fi |
                          In-room safe
                        </p>
                        <p className="text-[16px] font-figtree font-normal text-[#57534E] leading-relaxed">
                          Refrigerator | Coffee/Tea maker
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <Button
                      href={`/accommodation/${room.id}`}
                      variant="outline"
                      size="md"
                      className="rounded-full uppercase"
                      icon={false}
                    >
                      See Room Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />
    </div>
  );
}
