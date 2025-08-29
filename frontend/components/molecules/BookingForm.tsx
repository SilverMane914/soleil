"use client";

import React, { useState } from "react";
import { ChevronDown, Calendar, Users } from "lucide-react";
import Button from "../atoms/Button";
import { BOOKING_FORM } from "../../constants/seedData";

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className = "" }) => {
  const [checkIn, setCheckIn] = useState<Date>(
    BOOKING_FORM.defaultValues.checkIn
  );
  const [checkOut, setCheckOut] = useState<Date>(
    BOOKING_FORM.defaultValues.checkOut
  );
  const [guests, setGuests] = useState<number>(
    BOOKING_FORM.defaultValues.guests
  );
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleDateSelect = (date: Date, type: "checkIn" | "checkOut") => {
    if (type === "checkIn") {
      setCheckIn(date);
      setShowCheckInPicker(false);
      // Ensure check-out is at least 1 day after check-in
      if (date >= checkOut) {
        const newCheckOut = new Date(date);
        newCheckOut.setDate(newCheckOut.getDate() + 1);
        setCheckOut(newCheckOut);
      }
    } else {
      if (date > checkIn) {
        setCheckOut(date);
        setShowCheckOutPicker(false);
      }
    }
  };

  const handleGuestSelect = (guestCount: number) => {
    setGuests(guestCount);
    setShowGuestPicker(false);
  };

  const generateDateOptions = (
    startDate: Date,
    endDate: Date,
    type: "checkIn" | "checkOut"
  ) => {
    const dates: Date[] = [];
    const current = new Date(startDate);

    while (current <= endDate) {
      if (type === "checkOut" && current <= checkIn) {
        current.setDate(current.getDate() + 1);
        continue;
      }
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  };

  const checkInDates = generateDateOptions(
    BOOKING_FORM.minDate,
    BOOKING_FORM.maxDate,
    "checkIn"
  );

  const checkOutDates = generateDateOptions(
    new Date(checkIn.getTime() + 24 * 60 * 60 * 1000), // Day after check-in
    BOOKING_FORM.maxDate,
    "checkOut"
  );

  return (
    <div className={`${className}`}>
      <h2 className="text-2xl md:text-hero text-white text-center mb-8 md:mb-12">
        {BOOKING_FORM.title}
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Check-in */}
        <div className="flex-1 relative">
          <div
            className="bg-white/20 border border-white/16 rounded-md p-3 md:p-4 cursor-pointer hover:bg-white/30 transition-colors"
            onClick={() => {
              setShowCheckInPicker(!showCheckInPicker);
              setShowCheckOutPicker(false);
              setShowGuestPicker(false);
            }}
          >
            <label className="block text-white text-sm mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {BOOKING_FORM.fields.checkIn}
            </label>
            <div className="flex items-center justify-between">
              <span className="text-white text-base md:">
                {formatDate(checkIn)}
              </span>
              <ChevronDown
                className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform ${
                  showCheckInPicker ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Check-in Date Picker Dropdown */}
          {showCheckInPicker && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
              {checkInDates.map((date) => (
                <div
                  key={date.getTime()}
                  className="px-3 md:px-4 py-2 md:py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleDateSelect(date, "checkIn")}
                >
                  <div className="text-sm font-medium text-gray-900">
                    {formatDate(date)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {date.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Check-out */}
        <div className="flex-1 relative">
          <div
            className="bg-white/20 border border-white/16 rounded-md p-3 md:p-4 cursor-pointer hover:bg-white/30 transition-colors"
            onClick={() => {
              setShowCheckOutPicker(!showCheckOutPicker);
              setShowCheckInPicker(false);
              setShowGuestPicker(false);
            }}
          >
            <label className="block text-white text-sm mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {BOOKING_FORM.fields.checkOut}
            </label>
            <div className="flex items-center justify-between">
              <span className="text-white text-base md:">
                {formatDate(checkOut)}
              </span>
              <ChevronDown
                className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform ${
                  showCheckOutPicker ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Check-out Date Picker Dropdown */}
          {showCheckOutPicker && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
              {checkOutDates.map((date) => (
                <div
                  key={date.getTime()}
                  className="px-3 md:px-4 py-2 md:py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleDateSelect(date, "checkOut")}
                >
                  <div className="text-sm font-medium text-gray-900">
                    {formatDate(date)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {date.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Number of guests */}
        <div className="flex-1 relative">
          <div
            className="bg-white/20 border border-white/16 rounded-md p-3 md:p-4 cursor-pointer hover:bg-white/30 transition-colors"
            onClick={() => {
              setShowGuestPicker(!showGuestPicker);
              setShowCheckInPicker(false);
              setShowCheckOutPicker(false);
            }}
          >
            <label className="block text-white text-sm mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              {BOOKING_FORM.fields.guests}
            </label>
            <div className="flex items-center justify-between">
              <span className="text-white text-base md:">
                {BOOKING_FORM.guestOptions.find(
                  (option) => option.value === guests
                )?.label || `${guests} Guests`}
              </span>
              <ChevronDown
                className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform ${
                  showGuestPicker ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Guest Picker Dropdown */}
          {showGuestPicker && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
              {BOOKING_FORM.guestOptions.map((option) => (
                <div
                  key={option.value}
                  className="px-3 md:px-4 py-2 md:py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleGuestSelect(option.value)}
                >
                  <div className="text-sm font-medium text-gray-900">
                    {option.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <Button
          variant="accent"
          size="lg"
          className="w-full md:w-auto bg-white/90 text-primary-light rounded-full hover:bg-white text-sm md:text-base"
        >
          {BOOKING_FORM.buttonText}
        </Button>
      </div>

      {/* Click outside to close dropdowns */}
      {(showCheckInPicker || showCheckOutPicker || showGuestPicker) && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => {
            setShowCheckInPicker(false);
            setShowCheckOutPicker(false);
            setShowGuestPicker(false);
          }}
        />
      )}
    </div>
  );
};

export default BookingForm;
