"use client";

import React from "react";
import Image from "next/image";
import BookingSection from "../components/organisms/BookingSection";
import Button from "../components/atoms/Button";
import Navigation from "../components/molecules/Navigation";
import HeroSection from "../components/organisms/HeroSection";
import { HOME_CONTENT } from "../constants/seedData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HomePage() {
  const handleNextRoom = () => {
    // Handle next room logic
  };

  const handlePrevRoom = () => {
    // Handle previous room logic
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}

      <HeroSection
        title={HOME_CONTENT.hero.title}
        subtitle={HOME_CONTENT.hero.subtitle}
        backgroundImage="/bg-srv.jpg"
        showScrollIndicator={true}
        showFloatingButton={true}
      />

      {/* Welcome Section */}
      <section className="py-48 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
            <div className="space-y-4">
              <h2 className="font-abhaya-libre font-normal text-[64px] leading-[1.1] tracking-[-2%] text-primary">
                {HOME_CONTENT.welcome.title.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index <
                      HOME_CONTENT.welcome.title.split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </h2>
            </div>
            <div className="flex items-center">
              <div className="space-y-12">
                <p className="font-figtree font-normal text-[16px] leading-[1.5] text-secondary">
                  {HOME_CONTENT.welcome.description}
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  icon={true}
                >
                  {HOME_CONTENT.welcome.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Images Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="w-full h-[640px] overflow-hidden relative">
              <Image
                src={HOME_CONTENT.decorativeImages.leftColumn}
                alt="Decorative image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[640px] overflow-hidden relative">
              <Image
                src={HOME_CONTENT.decorativeImages.centerImage}
                alt="Decorative image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[640px] overflow-hidden relative">
              <Image
                src={HOME_CONTENT.decorativeImages.rightColumn}
                alt="Decorative image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <section className="py-8 bg-background">
        <div className="container-custom">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border"></div>
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/Vector.svg"
                alt="Decorative divider"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <div className="flex-1 h-px bg-border"></div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-32 bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {/* Section Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-butler font-normal text-[72px] leading-[1.1] tracking-[-2%] text-primary">
                Discover Our Rooms
              </h2>
              <div className="flex items-center gap-8">
                <button
                  onClick={handlePrevRoom}
                  className="w-14 h-14 border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <ArrowLeft className="w-6 h-6 text-secondary" />
                </button>
                <button
                  onClick={handleNextRoom}
                  className="w-14 h-14 border border-primary rounded-full flex items-center justify-center bg-primary/5"
                >
                  <ArrowRight className="w-6 h-6 text-primary" />
                </button>
              </div>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {HOME_CONTENT.featuredRooms.map((room) => (
                <div key={room.id} className="space-y-5">
                  {/* Room Image */}
                  <div className="w-full h-[560px] overflow-hidden relative">
                    <Image
                      src={room.image}
                      alt={`${room.name} - Wyndham Soleil Hotel`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Room Content */}
                  <div className="space-y-2">
                    <h3 className="font-figtree font-medium text-[20px] leading-[1.4] text-primary uppercase">
                      {room.name}
                    </h3>
                    <p className="font-figtree font-normal text-[16px] leading-[1.5] text-secondary">
                      {room.size}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Services Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="relative">
            {/* Background Image */}
            <div className="w-full h-[982px] overflow-hidden relative">
              <Image
                src={HOME_CONTENT.meetingServices.image}
                alt="Meeting services background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(95,55,0,0.2)]"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute top-44 right-32 w-88 space-y-6">
              <h2 className="font-butler font-normal text-[72px] leading-[1.1] tracking-[-2%] text-white">
                {HOME_CONTENT.meetingServices.title
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index <
                        HOME_CONTENT.meetingServices.title.split("\n").length -
                          1 && <br />}
                    </React.Fragment>
                  ))}
              </h2>

              <div className="w-130 h-88 overflow-hidden relative">
                <Image
                  src="/img-srv-1.jpg"
                  alt="Meeting venue"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="font-figtree font-normal text-[16px] leading-[1.5] text-white max-w-[519px]">
                {HOME_CONTENT.meetingServices.description}
              </p>
            </div>

            {/* Page Counter */}
            <div className="absolute bottom-24 right-20 flex flex-col items-center gap-3 text-white">
              <span className="font-figtree font-normal text-[17px] leading-[1.5]">
                1
              </span>
              <div className="w-0 h-18 border-l border-white"></div>
              <span className="font-figtree font-normal text-[17px] leading-[1.5]">
                4
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service & Amenities Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {/* Section Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="font-butler font-normal text-[72px] leading-[1.1] tracking-[-2%] text-primary">
                {HOME_CONTENT.serviceAmenities.title
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index <
                        HOME_CONTENT.serviceAmenities.title.split("\n").length -
                          1 && <br />}
                    </React.Fragment>
                  ))}
              </h2>
              <p className="font-figtree font-normal text-[20px] leading-[1.5] text-secondary">
                {HOME_CONTENT.serviceAmenities.description}
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-start gap-4">
              <button className="px-14 py-4 border border-primary text-primary font-figtree font-medium text-body rounded-full transition-all duration-200">
                Service
              </button>
              <button className="px-14 py-4 bg-primary text-white font-figtree font-medium text-body rounded-full transition-all duration-200">
                Amenities
              </button>
            </div>

            {/* Featured Items Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {HOME_CONTENT.serviceAmenities.featuredItems.map((item) => (
                <div key={item.id} className="space-y-5">
                  {/* Item Image */}
                  <div className="w-full h-[588px] overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={`${item.title} - Wyndham Soleil Hotel`}
                      fill
                      className="object-cover"
                    />
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Arrows */}
      <section className="py-8 bg-background">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="flex items-center gap-8">
              <button className="w-14 h-14 border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200">
                <ArrowLeft className="w-6 h-6 text-secondary" />
              </button>
              <button className="w-14 h-14 border border-primary rounded-full flex items-center justify-center bg-primary/5">
                <ArrowRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />
    </main>
  );
}
