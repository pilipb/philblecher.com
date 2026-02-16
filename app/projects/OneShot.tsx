"use client";

import { projects } from "./data";
import FlippableCard from "./FlippableCard";

export default function ProjectThree() {
  const project = projects.find(p => p.id === 3)!;
  
  const frontContent = (
    <div className="space-y-6 text-center md:text-left bg-background/95 rounded-lg p-8 backdrop-blur-sm shadow-2xl">
      <div className="inline-block">
        <span className="text-sm font-mono text-muted-foreground">
          Project 03
        </span>
      </div>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        {project.title}
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      <div className="pt-4">
        <div className="w-24 h-1 bg-foreground"></div>
      </div>
    </div>
  );

  const backContent = (
    <div className="w-full h-full space-y-6 text-center md:text-left bg-white rounded-lg p-8 shadow-2xl flex flex-col justify-center">
      <div className="inline-block">
        <span className="text-sm font-mono text-muted-foreground">
          Project 03 - Details
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
        Click the corner to flip back
      </p>
    </div>
  );
  
  return (
    <section className="scroll-section flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-contain z-0"
      >
        <source src="/oneshot/demo.mov" type="video/quicktime" />
        <source src="/oneshot/demo.mov" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div></div>
          {/* Project Info with Flippable Card */}
          <FlippableCard front={frontContent} back={backContent} />
        </div>
      </div>
    </section>
  );
}
