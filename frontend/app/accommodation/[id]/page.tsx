import React from "react";
import AccommodationDetailClient from "./AccommodationDetailClient";
import { ROOM_DETAILS, COMMON_AMENITIES } from "../../../constants/seedData";

interface AccommodationDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AccommodationDetailPage({
  params,
}: AccommodationDetailPageProps) {
  const { id } = await params;

  // Get room data from seed data
  const roomData = ROOM_DETAILS[id] || {
    id: id,
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

  return <AccommodationDetailClient roomData={roomData} />;
}
