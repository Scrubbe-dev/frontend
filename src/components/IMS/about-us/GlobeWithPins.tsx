/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// ⛔ FIX: Import Globe with SSR disabled
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

const GlobeWithPins = () => {
  const globeEl = useRef<any>(null);

  const markers = [
    { lat: 40.7128, lng: -74.006, label: "New York" },
    { lat: 51.5074, lng: -0.1278, label: "London" },
    { lat: 35.6895, lng: 139.6917, label: "Tokyo" },
  ];

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2 });
    }
  }, []);

  return (
    <div className="py-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-3xl md:text-5xl font-bigshotOne">
          Resilience Without Borders
        </p>
        <p className="max-w-xl text-center">
          Our round the clock global operations ensure we’re always online,
          serving you from our key centers of excellence around the world.
        </p>
      </div>

      {/* ⬇ Globe now works without window errors */}
      <Globe
        ref={globeEl}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-day.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={markers}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointLabel={(d: any) => d.label}
        pointAltitude={0.04}
        pointColor={() => "orange"}
        pointRadius={0.2}
        height={500}
        labelDotRadius={0.2}
        labelAltitude={0.05}
      />
    </div>
  );
};

export default GlobeWithPins;
