"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Sourbros App",
    image: "/next.svg",
    description: "Community Cooking App",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/vercel.svg",
    description: "Innovative solutions for the web",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/globe.svg",
    description: "Creating experiences that matter",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Project Four",
    image: "/window.svg",
    description: "Pushing boundaries of what's possible",
    color: "from-pink-500/20 to-rose-500/20",
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show header after scrolling past the first section
      setShowHeader(scrollPosition > windowHeight * 0.5);

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        // Check if we're in this section (with some tolerance)
        if (
          scrollPosition >= sectionTop - windowHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* Header with Social Links */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            <nav className="flex items-center gap-6">
              <a
                href="https://github.com/pilipb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border hover:border-foreground/20"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/phil-blecher-a653251a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border hover:border-foreground/20"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Page 1 */}
      <section className="scroll-section flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-in">
            Philip Blecher
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-delay">
            Product and Developer
          </p>
          <div className="pt-8 animate-fade-in-delay-2">
            <div className="w-12 h-1 bg-foreground mx-auto"></div>
          </div>
          <div className="pt-12 animate-fade-in-delay-2">
            <p className="text-sm text-muted-foreground">Scroll to explore</p>
            <div className="mt-4 animate-bounce">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Project Pages */}
      {projects.map((project, index) => (
        <section
          key={project.id}
          className={`scroll-section flex items-center justify-center bg-gradient-to-br ${project.color} transition-all duration-700`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="relative aspect-video bg-muted/50 rounded-lg overflow-hidden shadow-2xl group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-12 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-6 text-center md:text-left">
                <div className="inline-block">
                  <span className="text-sm font-mono text-muted-foreground">
                    Project {String(index + 1).padStart(2, "0")}
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
            </div>
          </div>
        </section>
      ))}

      {/* Scroll Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-3">
          {[0, ...projects.map((_, i) => i + 1)].map((sectionIndex) => (
            <button
              key={sectionIndex}
              onClick={() => {
                const sections = document.querySelectorAll(".scroll-section");
                sections[sectionIndex]?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${
                activeSection === sectionIndex
                  ? "bg-foreground h-12"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to section ${sectionIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
