"use client";

import { useState } from "react";
import { ReactNode } from "react";

interface FlippableCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export default function FlippableCard({ front, back, className = "" }: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Hidden front to determine height */}
      <div className="invisible w-full pointer-events-none">
        {front}
      </div>
      <div
        className="absolute inset-0 w-full transition-transform duration-700 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {front}
          {/* Peeling Corner Indicator */}
          <div className="absolute inset-0 w-full">
            <div
              className="relative transition-all duration-300"
              style={{
                transform: isHovering
                  ? "translate(8px, -8px) rotate(5deg)"
                  : "translate(0, 0) rotate(0deg)",
              }}
            >
              {/* Corner icon/hint */}
              <div className="absolute top-4 right-4 z-10">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm"
                style={{
                  transform: isHovering ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <svg
                  className="w-5 h-5 text-muted-foreground transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    transform: isHovering ? "rotate(-5deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 12 Q 12 6 6 12 M 9 7 L 6 12 L 9 17"
                  />
                </svg>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {back}
          {/* Flip back indicator */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm">
              <svg
                className="w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 12 Q 12 6 6 12 M 9 7 L 6 12 L 9 17"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
