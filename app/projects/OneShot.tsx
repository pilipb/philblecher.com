"use client";

import { projects } from "./data";
import FlippableCard from "./FlippableCard";
import { useParallax } from "../hooks/useParallax";
import BouncingText from "../components/BouncingText";

export default function ProjectThree() {
  const project = projects.find(p => p.id === 3)!;
  const videoParallax = useParallax({ speed: 0.3 });
  const contentParallax = useParallax({ speed: -0.1 });
  
  const frontContent = (
    <div className="space-y-6 text-center md:text-left bg-background/95 rounded-lg p-8 backdrop-blur-sm shadow-2xl">
      <div className="inline-block">
        <span className="text-sm font-mono text-muted-foreground">
          <BouncingText>Project 03</BouncingText>
        </span>
      </div>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        {project.title}
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      {project.nb && (
        <p className="text-sm text-muted-foreground">
          {project.nb}
        </p>
      )}
      <div className="pt-4">
        <div className="w-24 h-1 bg-foreground"></div>
      </div>
    </div>
  );

  const backContent = (
    <div className="w-full h-full space-y-6 text-center md:text-left bg-white rounded-lg p-8 shadow-2xl flex flex-col justify-center">
      <div className="inline-block">
        <span className="text-sm font-mono text-muted-foreground">
          <BouncingText>Project 03 - Details</BouncingText>
        </span>
      </div>
      <div className="space-y-4 text-lg text-muted-foreground">
        {project.backcontent && (
          <p className="pt-2">
            {project.backcontent}
          </p>
        )}
        {project.website && (
          <p className="pt-2">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Visit {project.website.replace(/^https?:\/\//, '')} →
            </a>
          </p>
        )}
      </div>
      <div className="pt-4">
        <div className="w-24 h-1 bg-foreground"></div>
      </div>
      <p className="text-sm text-muted-foreground italic">
        <BouncingText>Click the corner to flip back</BouncingText>
      </p>
    </div>
  );
  
  return (
    <section className="scroll-section flex items-center justify-center relative overflow-hidden bg-black">
      {/* Parallax Video Background */}
      <div
        ref={videoParallax.ref as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 w-full h-[120%]"
        style={videoParallax.style}
      >
        <div className="absolute inset-0 w-full h-full md:w-full md:h-full">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-screen aspect-square md:w-full md:h-full md:aspect-auto md:top-0 md:left-0 md:translate-x-0 md:translate-y-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover md:object-contain"
            >
              <source src="/oneshot/demo.mp4" type="video/mp4" />
              <source src="/oneshot/demo.mov" type="video/quicktime" />
            </video>
          </div>
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div 
          ref={contentParallax.ref as React.RefObject<HTMLDivElement>}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          style={contentParallax.style}
        >
          <div></div>
          {/* Project Info with Flippable Card - Hidden on mobile */}
          <div className="hidden md:block">
            <FlippableCard front={frontContent} back={backContent} />
          </div>
          <div className="md:hidden">
            {/* just have the title in plain black text with white background centred in the middle of the screen*/}
            <div className="flex flex-col items-end justify-end pr-12 pb-24 h-screen">
              <div className="bg-white rounded-lg p-8 shadow-2xl">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <div className="w-24 h-1 bg-foreground"></div>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
