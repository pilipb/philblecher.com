"use client";

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { useParallax } from "../hooks/useParallax";
import BouncingText from "../components/BouncingText";

export default function AboutMe() {
  const imageParallax = useParallax({ speed: 0.2 });
  const contentParallax = useParallax({ speed: -0.1 });
  
  return (
    <section className="scroll-section flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-500/40 to-blue-500/20">
      <div className="container mx-auto px-4 sm:px-6 py-4 md:py-0">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Profile Image with Parallax */}
          <div 
            ref={imageParallax.ref as React.RefObject<HTMLDivElement>}
            className="relative aspect-square w-full max-w-sm mx-auto md:max-w-none bg-muted/50 rounded-lg overflow-hidden shadow-2xl"
            style={imageParallax.style}
          >
            <Image
              src="/me/profile.png"
              alt="Phil Blecher"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content with Parallax */}
          <div 
            ref={contentParallax.ref as React.RefObject<HTMLDivElement>}
            className="space-y-2 sm:space-y-4 md:space-y-8 text-center md:text-left"
            style={contentParallax.style}
          >
            <div className="inline-block">
              <span className="text-sm font-mono text-foreground">
                <BouncingText>About</BouncingText>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight break-words">
              <BouncingText>Phil Blecher</BouncingText>
            </h2>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-foreground leading-relaxed break-words px-2 sm:px-0">
              Product Engineer / Software Developer (depends who asks). I'm excited by creating fun interfaces for consumer apps, and complex agentic applications.
            </p>
            <div className="pt-1 md:pt-4">
              <div className="w-24 h-1 bg-foreground mx-auto md:mx-0"></div>
            </div>
            <div className="space-y-2 md:space-y-4 text-xs sm:text-sm md:text-lg text-foreground pt-2 md:pt-8 break-words px-2 sm:px-0">
              <p>
                  I started as a design engineer and quickly pivoted to the dark side: software engineering. Over the past couple of years I've worked moslty on consumer apps, first as a backend engineer, then as a full stack developer working across react, next.js, and flutter and now react native.
              </p>
              <p>
                  This portfolio is a collection of my proudest moments - the projects that I have had full ownership of the design and development. All of the projects above cross the full stack and make use of agentic workflows for complicated reasoning tasks (apart from sourbros which is a social app).
              </p>
            </div>
            <div className="pt-3 md:pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/pilipb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:underline"
              >
                <Github className="w-5 h-5" />
                <span><BouncingText>GitHub</BouncingText></span>
              </a>
              <a
                href="https://www.linkedin.com/in/phil-blecher-a653251a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:underline"
              >
                <Linkedin className="w-5 h-5" />
                <span><BouncingText>LinkedIn</BouncingText></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
