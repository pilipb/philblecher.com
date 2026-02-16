import Image from "next/image";
import { Project } from "./types";
import FlippableCard from "./FlippableCard";

interface ProjectSectionProps {
  project: Project;
  index: number;
}

export default function ProjectSection({ project, index }: ProjectSectionProps) {
  const frontContent = (
    <div className="space-y-6 text-center md:text-left bg-background/95 rounded-lg p-8 backdrop-blur-sm shadow-2xl">
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
  );

  const backContent = (
    <div className="w-full h-full space-y-6 text-center md:text-left bg-white rounded-lg p-8 shadow-2xl flex flex-col justify-center">
      <div className="inline-block">
        <span className="text-sm font-mono text-muted-foreground">
          Project {String(index + 1).padStart(2, "0")} - Details
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
        {project.title}
      </h2>
      <div className="space-y-4 text-lg text-muted-foreground">
        <p>
          {project.description}
        </p>
        <p>
          This project represents innovative thinking and creative problem-solving, pushing the boundaries of what's possible in digital experiences.
        </p>
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
    <section
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

          {/* Project Info with Flippable Card */}
          <FlippableCard front={frontContent} back={backContent} />
        </div>
      </div>
    </section>
  );
}
