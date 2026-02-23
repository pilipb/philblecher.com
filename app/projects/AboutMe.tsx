"use client";

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { useParallax } from "../hooks/useParallax";

export default function AboutMe() {
  const imageParallax = useParallax({ speed: 0.2 });
  const contentParallax = useParallax({ speed: -0.1 });
  
  return (
    <section className="scroll-section flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-500/20 to-rose-500/20">
      <div className="container mx-auto px-4 py-8 md:py-0">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
            className="space-y-6 md:space-y-8 text-center md:text-left"
            style={contentParallax.style}
          >
            <div className="inline-block">
              <span className="text-sm font-mono text-foreground">
                About
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              Phil Blecher
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
              Product and Developer passionate about building meaningful digital experiences.
            </p>
            <div className="pt-2 md:pt-4">
              <div className="w-24 h-1 bg-foreground mx-auto md:mx-0"></div>
            </div>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-foreground pt-4 md:pt-8">
              <p>
                I'm a product builder and developer who loves creating things that matter. 
                I work at the intersection of design, technology, and user experience, 
                bringing ideas to life through thoughtful development and product thinking.
              </p>
              <p>
                Whether it's building community-driven apps, exploring AI-powered tools, 
                or crafting digital experiences, I'm driven by curiosity and the desire 
                to solve real problems.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/pilipb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:underline"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/phil-blecher-a653251a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:underline"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
