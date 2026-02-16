"use client";

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="scroll-section flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-500/20 to-rose-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative aspect-square bg-muted/50 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/me/profile.png"
              alt="Phil Blecher"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-block">
              <span className="text-sm font-mono text-muted-foreground">
                About
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Phil Blecher
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Product and Developer passionate about building meaningful digital experiences.
            </p>
            <div className="pt-4">
              <div className="w-24 h-1 bg-foreground"></div>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground pt-8">
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
