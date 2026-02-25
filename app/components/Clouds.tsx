"use client";

import { useMemo } from "react";

// Generate stable random values for each cloud
const generateCloudProps = (index: number) => {
  // Use a seeded random-like function for consistency
  let seed = index * 123.456;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const speed = 20 + random() * 30; // Random speed between 20-50 seconds
  const delay = random() * 2; // Random delay up to 5 seconds
  const startX = -200 - random() * 200; // Start off-screen left
  const yPosition = random() * 100; // Random vertical position (0-100%)
  const width = 150 + random() * 300; // Random width

  return { speed, delay, startX, yPosition, width };
};

export default function Clouds() {
  // Generate stable cloud configurations
  const cloudConfigs = useMemo(
    () => Array.from({ length: 20 }).map((_, i) => generateCloudProps(i)),
    []
  );

  // Create cloud SVG
  const CloudSVG = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,60 Q30,50 20,60 T10,70 Q10,80 20,80 T40,85 Q50,90 60,85 T80,80 Q90,80 90,70 Q90,60 80,60 Q75,50 65,50 Q60,40 50,45 Q40,40 30,45 Q20,50 20,60"
        fill="rgba(255, 255, 255, 0.7)"
        opacity="0.8"
      />
    </svg>
  );

  return (
    <div className="Clouds">
      <div className="Clouds__div__imageContainer">
        {/* Multiple cloud instances for layered effect */}
        {cloudConfigs.map((config, i) => (
          <div
            key={i}
            className="Clouds__div__imageContainer__imagediv"
            style={{
              width: `${config.width}px`,
              left: `${config.startX}px`,
              top: `${config.yPosition}%`,
              animation: `cloudMove ${config.speed}s linear ${config.delay}s infinite`,
            }}
          >
            <CloudSVG />
          </div>
        ))}
      </div>
    </div>
  );
}
