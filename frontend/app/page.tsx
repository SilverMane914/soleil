import React from "react";
import Image from "next/image";
import BookingSection from "../components/organisms/BookingSection";
import Button from "../components/atoms/Button";
import HeroSection from "../components/organisms/HeroSection";
import ServiceAmenitiesSection from "../components/organisms/ServiceAmenitiesSection";
import MeetingServicesSection from "../components/organisms/MeetingServicesSection";
import { HOME_CONTENT } from "../constants/seedData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title={HOME_CONTENT.hero.title}
        subtitle={HOME_CONTENT.hero.subtitle}
        backgroundImage="/bg-home.jpg"
      />

      {/* Welcome Section */}
      <section className="py-48 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="font-butler font-normal text-[64px] leading-[1.1] tracking-[-2%] text-primary">
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
                  href="/accommodation"
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-color rounded-full"
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
            <div>
              <h2 className="font-butler font-normal text-[72px] leading-[1.1] tracking-[-2%] text-primary">
                Discover Our Rooms
              </h2>
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
      <MeetingServicesSection
        title={HOME_CONTENT.meetingServices.title}
        description={HOME_CONTENT.meetingServices.description}
        backgroundImage="/bg-ballroom.jpg"
        overlayImage="/img-ballroom.jpg"
      />

      {/* Service & Amenities Section */}
      <ServiceAmenitiesSection
        title={HOME_CONTENT.serviceAmenities.title}
        description={HOME_CONTENT.serviceAmenities.description}
      />

      {/* Booking Section */}
      <BookingSection />
    </main>
  );
}
