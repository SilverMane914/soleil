import React from "react";
import Image from "next/image";
import HeroSection from "../../components/organisms/HeroSection";
import BookingSection from "../../components/organisms/BookingSection";
import { ABOUT_CONTENT } from "../../constants/seedData";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection title="SOLEIL" subtitle="ABOUT US" />

      {/* Welcome Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
            <div className="space-y-4">
              <h2 className="text-title text-primary">
                {ABOUT_CONTENT.welcomeTitle.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index <
                      ABOUT_CONTENT.welcomeTitle.split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-subtitle text-secondary leading-relaxed">
                {ABOUT_CONTENT.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Panorama Image Section */}
      <section className="pt-8 pb-4 bg-background">
        <div className="container-custom">
          <div className="w-full h-[930px] rounded-lg overflow-hidden relative">
            <Image
              src={ABOUT_CONTENT.images.panorama}
              alt="Wyndham Soleil Hotel - Panoramic view"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Two Column Image Section */}
      <section className="pt-4 pb-8 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full h-[553px] rounded-lg overflow-hidden relative">
              <Image
                src={ABOUT_CONTENT.images.exterior}
                alt="Wyndham Soleil Hotel - Exterior view"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[553px] rounded-lg overflow-hidden relative">
              <Image
                src={ABOUT_CONTENT.images.interior}
                alt="Wyndham Soleil Hotel - Interior view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Description Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div>
            <p className="text-subtitle text-secondary leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />
    </main>
  );
}
