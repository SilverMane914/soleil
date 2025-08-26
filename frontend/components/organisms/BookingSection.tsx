import React from "react";
import BookingForm from "../molecules/BookingForm";

interface BookingSectionProps {
  className?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`py-32 bg-cover bg-center bg-no-repeat relative ${className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/booking-form.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
