import React from "react";
import Image from "next/image";
import BookingSection from "../components/organisms/BookingSection";
import Button from "../components/atoms/Button";
import HeroSection from "../components/organisms/HeroSection";
import ServiceAmenitiesSlider from "../components/organisms/ServiceAmenitiesSlider";
import MeetingServicesSection from "../components/organisms/MeetingServicesSection";
import { HOME_CONTENT } from "../constants/seedData";
import InfiniteSlider from "../components/molecules/InfiniteSlider";

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
      <section className="py-8 md:py-16 bg-background">
        <div className="container-custom">
          {/* Mobile Layout - Single Column */}
          <div className="block lg:hidden space-y-6">
            {/* Mobile: Stack images vertically with consistent sizing */}
            <div className="w-full h-[300px] md:h-[400px] overflow-hidden relative">
              <Image
                src={HOME_CONTENT.decorativeImages.leftColumn}
                alt="Decorative image - Left column"
                fill
                className="object-cover"
                priority={false}
                loading="lazy"
              />
            </div>

            <div className="w-full h-[400px] md:h-[500px] overflow-hidden relative">
              <Image
                src={HOME_CONTENT.decorativeImages.centerImage}
                alt="Decorative image - Center column"
                fill
                className="object-cover"
                priority={true}
                loading="eager"
              />
            </div>

            <div className="w-full h-[300px] md:h-[400px] overflow-hidden relative">
              <Image
                src={HOME_CONTENT.decorativeImages.rightColumn}
                alt="Decorative image - Right column"
                fill
                className="object-cover"
                priority={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Desktop Layout - Three Column Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 items-end">
            {/* Left Image - Smaller, centered with middle */}
            <div className="w-full max-w-[282px] h-[512px] overflow-hidden relative flex items-center justify-center">
              <div className="w-full h-[282px] overflow-hidden relative">
                <Image
                  src={HOME_CONTENT.decorativeImages.leftColumn}
                  alt="Decorative image - Left column"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle Image - Full size */}
            <div className="w-full max-w-[388px] h-[512px] overflow-hidden relative">
              <Image
                src={HOME_CONTENT.decorativeImages.centerImage}
                alt="Decorative image - Center column"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={true}
                loading="eager"
              />
            </div>

            {/* Right Image - Smaller, positioned at right edge */}
            <div className="w-full max-w-[280px] h-[320px] overflow-hidden relative flex items-end justify-start ml-auto">
              <Image
                src={HOME_CONTENT.decorativeImages.rightColumn}
                alt="Decorative image - Right column"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={false}
                loading="lazy"
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
      <InfiniteSlider
        items={HOME_CONTENT.featuredRooms}
        title="Discover Our Rooms"
        maxVisible={3}
        showNavigation={true}
        className="py-32"
      />

      {/* Meeting Services Section */}
      <MeetingServicesSection
        title={HOME_CONTENT.meetingServices.title}
        description={HOME_CONTENT.meetingServices.description}
        backgroundImage="/bg-ballroom.jpg"
        overlayImage="/img-ballroom.jpg"
      />

      {/* Service & Amenities Section */}
      <ServiceAmenitiesSlider
        title={HOME_CONTENT.serviceAmenities.title}
        description={HOME_CONTENT.serviceAmenities.description}
      />

      {/* Booking Section */}
      <BookingSection />
    </main>
  );
}
